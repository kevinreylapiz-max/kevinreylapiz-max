const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'change-this-secret';
const IGNORE_IPS = (process.env.IGNORE_IPS || '')
  .split(',')
  .map((ip) => ip.trim())
  .filter(Boolean);

const STORAGE_PATH = path.join(__dirname, 'data', 'visitors.json');

function loadData() {
  try {
    const raw = fs.readFileSync(STORAGE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      visitors: Array.isArray(parsed.visitors) ? parsed.visitors : [],
      totalVisits: Number(parsed.totalVisits || 0),
    };
  } catch (error) {
    return { visitors: [], totalVisits: 0 };
  }
}

function saveData(data) {
  fs.mkdirSync(path.dirname(STORAGE_PATH), { recursive: true });
  fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function getClientIP(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown';
}

function hideIP(ip) {
  if (!ip || ip === 'unknown') return 'unknown';
  const parts = ip.split('.');
  if (parts.length === 4) {
    return `${parts.slice(0, 3).join('.')}.***`;
  }
  return `${ip.slice(0, 8)}***`;
}

async function getGeo(ip) {
  if (!ip || ip === 'unknown' || ip.startsWith('::ffff:')) {
    return { country: 'Local', city: 'Local', flag: '🏠' };
  }

  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`, { timeout: 3000 });
    const data = response.data || {};
    return {
      country: data.country_name || 'Unknown',
      city: data.city || 'Unknown',
      flag: data.country_code ? `🇨${data.country_code.toUpperCase()}` : '❓',
    };
  } catch (error) {
    return { country: 'Unknown', city: 'Unknown', flag: '❓' };
  }
}

function safeBadgeText(text) {
  return String(text || '').replace(/[<>&"']/g, (char) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function createPngBuffer() {
  return Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
}

app.get('/api/track', async (req, res) => {
  const ip = getClientIP(req).replace(/^::ffff:/, '');

  if (IGNORE_IPS.includes(ip)) {
    res.set('Content-Type', 'image/png');
    return res.send(createPngBuffer());
  }

  const data = loadData();
  let visitor = data.visitors.find((entry) => entry.ip === ip);

  if (!visitor) {
    const geo = await getGeo(ip);
    visitor = {
      ip,
      visits: 1,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      country: geo.country,
      city: geo.city,
      flag: geo.flag,
    };
    data.visitors.push(visitor);
  } else {
    visitor.visits += 1;
    visitor.lastVisit = new Date().toISOString();
  }

  data.totalVisits += 1;
  saveData(data);

  res.set('Content-Type', 'image/png');
  res.send(createPngBuffer());
});

app.get('/api/stats', (req, res) => {
  const data = loadData();
  const topVisitors = [...data.visitors]
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 10)
    .map((visitor) => ({
      ip: hideIP(visitor.ip),
      visits: visitor.visits,
      country: `${visitor.flag || '❓'} ${visitor.country || 'Unknown'}`,
      city: visitor.city || 'Unknown',
      lastVisit: visitor.lastVisit,
    }));

  const countryMap = {};
  for (const visitor of data.visitors) {
    const key = visitor.country || 'Unknown';
    countryMap[key] = (countryMap[key] || 0) + 1;
  }

  const topCountries = Object.entries(countryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([country, count]) => ({ country, count }));

  res.json({
    totalVisitors: data.visitors.length,
    totalVisits: data.totalVisits,
    topVisitors,
    topCountries,
  });
});

app.get('/api/my-ip', (req, res) => {
  const ip = getClientIP(req).replace(/^::ffff:/, '');
  res.json({ ip, ignored: IGNORE_IPS.includes(ip) });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.get('/api/admin/dashboard', (req, res) => {
  const secret = req.query.secret;
  if (secret !== ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const data = loadData();
  res.json({
    totalVisitors: data.visitors.length,
    totalVisits: data.totalVisits,
    visitors: data.visitors
      .sort((a, b) => b.visits - a.visits)
      .map((visitor) => ({
        ip: visitor.ip,
        visits: visitor.visits,
        country: `${visitor.flag || '❓'} ${visitor.country || 'Unknown'}`,
        city: visitor.city || 'Unknown',
        firstVisit: visitor.firstVisit,
        lastVisit: visitor.lastVisit,
      })),
  });
});

app.post('/api/admin/reset', (req, res) => {
  const secret = req.query.secret;
  if (secret !== ADMIN_SECRET) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  saveData({ visitors: [], totalVisits: 0 });
  res.json({ success: true, message: 'Visitor data reset successfully.' });
});

app.get('/badge.svg', (req, res) => {
  const data = loadData();
  const top = [...data.visitors].sort((a, b) => b.visits - a.visits)[0];
  const label = 'Profile Views';
  const message = top
    ? `${data.visitors.length} unique | top ${top.visits}x`
    : '0 unique';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="28" role="img" aria-label="${safeBadgeText(label)}: ${safeBadgeText(message)}">
      <linearGradient id="g" x2="0" y2="100%">
        <stop offset="0" stop-color="#4a90ff" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <rect rx="3" width="320" height="28" fill="#333"/>
      <rect rx="3" x="120" width="200" height="28" fill="#00d9ff"/>
      <rect width="320" height="28" fill="url(#g)"/>
      <g fill="#fff" font-family="Verdana,Arial,sans-serif" font-size="11">
        <text x="60" y="18" text-anchor="middle" fill="#ffffff">${safeBadgeText(label)}</text>
        <text x="220" y="18" text-anchor="middle" fill="#ffffff">${safeBadgeText(message)}</text>
      </g>
    </svg>
  `;

  res.set('Content-Type', 'image/svg+xml');
  res.send(svg);
});

app.listen(PORT, () => {
  console.log(`Visitor tracker running on http://localhost:${PORT}`);
  console.log(`Use your ip in .env to exclude yourself: ${IGNORE_IPS.join(', ') || 'none configured yet'}`);
});

<div align="center">

# Kevin Rey Lapiz

### Software Developer · Android · Full-Stack Web · Human-Directed AI Engineering

I build and maintain software for Android and the web, with a focus on practical project work, clear documentation, and verification that keeps human judgment in the loop.

[Portfolio](https://kevinreylapiz.rf.gd) · [Email](mailto:kevinreylapiz@gmail.com) · [GitHub](https://github.com/kevinreylapiz-max)

[Projects](#featured-projects) · [SYNAPSE](#synapse--human-directed-ai-engineering-system) · [Education](docs/RESUME.md#education) · [Resume](docs/RESUME.md)

</div>

---

## Engineering Highlights

- Completed and defended **CacaoGuard**, an Android thesis application prototype, and continued development and maintenance after defense.
- Built and deployed **SpendLore**, a full-stack personal expense journal.
- Developing **SYNAPSE**, a human-directed AI engineering system that brings together orchestration workflows, structured project knowledge, and project-specific memory spaces (“cells”). Its source and cells remain private; this portfolio describes the approach without exposing their contents.
- Created **SafeFileOrganizer**, a safety-first Python utility that organizes files using dry-run previews, reports, quarantine, and undo workflows; it deliberately does not delete files.
- Completed **320 hours of OJT** at an Internet service provider, with practical exposure to networking and computer systems.

## Featured Projects

### CacaoGuard · Android thesis application

An Android prototype exploring cacao-pod image classification and location-based detection records. It brings together image input, on-device TensorFlow Lite inference, location-tagged detections, local history, maps, and backend services.

**Technologies:** Kotlin · Jetpack Compose · TensorFlow Lite · CameraX · Room · OSMDroid · Supabase  
[Project overview](docs/CACAOGUARD_OVERVIEW.md)

> CacaoGuard is a prototype, not a validated agricultural diagnostic tool. Source code and its project-specific SYNAPSE cell are private; no public demo is currently available.

### SpendLore · Deployed expense journal

A web application for recording and reviewing personal expenses, with charts, date-based reports, searchable history, authenticator MFA, and an optional bring-your-own-AI workflow.

**Technologies:** React · TypeScript · Vite · Supabase · PostgreSQL · Playwright · GitHub Actions  
[Open the live application](https://spendlore.vercel.app)

The source repository is private.

### SafeFileOrganizer · Safety-first file organization

A Python utility for classifying files, detecting duplicates, and moving selected items into a review quarantine. It creates dry-run reports before changes, supports an undo workflow, and is designed to avoid deletion. Windows is the tested platform; other platforms are untested.

**Technologies:** Python · Standard Library · unittest  
[Public source repository](https://github.com/kevinreylapiz-max/SafeFileOrganizer)

> Back up important data and inspect the dry-run report before authorizing file movement. The review folder is a quarantine, not a deletion target.

## SYNAPSE · Human-directed AI engineering system

SYNAPSE is my evolving approach to using AI as an engineering collaborator while keeping the human engineer responsible for direction, verification, review, and acceptance. It combines AI orchestration practices with a structured knowledge and operations layer for carrying project context forward.

A central idea is the **project cell**: a separate, project-specific memory and continuity space. A cell can keep that project's state, decisions, checkpoints, handoffs, and work queue distinct, rather than mixing context across unrelated projects. For example, CacaoGuard has its own private cell. The public portfolio describes this architecture at a high level; SYNAPSE Core and its cells remain private.

SYNAPSE is a work in progress, not an autonomous agent or a claim that AI output is correct. I direct the work, run deterministic checks, review evidence, and decide what is accepted.

[Project overview](docs/SYNAPSE_OVERVIEW.md) · [Workflow notes](AGENTIC_WORKFLOW.md)

## Documentation

[Open the documentation index](docs/INDEX.md) for the full guide collection:

- [Resume](docs/RESUME.md) — education, project experience, skills, and training.
- [CacaoGuard overview](docs/CACAOGUARD_OVERVIEW.md) — project scope, technology, boundaries, and evidence status.
- [SYNAPSE overview](docs/SYNAPSE_OVERVIEW.md) — orchestration approach, project cells, workflow, and human review boundary.
- [OJT experience](docs/OJT_EXPERIENCE.md) — confirmed training details and evidence status.
- [Engineering philosophy](docs/ENGINEERING_PHILOSOPHY.md) — principles for implementation, verification, and responsible AI use.
- [AI-assisted engineering workflow](AGENTIC_WORKFLOW.md) — workflow steps and collaborator roles.

## Evidence and responsible disclosure

Examples in this repository that are explicitly labeled demonstration-only are not real project test results or checkpoints. Project-specific screenshots, recordings, test results, and implementation details should be shared only when authentic, approved, and safe to publish. Private repositories, prompts, credentials, personal data, and confidential project context are not included here.

## Technologies & Tools

**Languages**  
Kotlin · TypeScript · JavaScript · Python · PHP · PowerShell

**Android & Web**  
Android · Jetpack Compose · CameraX · React · Vite

**Backend, databases & hosting**  
Node.js · Express · Supabase · PostgreSQL · MySQL · SQLite · Room · Vercel · InfinityFree

**Computer vision & machine learning**  
TensorFlow Lite · Roboflow · Ultralytics · OSMDroid

**Testing, version control & CI/CD**  
Playwright · unittest · Git · GitHub Actions

These technologies reflect project, coursework, and training experience; depth varies by tool. AI-assisted work does not replace testing or human review.

## Contact

Open to internship and junior software engineering opportunities, including Android and full-stack development, and to project collaboration.

[Email](mailto:kevinreylapiz@gmail.com) · [Portfolio](https://kevinreylapiz.rf.gd) · [GitHub](https://github.com/kevinreylapiz-max)

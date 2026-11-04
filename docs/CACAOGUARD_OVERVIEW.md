# CacaoGuard — project overview

## At a glance

CacaoGuard is an Android thesis application prototype exploring cacao-pod image classification alongside location-based detection records. The project was completed and defended as a thesis, with development and maintenance continuing afterward.

**Status and access:** The source repository is private and there is no public demo currently available. This document describes the stated project scope; it is not an independent evaluation of model performance or agricultural outcomes.

## Problem and intended use

The project explores how image input, on-device classification, and geotagged records can be combined in a mobile application. It should be presented as a prototype and academic engineering project—not as a validated tool for diagnosing cacao disease or making agricultural decisions.

## System outline

The existing project description identifies these components:

1. Camera or image input through the Android application.
2. On-device inference using TensorFlow Lite.
3. Location-tagged detection records and map views.
4. Local detection history using Room.
5. Backend services using Supabase.

Confirm exact data flows, model input/output, synchronization behavior, permissions, and backend responsibilities against the implementation before publishing a detailed architecture diagram.

## Technology

Kotlin · Jetpack Compose · TensorFlow Lite · CameraX · Room · OSMDroid · Supabase

## Evidence to publish

- A short, captioned screen recording or a small set of screenshots showing the actual application flows.
- A system diagram that distinguishes on-device processing, local persistence, map/location features, and remote services.
- A sanitized sample record or test fixture, if it can be shared without exposing personal or sensitive location data.
- A model card or evaluation summary stating dataset provenance, evaluation setup, limitations, and measured results—only if those details are documented and approved for publication.
- A test summary tied to a specific build or commit, including what was tested and what remains unverified.

Before sharing, remove credentials, personal information, private endpoints, sensitive coordinates, and non-public thesis material. Do not imply model accuracy or field validation without reproducible evidence.

## Links

- [Private source repository](https://github.com/kevinreylapiz-max/CacaoGuard)
- [Portfolio](../README.md)
- [Resume](RESUME.md)

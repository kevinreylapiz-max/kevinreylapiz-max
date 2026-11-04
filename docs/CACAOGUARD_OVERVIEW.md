# CacaoGuard — project overview

## Project summary

CacaoGuard is an Android thesis application prototype exploring cacao-pod image classification and location-based detection records. The project was completed and defended as a thesis, and development and maintenance continued after the defense.

**Access:** The source repository is private. A public demo is not currently available.

## Verified project facts

The profile and project description establish the following:

- The application was developed for Android.
- It combines camera or image input with on-device TensorFlow Lite inference.
- It includes location-tagged detections, map views, local detection history, and backend services.
- The project uses Kotlin, Jetpack Compose, TensorFlow Lite, CameraX, Room, OSMDroid, and Supabase.
- The thesis was completed and defended, followed by continued development and maintenance.

## System outline

The diagram in [`assets/diagrams/cacaoguard-architecture.mmd`](../assets/diagrams/cacaoguard-architecture.mmd) is a conceptual view based on the components listed above. It is not a verified source-level architecture specification. The exact data flow, synchronization behavior, model inputs and outputs, and division of responsibilities between local storage and backend services are not established in the available public description.

## Scope and limitations

CacaoGuard should be described as a project prototype, not a validated agricultural diagnostic tool. No model accuracy, field-validation result, dataset details, or agricultural outcome is asserted here. No performance or reliability claims are made without published supporting evidence.

## Technology

Kotlin · Jetpack Compose · TensorFlow Lite · CameraX · Room · OSMDroid · Supabase

## Evidence status

### Established evidence

- Thesis application completed and defended.
- Android application scope and technology list as stated in the profile.
- Continued development and maintenance after defense.

### Additional artifacts that would require real project evidence

The following are not included or claimed as completed in this document:

- Application screenshots or a screen recording from an actual build.
- A source-verified architecture diagram and data-flow description.
- A model card, dataset provenance, evaluation protocol, and measured model results.
- A test report tied to a specific build or commit.
- A sanitized sample record or demonstration of synchronization behavior.

Any future public artifact should be checked for credentials, personal information, sensitive location data, private endpoints, and non-public thesis material. Model or field-performance claims should only be published with reproducible supporting evidence.

## Links

- [Portfolio](../README.md)
- [Resume](RESUME.md)
- [Conceptual architecture diagram](../assets/diagrams/cacaoguard-architecture.mmd)
- [Private source repository](https://github.com/kevinreylapiz-max/CacaoGuard)

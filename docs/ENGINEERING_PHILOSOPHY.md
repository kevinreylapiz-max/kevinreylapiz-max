# Engineering philosophy

## Engineering principles

### Start with the problem

Clarify the intended outcome, constraints, and acceptance criteria before implementation. Keep the scope tied to a real use case and prefer changes that can be inspected and evaluated.

### Keep claims evidence-based

Distinguish what was built, what is deployed, what remains private, and what has not been validated. Link claims to an implementation, working application, test, or approved artifact when available. Describe prototypes as prototypes; do not imply validation without evidence.

### Use AI as a collaborator

AI tools can assist with analysis, planning, and implementation. The engineer remains responsible for task direction, review, verification, and acceptance. Generated output is not proof of correctness.

### Verify with appropriate checks

Use tests, linters, builds, and runtime checks that fit the change. Record what was actually run and, where available, the relevant environment and revision. State the limits of each check rather than treating a passing check as proof of every behavior.

### Make work reviewable

Break work into focused steps, preserve useful context, and document important assumptions and trade-offs. A reviewer should be able to understand the change and challenge its reasoning.

### Protect people and systems

Before publishing screenshots, logs, prompts, or diagrams, check for credentials, personal information, private endpoints, sensitive location data, and confidential project material. Publish only material that is approved for sharing.

## Practical loop

```text
Understand → Plan → Implement → Test → Inspect evidence → Review → Document
                    ↑                 │
                    └──── Revise ─────┘
```

This describes a working principle, not a claim that every task follows an identical process or that any one check guarantees quality.

## Evidence boundary

This document records engineering principles. It is not itself evidence that a specific project passed tests, achieved a performance target, or was independently audited. Project-specific outcomes belong with their corresponding implementation and verifiable artifacts.

## Related documentation

- [AI-assisted engineering workflow](../AGENTIC_WORKFLOW.md)
- [SYNAPSE overview](SYNAPSE_OVERVIEW.md)
- [CacaoGuard overview](CACAOGUARD_OVERVIEW.md)
- [Portfolio](../README.md)

# Engineering philosophy

## Build for a real use case

Start with the problem, intended users, constraints, and acceptance criteria. Prefer a small working change that can be inspected over complexity without evidence of value.

## Make claims inspectable

Describe what was built, what is deployed, what remains private, and what has not been validated. Link claims to code, a working application, tests, diagrams, or approved artifacts where possible. Distinguish a prototype from a validated product.

## Use AI as a collaborator, not an authority

AI can help explore options, organize context, and draft implementation. The engineer remains responsible for task direction, review, verification, and the final decision. Generated output is not proof that behavior is correct.

## Verify deterministically

Use tests, linters, builds, and runtime checks appropriate to the change. Record what was run and the relevant environment or revision. Explain what the check covers and what it does not.

## Keep work reviewable

Break work into focused steps, preserve useful context, and document important assumptions and trade-offs. Make it easy for another person to understand and challenge a decision.

## Protect people and systems

Before publishing screenshots, logs, prompts, or diagrams, check for credentials, personal information, private endpoints, sensitive location data, and confidential project material. Share only what is approved.

## Practical loop

```text
Understand → Plan → Implement → Test → Inspect evidence → Review → Document
                    ↑                 │
                    └──── Revise ─────┘
```

## Related documentation

- [AI-assisted engineering workflow](../AGENTIC_WORKFLOW.md)
- [SYNAPSE overview](SYNAPSE_OVERVIEW.md)
- [CacaoGuard overview](CACAOGUARD_OVERVIEW.md)
- [Portfolio](../README.md)

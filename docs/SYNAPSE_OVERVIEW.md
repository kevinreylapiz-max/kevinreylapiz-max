# SYNAPSE — project overview

## Project summary

SYNAPSE is an evolving, human-directed AI engineering system: a practical harness for orchestrating AI collaborators while keeping engineering goals, context, verification, review, and acceptance under human control. It brings together workflow conventions and a structured knowledge and operations layer intended to help maintain continuity across engineering work.

An important design idea is the **project cell**. A cell is a separate, project-specific memory and continuity space, intended to keep that project's context distinct from other projects. Depending on the project and workflow, it can record state, decisions, checkpoints, handoffs, and queued work. CacaoGuard has a dedicated private cell; other projects can have their own cells as well. This is a conceptual description for the public portfolio, not a disclosure of private cell contents or a guarantee that every capability is complete.

SYNAPSE Core and its project cells are private. This overview explains the approach without publishing repository links, implementation details, private prompts, or project records.

## What the approach brings together

- **AI orchestration:** using AI tools as collaborators for scoped planning, implementation support, and review.
- **Structured project knowledge:** keeping relevant project context and decisions organized for later work.
- **Project-specific memory:** separating the context and working state of each project into its own cell.
- **Human-directed engineering:** keeping task definition, acceptance criteria, deterministic checks, final review, and approval with the engineer.

The term “harness” is a useful description of the orchestration and workflow role. The knowledge/operations layer and project cells add a project-aware continuity model. SYNAPSE is not presented as a fully autonomous agent or as an independently validated knowledge operating system.

## Workflow and responsibility boundary

The human engineer defines goals and acceptance criteria, provides relevant context, directs implementation, runs deterministic checks, reviews results, and decides what is accepted. AI tools may assist with planning, drafting, or analysis, but their output is not treated as verified simply because it sounds plausible.

The conceptual sequence is:

1. Define the problem and constraints.
2. Plan the approach and acceptance criteria.
3. Provide focused context from the relevant project.
4. Implement in small, reviewable steps.
5. Run appropriate tests and checks.
6. Inspect evidence and revise when needed.
7. Complete human review and document decisions.

See the [workflow diagram](../assets/diagrams/synapse-workflow.mmd) and [AI-assisted engineering workflow](../AGENTIC_WORKFLOW.md).

## Maturity and evidence boundaries

SYNAPSE is evolving. Its architecture and workflows should not be confused with proof of software quality, productivity, accuracy, or project outcomes. Any counts of internal records or checkpoints are not outcome metrics. Public descriptions are intentionally high-level because the source system and project cells are private.

Only publish project-specific screenshots, recordings, test results, or implementation details when they are authentic, approved, and safe to share. Do not publish private prompts, credentials, personal data, confidential project context, or unreviewed model output.

## Related public documentation

- [Portfolio](../README.md)
- [Resume](RESUME.md)
- [Engineering philosophy](ENGINEERING_PHILOSOPHY.md)
- [Workflow notes](../AGENTIC_WORKFLOW.md)
- [Conceptual workflow diagram](../assets/diagrams/synapse-workflow.mmd)

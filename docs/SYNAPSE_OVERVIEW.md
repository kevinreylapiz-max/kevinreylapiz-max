# SYNAPSE — project overview

## At a glance

SYNAPSE is a local Python methodology and toolkit for structuring AI-assisted software engineering work. Its stated value is operational: it was used during CacaoGuard development, debugging, testing, thesis preparation and defense, and post-defense maintenance.

The source repository is private. This overview explains the workflow as described in the portfolio; it does not claim that the toolkit is autonomous or that its recorded checkpoints independently establish software quality.

## Workflow capabilities

- Context continuity across multiple AI-assisted work sessions.
- Checkpoints, project handoffs, and growth journals. The current project description reports 100+ recorded checkpoints.
- Smoke-test workflows and a CR-based workflow.
- Human-directed orchestration across multiple AI models.

## Responsibility boundary

The engineer defines goals and acceptance criteria, supplies relevant context, directs work, inspects generated changes, runs deterministic checks, and decides what is accepted. Models can assist with analysis and implementation; their output is not treated as verification by itself.

## Example process

```text
Define problem and acceptance criteria
  → provide focused context
  → implement in small, reviewable steps
  → run tests and checks
  → inspect evidence
  → human review and decision
  → document decisions and follow-up work
```

This process is also documented in [AGENTIC_WORKFLOW.md](../AGENTIC_WORKFLOW.md).

## Evidence to publish

- A sanitized example of a checkpoint and a handoff, with private project context removed.
- A workflow diagram showing the boundary between human decisions, model assistance, and deterministic checks.
- A representative smoke-test report, paired with the test code or command, environment, commit/build identifier, and limitations.
- A small reproducible demonstration of a workflow feature, with setup instructions and expected output.
- A clear definition of the CR workflow terminology and the criteria for counting checkpoints, if those claims are retained publicly.

Avoid publishing tokens, private source, confidential prompts, user data, or unreviewed model output. Do not present checkpoint count as a quality, productivity, or accuracy metric without supporting evaluation.

## Links

- [Private source repository](https://github.com/kevinreylapiz-max/Synapse)
- [AI-assisted engineering workflow](../AGENTIC_WORKFLOW.md)
- [Engineering philosophy](ENGINEERING_PHILOSOPHY.md)
- [Portfolio](../README.md)

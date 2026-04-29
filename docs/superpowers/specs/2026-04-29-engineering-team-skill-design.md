# Engineering Team Skill Design

## Goal

Create a global Codex skill named `engineering-team` that acts as a full-stack product development team. The skill should be available from any Codex workspace and help the user plan, design, implement, verify, and hand off software work with role-aware engineering judgment.

## Installation Target

- Skill directory: `/Users/me/.codex/skills/engineering-team/`
- Entry point: `/Users/me/.codex/skills/engineering-team/SKILL.md`
- Role reference: `/Users/me/.codex/skills/engineering-team/references/roles.md`
- UI metadata: `/Users/me/.codex/skills/engineering-team/agents/openai.yaml`

## User Choices

- Scope: full-stack product development.
- Shape: one main skill with internal role references.
- Mode: automatically choose between quick delivery and rigorous engineering workflow based on task risk.
- UI role: include an independent `Product Designer / UI/UX Designer` role.

## Trigger Behavior

The skill should trigger when the user asks for an engineering team, development team, full-stack team, software delivery team, product engineering team, or asks Codex to work like PM, designer, architect, frontend, backend, QA, and DevOps together.

It should also be useful when the user asks to:

- Build or modify a product feature.
- Design a web app, internal tool, dashboard, API, workflow, or integration.
- Split software work into role-based tasks.
- Review a product or engineering plan.
- Coordinate implementation, verification, and delivery.

## Team Roles

### Product Lead

Clarifies user goals, target users, scope, success criteria, non-goals, and acceptance requirements. Prevents vague work from becoming overbuilt work.

### Product Designer / UI/UX Designer

Owns user flows, information architecture, layout, interaction states, visual consistency, accessibility, and usability. This role participates whenever the work touches UI, forms, dashboards, websites, apps, or user-facing tools.

### Tech Lead / Architect

Owns system design, module boundaries, data flow, architecture trade-offs, technical risk, integration points, and implementation sequencing.

### Frontend Engineer

Owns frontend implementation, component structure, state management, responsiveness, accessibility, performance, browser behavior, and visual QA.

### Backend Engineer

Owns API contracts, data models, service logic, persistence, security boundaries, validation, and backend tests.

### QA Engineer

Owns test strategy, acceptance checks, regression risks, edge cases, and verification evidence before completion claims.

### DevOps / Release Engineer

Owns environment setup, configuration, deployment considerations, build commands, release notes, and handoff instructions.

## Workflow Modes

### Quick Delivery Mode

Use for small, low-risk changes. The skill should inspect local context, make reasonable assumptions, implement the change, run focused verification, and summarize results.

Examples:

- Single-file fix.
- Small copy, style, or behavior adjustment.
- A narrow test update.
- A minor script or config improvement.

### Rigorous Engineering Mode

Use for medium or high-risk work. The skill should slow down and coordinate roles explicitly.

Flow:

1. Clarify goals and constraints when needed.
2. Identify affected users and success criteria.
3. Propose architecture and role responsibilities.
4. Create a concise implementation plan.
5. Implement in small, verifiable slices.
6. Run the most relevant verification command available for the touched stack, such as unit tests, type checks, lint checks, build checks, or browser visual checks for UI work.
7. Deliver a clear summary, changed files, and residual risks.

Use rigorous mode for:

- New features.
- Cross-module changes.
- Database or API contract changes.
- User-facing UI workflows.
- Authentication, payment, privacy, security, or compliance-sensitive work.
- Changes where failure would be costly or hard to detect.

## Subagent Policy

The skill should not require subagents for every task. It should recommend or use subagents only when the current Codex environment supports them and when there are genuinely independent workstreams, such as:

- Parallel frontend and backend implementation.
- Independent exploration of architecture and tests.
- Separate QA review while implementation continues.

If subagents are unavailable or unnecessary, the skill should simulate the team roles in one coordinated workflow.

## Deliverables

The final skill should include:

- A concise `SKILL.md` with trigger rules, workflow selection, role orchestration, and completion standards.
- `references/roles.md` with role-specific responsibilities and decision checklists.
- `agents/openai.yaml` with human-facing metadata and a default prompt.

## Quality Bar

The skill should:

- Keep context usage small by putting detailed role guidance in `references/roles.md`.
- Avoid forcing heavyweight process for small changes.
- Require evidence before completion claims.
- Encourage frontend visual verification for UI work.
- Preserve user changes and avoid unrelated refactors.
- Produce practical, role-aware engineering output instead of theatrical roleplay.

## Constraints

- This workspace is not currently a git repository, so this design document cannot be committed unless the user later chooses to initialize or move into a git repo.
- The implementation writes outside the current workspace to `/Users/me/.codex/skills/engineering-team/`, which requires user approval under the active filesystem sandbox.

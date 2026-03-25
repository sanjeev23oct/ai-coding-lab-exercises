# Architecture Document (Large)

This document is intentionally large to demonstrate Bug 5 (runaway context).
It gets imported via `@docs/*.md` in CLAUDE.md and consumes significant context
even when you're just asking simple questions.

## System Overview

Lorem ipsum architecture section. This would normally contain detailed diagrams,
ADRs, decision rationale, and design notes. In a real project this file might be
hundreds of lines long.

## Database Schema

Tables, indexes, relationships — all documented here in great detail.

## API Design

Every endpoint documented with examples, error codes, edge cases.

## Infrastructure

Deployment topology, service mesh, load balancing strategy.

## Security Architecture

Threat model, trust boundaries, auth flows, secrets management.

## Performance Characteristics

Benchmarks, SLOs, bottlenecks, caching strategy.

---

(This file represents 800 lines of content that gets imported unnecessarily.)
(In the real world this would be much longer and waste significant context.)
(Fix: replace `@docs/*.md` with specific imports of only what's needed.)

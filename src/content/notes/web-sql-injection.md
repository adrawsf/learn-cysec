---
title: "Understanding SQL Injection"
description: "Basic mechanics of SQL injection attacks."
category: "web-security"
tags: ["SQLi", "Injection", "Web Security"]
status: "learning"
date: 2024-01-15
difficulty: "beginner"
---

# What I learned

SQL Injection occurs when user input is insecurely embedded into a database query.

## Key Concepts

- **In-band SQLi**: Error-based and Union-based. Data is extracted via the same channel.
- **Inferential (Blind) SQLi**: Boolean-based and Time-based. Data is extracted by asking true/false questions.
- **Out-of-band SQLi**: Data is extracted via a different channel (e.g., DNS or HTTP requests).

## Commands / Examples

```sql
-- A classic bypass
' OR 1=1 --
```

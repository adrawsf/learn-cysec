---
title: "Cross-Site Scripting (XSS) Basics"
description: "How XSS works and its main variants."
category: "web-security"
tags: ["XSS", "Web Security", "Frontend"]
status: "planned"
date: 2024-02-01
difficulty: "beginner"
---

# What I learned

XSS vulnerabilities occur when an application includes untrusted data in a web page without proper validation or escaping.

## Key Concepts

- **Stored XSS**: Payload is saved on the server (e.g., in a database) and displayed to users later.
- **Reflected XSS**: Payload is bounced off the server (e.g., in an error message or search result).
- **DOM-based XSS**: Payload is executed as a result of modifying the DOM "environment" in the victim's browser.

## Commands / Examples

```html
<script>alert('XSS')</script>
<img src=x onerror=alert(1)>
```

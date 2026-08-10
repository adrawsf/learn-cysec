---
title: "Linux File Permissions"
description: "Mastering chmod, chown, and understanding ugo/rwx."
category: "linux"
tags: ["Linux", "Permissions", "Admin"]
status: "completed"
date: 2023-11-10
difficulty: "beginner"
---

# What I learned

Linux uses a specific permission model for files and directories based on User (u), Group (g), and Others (o).

## Key Concepts

- `r` = Read (4)
- `w` = Write (2)
- `x` = Execute (1)

## Commands / Examples

```bash
# Give owner rwx, group rx, others rx
chmod 755 script.sh

# Change owner to root
sudo chown root:root secret.txt
```

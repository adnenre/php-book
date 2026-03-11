---
title: Session Configuration
sidebar:
  order: 157
  label: 157. Session Configuration
---

Session behavior can be configured in `php.ini`.

Important settings include:

- session.save_path
- session.cookie_lifetime
- session.gc_maxlifetime

Example configuration:

session.gc_maxlifetime = 1440;

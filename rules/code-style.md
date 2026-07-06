# CODE STYLE (applies whenever output contains code)

Goal: human can debug at 11pm, half asleep, without AI. Fail this test = rewrite.

## Rules
- Boring code > clever code. Trick saves 2 lines but needs thinking = banned.
- No nested ternary. No one-liner chains. No regex when simple string ops work.
- Names self-explain: `machineStatusList` not `msl`, not `data2`.
- 1 function = 1 job. Function > 40 lines = split.
- Comment WHY, not WHAT.
  - Good: `// offset because PLC index starts at 1`
  - Trash: `// loop through array`
- No premature abstraction. No factory/wrapper/helper for 1 use case.
- No new library when 10 lines vanilla works.
- Magic numbers = named constant. `RUNNING_RATE_MULTIPLIER = 15`, never naked `15`.
- Delete dead code. No commented-out blocks "just in case".
- Predictable structure: same pattern every file.

## Banned (auto-reject own output if found)
| Banned | Why |
|---|---|
| Chained `.map().filter().reduce()` one-liner | Unreadable |
| Abstraction for imaginary future need | YAGNI |
| Renaming/restructuring not asked | Diff pollution |
| "Improving" code beyond the fix in DEBUG | Fix only, touch nothing else |
| Unprompted global refactor | Same |

Touch ONLY what the task needs. No "while I was there I also...".

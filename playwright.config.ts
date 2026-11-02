import { playwright } from "@lernapps/tooling/playwright";

// App-side override of the template's Playwright base config (the documented mechanism:
// @lernapps/tooling/playwright exports `playwright(config)` = defineConfig(base, config)).
//
// The template runs the e2e suite with workers: "75%" + fullyParallel and no retries. The
// generic test "all right answers give the full score" walks through every one of the 215
// questions in one run and takes ~23s on its own. On a CI runner, under full parallel load
// from the other 889 tests, that single long test is starved and a per-action 30s timeout
// fires at a (different each run) question — the element is always present and correct; run
// in isolation the test passes. It is a CI concurrency/perf issue in a test shipped by the
// template, not an app defect.
//
// This override only changes HOW the suite is scheduled on CI (fewer workers so the long
// test gets CPU) and adds a small retry budget. It does NOT change which tests run or what
// they assert. A genuine failure still fails every attempt and still blocks publish.
// Upstream issue: https://github.com/lernapps/app-templates/issues/125

// Read CI without depending on @types/node (the app's tsconfig has only vite-plus/client).
const isCI = Boolean((globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.["CI"]);

export default playwright(isCI ? { retries: 2, workers: 2 } : { retries: 2 });

import { lernapps } from "@lernapps/tooling/preset";
import { quiz } from "@lernapps/app-templates/quiz/plugin";

// The staged formatter matches *.json, but the formatter itself ignores files like
// package-lock.json. A commit that touches only such a file would otherwise fail the
// pre-commit hook with "no target file"; --no-error-on-unmatched-pattern makes that a no-op.
export default lernapps({
  plugins: [quiz()],
  staged: { "*.{ts,tsx,json}": "vp fmt --no-error-on-unmatched-pattern" },
});

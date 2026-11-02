---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

This app is a German-and-English quiz about HTML elements (`languages: ["de","en"]`, German first): what each one
does, when to use it and when not, its effect on accessibility (implicit ARIA role), and its status (Baseline widely
/ newly / limited, experimental, deprecated). Every learner text is a `{ de, en }` map; the build serves German at
`/` and English at `/en/`. The only data file is `src/quiz.json` (schema `quiz.v1`,
`node_modules/@lernapps/app-templates/runtime/quiz/quiz.v1.schema.json`); no images are used in v1. Status
facts are baked in at authoring time, not fetched at runtime.

## Curriculum

No German Land, Schulform or Jahrgang applies: the subject is web authoring (HTML), not a school subject, so no
Lehrplan is followed. The curriculum comes from two primary sources, read at authoring time:

- MDN HTML element reference — <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements> and the
  per-element pages below it, plus the ARIA-in-HTML mapping
  (<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles>). Content licence CC BY-SA 2.5;
  facts are taken, never sentences.
- `web-features` / Baseline — <https://github.com/web-platform-dx/web-features> and
  <https://webstatus.dev>. The single source for status (widely available, newly available, limited availability).
  Authoring date recorded in `sources` in `src/quiz.json` (October 2025).

Where a fact could age (Baseline status, the experimental `<geolocation>` element), it is phrased as of the
authoring date and that date is named in `sources`.

## Competencies

Grouped by chapter; each competency maps to several questions whose ids share the chapter prefix. The quiz schema
has no group field, so a chapter is a contiguous block of questions in the `questions` array, in this order.

Chapter 1 — Semantics & document structure (ids `c1-…`)
- I can choose semantic structure elements (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`) over
  generic `div`/`span`.
- I can recognise that `section` needs a heading and that headings build the document outline (one `h1` per page as
  the common convention).
- I can combine structural elements that belong together (`figure`+`figcaption`, `table`+`caption`/`th`).

Chapter 2 — Text-level semantics (ids `c2-…`)
- I can tell `strong`/`em` (meaning) from `b`/`i` (appearance only) and pick the right one.
- I can choose the right text-level element for quote, code, abbreviation and time (`blockquote`/`q`, `code`,
  `abbr`, `time`).

Chapter 3 — Forms (ids `c3-…`)
- I can associate every input with a `label` and know why a placeholder is not a label.
- I can combine related form elements (`label`+`input`, `fieldset`+`legend`, `select`+`option`, `datalist`).
- I can choose the right `input` type and `button` type.

Chapter 4 — Interactive & modern elements (ids `c4-…`)
- I can use `details`+`summary`, `dialog` and `search` correctly, including which elements belong together.
- I can tell modern real HTML features (`popover` attribute, `selectedcontent`, experimental `geolocation`) from
  pure JS APIs.

Chapter 5 — Accessibility & ARIA (ids `c5-…`)
- I can choose `button` vs `a` for action vs navigation.
- I can name the implicit ARIA role of common elements.
- I can recognise when native HTML makes ARIA unnecessary ("No ARIA is better than bad ARIA").

Chapter 6 — Status & Baseline (ids `c6-…`)
- I can classify an element's Baseline status (widely / newly / limited availability).
- I can spot deprecated elements and name their modern replacement (`center`, `font`, `marquee`, `big`, `center` →
  CSS; `tt`, `strike`).
- I can place the experimental `<geolocation>` element as limited/experimental (one low-weight question).

## Content structure

`src/quiz.json` holds one `questions` array, read top to bottom on the no-JS worksheet. The six chapters are six
contiguous blocks, Chapter 1 first. Emphasis (frequently misused > breadth > rare/new) is realised only by the
number of questions per block:

- Chapter 1 (`c1-…`): ~45 questions
- Chapter 2 (`c2-…`): ~35
- Chapter 3 (`c3-…`): ~45
- Chapter 4 (`c4-…`): ~30
- Chapter 5 (`c5-…`): ~40
- Chapter 6 (`c6-…`): ~25

Target total ≥ 200. Rare/new elements (`search`, `selectedcontent`, experimental `geolocation`) get only a few
questions each.

Question id convention: `c<n>-<topic>-<nn>`, e.g. `c1-main-01`, `c3-label-04`. Ids are stable; a changed text keeps
its id, a new question gets a new id, a removed id is never reused.

## Terminology

- German and English (app content): every learner text is a `{ de, en }` map (German required by the platform rule
  `learner-text-german`, English alongside it). Code tokens and element names (`<main>`, `role="button"`,
  `scope="col"`) stay identical in both languages. The creator-facing plan and this guide may mix German and English.
- Element names are written with angle brackets in prose where it reads naturally, e.g. "the `<main>` element", and
  without in option text where brevity helps, e.g. "`<main>`".
- Terms used: element, semantic, landmark, document outline, implicit ARIA role, accessible name, Baseline (widely /
  newly / limited availability), experimental, deprecated/obsolete, combinatorics ("belong together").
- Learners are addressed with "you"; plain, short sentences; positive phrasing (avoid "not", never double
  negation); no trick questions.

## Exercise patterns

One or more patterns per competency, from `lernapps-exercise-patterns`:

- `single-choice` — pick the one right element / decision. Example: `c1-main-01` (which element marks the main
  content). An HTML snippet goes into `material` as a `code` block (`language: "html"`) where the question is about
  the code.
- `true-false` — judge a statement; background in `explanation`. Example: `c1-section-heading-01` ("A `section`
  should have a heading" → true).
- `multiple-choice` — several correct answers of a kind. Example: `c1-landmarks-01` (which elements are landmark
  regions). At least one `correct: true`; the learner picks every correct one.
- `matching` — connect element → job / implicit role / replacement. Example: `c5-roles-01` (element → implicit ARIA
  role). `distractors` add plausible wrong right-hand entries.
- `ordering` — order by a measurable property (e.g. how long Baseline), only where the order is unambiguous.

Every choice option has `info` (1–3 sentences, true either way; for a wrong option also why it does not fit). Every
question has `explanation` (why the right answer is right; for true-false/matching/ordering also the background) and
at least one `links` entry, the MDN element page preferred. Where a check is subtle, `examples.accepted` /
`examples.rejected` pin the intended answer so the build catches a question that checks the wrong thing.

## Figures

None in v1. Where a question needs a snippet it uses a `code` material block (`language: "html"`), which needs no
file and renders at 360 px and without JavaScript. A future diagram would be a bundled SVG in `src/images/` with
`alt`, `caption`, `source` and `licence` — not added speculatively.

## Sources

- MDN HTML element reference and the per-element pages (links in each question), licence CC BY-SA 2.5 — facts taken,
  never sentences; `info`/`explanation` written anew in plainer words.
- `web-features` / Baseline and <https://webstatus.dev> for status, read at authoring time (October 2025); the date
  is named in `sources` in `src/quiz.json`.
- Listed in `sources` in `src/quiz.json`. No creator material; nothing personal; no per-learner data.

## Adding a chapter or round

1. Pick the competency and chapter; keep its id prefix (`c<n>-…`).
2. Research the facts from MDN + `web-features`/Baseline at edit time; refresh the authoring date in `sources` if
   status changed.
3. Append the questions inside that chapter's contiguous block in `src/quiz.json`, each with options + `info`,
   `explanation`, at least one MDN `links` entry, and `examples` where the check is subtle.
4. Run `npx lernapps check`; fix every finding from its message.
5. Commit on `work` with a `feat:` message naming the chapter.

## Rules learned from mistakes

None yet.

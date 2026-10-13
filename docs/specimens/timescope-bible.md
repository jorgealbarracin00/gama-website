# Specimen Bible 009 — GAMA TimeScope

Product and exhibition direction · 13 October 2026

**Subtitle:** See where your time goes.

**App status:** Built / In App Store review. The inspected project does not establish production distribution signing, Apple approval or a live App Store release.

**Exhibition:** `/incubation/timescope` in the GAMA Dynamics specimen archive.

**Product website:** `https://timescope.gamadynamics.com.au`, with `/privacy/`, `/support/` and `/terms/` routes.

The creator’s current brief establishes the human origin. Native source and retained project documents establish the functionality and its limits. The complete investigation receipt is [timescope-sources.json](./timescope-sources.json). No activity databases, credentials or private records were inspected for this website work.

## 1. The human question

> “Where did my day go?”

A developer could work at a computer all day and still struggle to describe the hours. Coding, research, communication, another tab and an interruption can merge into a blur. TimeScope began with a wish to make that day understandable.

The same question belongs to a person looking back at their own Mac use, and to a family seeking an open conversation about school work and leisure. These are three perspectives on the same local activity record. They are not separate subscription plans, account roles or remote monitoring products.

**Personality:** curious, observant, calm and human. The website gives the day a shape without assigning a productivity grade. Computer time can be meaningful work, study, communication, creative play or rest. The product cannot judge that meaning from a foreground application name.

**Governing statement:** A day at the computer is still a human day.

## 2. Visual identity

The existing icon remains authoritative. It is a purple rounded tile with a silver desktop monitor, a static `4h 32m` and `TODAY` readout, and a five-colour usage strip. It is app artwork, not a live time indicator.

Source master: `Assets/Icon/TimeScope-master.png`, SHA-256 `f5d31042363e636e8706b404b75ee7c6eaed90cacdc998a4bc233757a44ed271`. The original asset is exported to `/specimens/timescope/icon-original.png` for the website. Do not replace its identity with another timer, hourglass, watch or generic monitoring mark.

The exhibition uses dark ink, silver editorial type and violet light. Blue, mint, amber, pink and violet chronological rails echo the icon’s usage strip. The rails represent periods and context; they do not imply a moral ranking of applications.

Two cinematic scenes give the story atmosphere:

- `hero-v1.webp`: a conceptual glass day taking a visible shape.
- `horizon-v1.webp`: a warm photographic concept of a parent and teenager looking at a computer together, returning the record to an open human conversation.

Generated artwork is labelled conceptual. Native screens remain visually distinct and are never replaced by generated screenshots.

## 3. Six chapters

The canonical archive IDs remain `origin`, `experiment`, `system`, `problems`, `solutions` and `evolution`.

1. **The missing hours:** the developer’s question, followed by personal and family perspectives.
2. **Give the day a shape:** a summary and timeline, with context nested within the application total.
3. **Quiet machinery:** native menu-bar presence, local records, the actual application surfaces and optional browser observation.
4. **What time cannot prove:** exposure versus attention, account versus person, uncertainty versus accusation.
5. **Clarity, with choice:** acknowledgement, explicit browser permission, retention and visible Guardian controls.
6. **A day worth understanding:** source-backed development stages and an honest release state.

The chronological development stages are narrative milestones supported by current project documents. They are not claims of four independently shipped versions or historical screenshot dates.

## 4. Verified product

TimeScope is a native macOS menu-bar application targeting macOS 14 or later. The product is planned as free, with no in-app purchases or subscriptions.

Authored native functionality:

- Separate foreground application sessions with timestamps and active duration.
- Daily totals, a seven-day chart and a selectable Activity Timeline.
- A hierarchical application summary with recorded website domains and optional stored metadata.
- An Activity Journal with lifecycle events, confirmed normal quits, inferred interruptions and recorded monitoring gaps.
- Explicit first-use acknowledgement before recording begins.
- Local SQLite records, transactional checkpoints, crash recovery and visible storage failures.
- Optional browser details through normal macOS Automation.
- Retention and history-deletion controls.
- Optional visible Guardian passcode protection for administrative controls and, if selected, normal quitting.
- An opt-in supported login-item interface, whose correctly signed installed behaviour still needs validation.

The source does not include a GAMA account requirement, GAMA Identity dependency, cloud sync, app backend, subscriptions, advertising SDK or external app analytics.

The latest inspected hierarchy verification report documents 58 passing automated tests, a universal arm64/x86_64 Release build and strict ad-hoc signature integrity. These are existing project reports, not a fresh native test run performed by the exhibition. Production signing, remaining physical validation and App Review remain separate gates.

## 5. Reporting contract for the browser illustration

The interactive example does not collect computer activity. Every value is authored fictional data. Its purpose is to make the reporting relationship understandable.

**Total:** 258 minutes = 4h 18m.

| Application | Foreground sessions | Total |
| --- | --- | --- |
| Xcode | 9:00–10:15 and 11:00–11:45 | 120m |
| Google Chrome | 10:15–10:45 and 12:00–12:48 | 78m |
| Opera | 13:30–14:30 | 60m |

The Chrome summary contains example.com 28m, wikipedia.org 15m, youtube.com 10m and Unclassified application time 25m. The four children sum to Chrome’s 78m. They are already inside the 258m application total.

**Never calculate 258 + website minutes as computer time.** Application and website durations are different levels of the same record.

The YouTube detail displays a fictional identifier and an explicitly labelled page title. It introduces no channel, playback state or separate content duration. Native content records have no independent start/end timestamps; displaying metadata does not establish watching time.

Blank timeline space is unassigned in the browser example. It does not invent idle, sleep or interruption causes. The native app’s observed gaps and states are described separately.

Functional controls:

- Summary / Timeline switches between the two interpretations of the same sessions.
- Application selection reveals its recorded context.
- The Chrome metadata disclosure exposes optional fictional metadata.
- A permissions disclosure explains actual browser boundaries.
- Three human-perspective buttons change the story, leaving app claims intact.
- Five native-view selectors reveal actual rendered surfaces; every image opens full size.

These are website illustrations, not a native app running inside the browser.

## 6. Privacy and permissions

Recording begins after **Start recording**. **Not now** leaves recording stopped. App-level acknowledgement is separate from a browser’s macOS Automation grant.

Generic foreground application tracking needs no additional macOS privacy permission. Chrome and Safari details are disabled by default and require per-browser Enable and normal macOS Automation consent. Titles and allowlisted YouTube identifiers are additional choices, off by default.

Stored URLs are conservative canonical origins. Arbitrary paths, queries, fragments and credentials are discarded before persistence. Optional allowlisted YouTube identifiers are the limited exception. Titles are requested only for allowlisted YouTube, Wikipedia, Apple developer documentation and example hosts.

Chrome’s native private-window mode is checked before and after a read; complete live incognito validation remains outstanding. Safari has no verified private-window flag: users must disable its website details before private browsing. Browser observations are sampled and may miss quick tab changes.

Opera, Edge and Brave detailed adapters are untested and disabled. Firefox has no implemented native tab adapter. Generic application tracking remains available independently of these integrations.

TimeScope does not collect passwords, keystrokes, screenshots, private-message contents, browser cookies, authentication tokens, page contents, browser history databases, playback state, channel names or Discord sections. Current features do not request Accessibility, Screen Recording or Input Monitoring.

Records stay in the local application’s SQLite container. The database is not separately encrypted by TimeScope; macOS account/file protection and the user’s backups apply. Retention defaults to 90 days, with 30, 365 or no automatic expiry available. Disabling browser details stops future observation without deleting existing records. Deleting history removes sessions and related history, then records the deletion; preferences remain.

Website technical hosting logs and voluntary support email are separate from offline app collection. The product privacy page explains both accurately. Do not claim that a public web server sees no technical request information.

## 7. Transparent family accountability

Guardian Mode is optional and visible. Its salted, iterated passcode verifier and retry state are stored in macOS Keychain. The plain passcode is not persisted. Protected administrative actions and optionally normal quitting require authorization.

The website must preserve these boundaries:

- A shared macOS account does not identify the human who used it.
- Foreground exposure does not prove watching, reading, focus, learning or productivity.
- Guardian Mode does not prevent Force Quit, shutdown, uninstalling or ordinary operating-system management.
- There is no remote parent dashboard, family account system, online passcode reset, schedule enforcement or app blocking.
- Visible recording should be explained to every person using the shared account, including children in language they understand.

The app supplies a record for a conversation. It does not supply a verdict about a child or a replacement for an agreement.

## 8. Authentic native surfaces

The capture gallery reuses existing native SwiftUI renders. Every image uses isolated synthetic data. None is a screenshot of collected personal activity or new evidence of live browser collection.

| Website asset | Native source |
| --- | --- |
| `captures/summary.webp` | `docs/AppStore/Screenshots/Summary.png` |
| `captures/expanded-summary.webp` | `Investigation/UI/Release Summary Expanded.png` |
| `captures/timeline.webp` | `docs/AppStore/Screenshots/Timeline.png` |
| `captures/journal.webp` | `docs/AppStore/Screenshots/Activity Journal.png` |
| `captures/settings.webp` | `docs/AppStore/Screenshots/Settings.png` |

The full native renders are 2560×1600 except expanded summary at 2000×1200. Website exports are 2000×1250, with expanded summary preserved at 2000×1200. Exporting preserves their content. The identity record’s dimensions match the exported files.

Permission states and content details shown in renders are fixtures. Always describe them as illustrative examples, not observations from the reader’s computer.

## 9. Website and Apple links

The prior product site was published with ChatGPT Sites and the documented custom hostname `timescope.gamadynamics.com.au`. Local source survives in the product’s `website/dist` folder, including source-specific privacy, support and terms pages.

The native online-policy link and prepared listing use:

- Marketing: `https://timescope.gamadynamics.com.au/`
- Privacy: `https://timescope.gamadynamics.com.au/privacy/`
- Support: `https://timescope.gamadynamics.com.au/support/`
- Terms: `https://timescope.gamadynamics.com.au/terms/`

Preserve these stable canonical routes if the hosting/design changes. Prepared `Listing.json` values do not prove that Apple’s live fields have been saved. Inspect the real App Store Connect record and verify the actual URLs after any change.

Do not remove functioning legal pages before their replacement is published and checked. DNS changes should concern only the TimeScope hostname; unrelated root, mail and project records are outside this task.

## 10. Accessibility and review

The page provides a skip link, descriptive artwork alt text, meaningful image links, keyboard-operable native buttons, visible focus states, disclosure controls and responsive layouts. Interactive state uses pressed/expanded semantics and relevant changes are exposed to assistive technology. Motion is restrained, and reduced-motion preferences disable transitions.

Review the specimen on a small phone, tablet and desktop. Check the mock-day total, the Chrome child sum, both views, every application, metadata and permission disclosures, all human-perspective buttons and every native capture. Confirm that App Store wording matches the evidence rather than the website’s publication status.

**Your day, made visible. A little more awareness. A better conversation.**

## Apple listing verification — 13 October 2026

App Store Connect app 6822109552, macOS version 1.0.0 (build 2), is Waiting for Review. Its saved Marketing URL, Support URL and published Privacy Policy URL already point to the canonical TimeScope domain and paths listed above. No Apple fields or submission settings were changed by this website task. Existing DNS and legal paths are preserved.

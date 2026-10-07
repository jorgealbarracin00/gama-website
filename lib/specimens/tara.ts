import type { SpecimenArtwork, TaraSpecimen } from './types';
const art = (name: string, alt: string, portrait = false): SpecimenArtwork => ({ src: `/specimens/tara/${name}-v1.webp`, alt, width: portrait ? 1024 : 1536, height: portrait ? 1536 : 1024 });
const captures: TaraSpecimen['captures'] = [
  ['today', '01-today', 'Today / Your next moments'],
  ['history', '02-history', 'History / Taken, skipped and missed'],
  ['manage', '03-manage-intakes', 'Manage Intakes / Active routines'],
  ['times', '04-choose-times', 'Add Intake / Choose the times'],
  ['days', '05-choose-days', 'Add Intake / Choose the days'],
  ['guide', '06-guide', 'How to Use TARA / Native guide'],
].flatMap(([id, file, title]) => (['iPhone', 'iPad'] as const).map(platform => ({
  id: `${id}-${platform.toLowerCase()}`, title, platform,
  src: `/specimens/tara/captures/${platform === 'iPhone' ? 'iphone' : 'ipad-13'}-${file}.png`,
  width: platform === 'iPhone' ? 1206 : 2064, height: platform === 'iPhone' ? 2622 : 2752,
  alt: `Authentic native TARA ${platform} screen: ${title}. Fictional release examples.`,
})));
captures.push({ id: 'settings-iphone', title: 'Settings / Meet TARA', platform: 'iPhone', src: '/specimens/tara/captures/iphone-settings-se.png', width: 750, height: 1334, alt: 'Native TARA Settings on iPhone SE, with the original mascot, guide and intake management.' });
const artwork = {
  hero: art('day-with-tara', 'The original lavender TARA companion beside a luminous sequence on a morning kitchen island.'),
  heroMobile: art('hero-mobile', 'TARA and a gently curving schedule rail, composed vertically in morning light.', true),
  origin: art('everyday-arithmetic', 'Keys, a work bag, coffee and a child’s shoe share a morning console with quiet timing markers.'),
  experiment: art('visible-sequence', 'TARA guides one prominent amber moment along a rail of quieter future markers.'),
  window: art('time-window', 'A narrow amber collar surrounds a preferred-time diamond on a translucent timing rail.'),
  identity: art('same-identity', 'Matching containers carry one visual identity through different positions on a day’s rail.'),
  recurrence: art('schedule-construction', 'One anchor pin establishes a sequence of evenly spaced physical markers.'),
  glance: art('next-at-a-glance', 'One upcoming marker remains visible through a small frosted opening.'),
  history: art('recorded-day', 'Past moments become sage, plum and coral outcome tokens while the timeline continues.'),
  alarm: art('first-alarm', 'One small amber pulse above a satin plinth: a simple scheduled alert.'),
  final: art('evening-assistant', 'TARA rests beside completed sage moments and one quiet future point at night.'),
};
export const tara: TaraSpecimen = {
  id: 'GAMA-003', number: '003', slug: 'tara', name: 'TARA', epithet: 'Your Timed Intake Assistant',
  type: 'app', status: 'deployed', statusLabel: 'Deployed', generation: '1.0',
  classification: 'Recurring time / Native Apple application', accent: 'lavender',
  summary: 'A calm timed intake assistant that turns recurring routines into a visible sequence: what matters now, what happened, and what comes next.',
  narrative: 'TARA makes time visible.', mission: 'Know what happens next.', platforms: ['iPhone', 'iPad'],
  technologySummary: ['SwiftUI', 'GAMAEvents', 'SwiftData', 'CloudKit', 'WidgetKit'], featuredOrder: 3,
  productLink: { url: 'https://tara.gamadynamics.com.au', label: 'Explore TARA' },
  closingLines: ['Know what matters now.', 'Know what comes next.'], artwork, captures,
  chapters: [
    { id: 'origin', title: 'Origin', heading: 'Three times a day.\nThen life happens.', paragraphs: ['A notification arrives while you are cooking. Another disappears during a meeting. Somewhere between the keys and the school bag, the schedule becomes something you have to keep in your head.', 'The problem is more than remembering an alarm. It is knowing where you are in the sequence. What happened? What is next?'], annotation: 'A schedule has to coexist with life.' },
    { id: 'experiment', title: 'Experiment', heading: 'What if you could\nsee the rhythm?', paragraphs: ['Give the next moment weight. Let later moments stay quieter. Make the distance to a preferred time visible.', 'The hypothesis was simple: a sequence is easier to understand than a pile of independent alarms.'], annotation: 'Priority through time. Without the noise.' },
    { id: 'system', title: 'System', heading: 'A day becomes\na sequence.', paragraphs: ['Set up the routine. Live your day. Record an action. Continue.', 'Today, recurrence, reminders and History share the same idea of a moment. TARA is the small companion that makes that system easier to read.'] },
    { id: 'problems', title: 'Problems', heading: 'Where a rhythm\ncan break.', paragraphs: ['Four design failure modes. Each study makes one source of confusion tangible: identity, hierarchy, recurrence and visibility.'], annotation: 'Conceptual stress studies grounded in the current design.' },
    { id: 'solutions', title: 'Solutions', heading: 'Make the next\naction obvious.', paragraphs: ['One primary moment. A clear sequence behind it. Familiar colours, names and timing.', 'The work is in the handover: record Take or Skip, preserve what happened, then let the next moment become primary.'], annotation: 'Same item. Different moment. Same visual identity.' },
    { id: 'evolution', title: 'Evolution', heading: 'From reminder\nto assistant.', paragraphs: ['Seven conceptual mutations. One increasingly understandable day.'], annotation: 'Conceptual evolution / A rhythm takes shape.' },
  ],
  workflow: [
    { title: 'Set up', body: 'Name the intake, choose its category and optional amount, then establish its times and days.' },
    { title: 'Live the day', body: 'Today gives the first relevant moment room. Later moments follow in chronological order.' },
    { title: 'Act & record', body: 'Take and Skip record your choice. Resolved moments leave the upcoming sequence.' },
    { title: 'Continue', body: 'The next moment takes the lead. History keeps the outcomes behind you.' },
  ],
  failures: [
    { id: '01', title: 'The clone', body: 'The same intake can appear more than once in a day. Without a relationship between those moments, repetition can look like an accidental duplicate.', lesson: 'A stable identity comes from the intake, not the row. Shared colours support recognition; names and times preserve meaning without colour.', artwork: art('failure-clone', 'Two indistinguishable blank containers sit on disconnected sections of a rail.') },
    { id: '02', title: 'The alarm wall', body: 'If every upcoming event gets equal visual weight, the person has to decide what matters every time they look.', lesson: 'Today expands one primary moment. Compact cards keep the rest visible without demanding equal attention.', artwork: art('failure-alarm-wall', 'TARA faces an elegant but overwhelming wall of equally illuminated amber squares.') },
    { id: '03', title: 'The broken rhythm', body: 'Counts, intervals, selected days and replacement slots can turn a simple setup into a small arithmetic project.', lesson: 'Choose the first time. Generate a sequence. Replacing an elapsed-time slot shifts the anchor so the interval stays coherent.', artwork: art('failure-broken-rhythm', 'Scattered markers and disconnected rail sections make a sequence hard to follow.') },
    { id: '04', title: 'The hidden next', body: 'An accurate schedule still asks too much if its next moment is buried behind several screens.', lesson: 'Widgets expose the upcoming sequence. Local reminders bring attention back at the relevant moment.', artwork: art('failure-hidden-next', 'An important amber marker is nearly hidden behind layers of smoked glass.') },
  ],
  solutions: [
    { title: 'One moment leads', body: 'A primary card carries the action. Later moments stay compact and chronological.' },
    { title: 'Identity carries through', body: 'A stable intake ID selects one of eight tonal palettes. Its occurrences keep that signature, alongside readable names and times.' },
    { title: 'The day moves forward', body: 'Take or Skip records the outcome. The next relevant moment takes the primary position.' },
    { title: 'Change the future carefully', body: 'Deactivate pauses an intake. Delete removes its definition and upcoming moments after confirmation. Past history remains.' },
  ],
  privacy: [
    { title: 'Local first. Private iCloud when available.', body: 'SwiftData stores the routines on the device. The production configuration uses a private CloudKit database; a local fallback does not synchronise.' },
    { title: 'No separate TARA account', body: 'The current app has no GAMA intake backend, advertising, tracking or analytics SDK. Scheduling runs locally through GAMAEvents.' },
    { title: 'A lock with clear limits', body: 'Optional Privacy Lock uses device authentication for the app. Widget, notification and alarm surfaces can still display intake names.' },
    { title: 'History is deliberately retained', body: 'Deleting an intake preserves past outcomes. The current app does not offer a history export or a clear-all-history control.' },
  ],
  mutations: [
    ['001', 'I', 'The Alarm', 'One alert marks one time.', 'Scheduled point', 'A reminder can catch your attention. It cannot explain the whole day.', artwork.alarm],
    ['002', 'II', 'The Sequence', 'Separate events become a visible day.', 'Point → sequence', 'Chronology gives each moment a place and lets the next one take priority.', artwork.experiment],
    ['003', 'III', 'The Window', 'Distance to a preferred time becomes visible.', 'Time → space', 'The timing rail communicates proximity using position, labels and an adjustable preference band.', artwork.window],
    ['004', 'IV', 'The Identity', 'The same intake stays recognisable, later.', 'Item → recurring identity', 'A consistent tonal identity connects occurrences without making colour the only cue.', artwork.identity],
    ['005', 'V', 'The Glance', 'The next moment reaches beyond the app.', 'Sequence → surface', 'Different widget sizes expose different amounts of the upcoming sequence.', artwork.glance],
    ['006', 'VI', 'The Memory', 'What happened stays understandable.', 'Action → history', 'Taken, skipped and missed describe recorded timing outcomes, not health outcomes.', artwork.history],
    ['007', 'VII', 'The Assistant', 'The pieces become one calm experience.', 'System → companion', 'The original TARA mascot links timing, state and feedback with a familiar presence.', artwork.final],
  ].map(([id, numeral, title, summary, form, meaning, image]) => ({ id, numeral, title, summary, form, meaning, artwork: image })) as TaraSpecimen['mutations'],
  currentStage: { heading: 'Deployed. Still finding its rhythm.', body: 'A native iPhone and iPad application for timed routines, reminders and history. Timing and organisation are its job. Healthcare decisions remain with the person and their clinician.' },
};

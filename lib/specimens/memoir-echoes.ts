import type { MemoirSpecimen, SpecimenArtwork } from './types';

const scene = (name: string, alt: string): SpecimenArtwork => ({ src: `/specimens/memoir-echoes/${name}-v1.webp`, alt, width: 1536, height: 1024 });
const capture = (id: string, title: string) => ({ id, title, platform: 'iPad' as const, src: `/specimens/memoir-echoes/captures/memoir-${id}-ipad.webp`, alt: title, width: 1600, height: 1112 });

const phoneCapture = (id: string, title: string) => ({ id: `${id}-iphone`, title, platform: 'iPhone' as const, src: `/specimens/memoir-echoes/captures/memoir-${id}-iphone.png`, alt: title, width: 1170, height: 2532 });

// Public interpretation of the Specimen 002 brief, reconciled with current native
// source. In particular, speech is transcribed; original audio is not retained.
export const memoirEchoes: MemoirSpecimen = {
  id: 'GAMA-002', number: '002', slug: 'memoir', name: 'Memoir Echoes',
  epithet: 'An archive of human memory', type: 'app', status: 'deployed',
  statusLabel: 'Deployed / Shipped', generation: '2.1',
  classification: 'Native Apple application / Personal memory system',
  summary: 'Spoken memories, photographs and reflections become Echoes, chapters and a personal memoir worth keeping.',
  narrative: 'An ordinary moment becomes a page. The pages become a life story. Someone, one day, can return to it.',
  mission: 'Capture today for tomorrow.', platforms: ['iPhone', 'iPad'],
  technologySummary: ['SwiftUI / SwiftData', 'CloudKit / CKSyncEngine', 'Permission-based AI assistance'],
  featuredOrder: 2, accent: 'amber',
  productLink: { url: 'https://memoir.gamadynamics.com', label: 'Explore Memoir Echoes' },
  question: 'What happens to a story when the person who remembers it disappears?',
  chapters: [
    { id: 'origin', title: 'Origin', heading: 'The things we fail to record.', paragraphs: [
      'A photograph can preserve a face. It cannot preserve why they laughed.',
      'We keep birthdays. Weddings. Holidays. We rarely keep Tuesday: the small story over dinner, the reason we left somewhere, the thing our father used to say.',
      'Memoir Echoes began with a fragile arrangement. Our most valuable stories often exist in only one place — someone’s memory.',
    ], annotation: 'What parts of us disappear because nobody thought to ask?' },
    { id: 'experiment', title: 'Experiment', heading: 'Begin with a story.\nLeave the blank page behind.', paragraphs: [
      'Most people never sit down to write an autobiography. But ask the right question and a story arrives.',
      'The experiment was to let someone speak naturally, then help their words become an Echo: a memory they could revisit, refine and place in a growing memoir.',
    ], annotation: 'The person lived it. The machine helps with the page.' },
    { id: 'system', title: 'System', heading: 'A life becomes an archive.', paragraphs: [
      'Moment → Echo → Chapter → Memoir',
      'One memory at a time, a collection begins to reveal a life.',
    ] },
    { id: 'problems', title: 'Problems', heading: 'A memory application\ncannot casually lose memories.', paragraphs: [
      'The interface was quiet. The persistence underneath it was not always so settled.',
      'These four studies describe real failure modes: competing ownership, a production schema that rejected changes, a memory absent on another device, and status that reassured too soon.',
    ], annotation: 'Failure studies / Engineering history' },
    { id: 'solutions', title: 'Solutions', heading: 'Preserving trust.', paragraphs: [
      'One clear path for the same memory.',
      'Echo synchronisation moved to one authoritative owner: CKSyncEngine. SwiftData remains the local store, with its CloudKit mirroring disabled.',
    ], annotation: 'A memory should survive the software around it changing.' },
    { id: 'evolution', title: 'Evolution', heading: 'From a recording\nto something that remains.', paragraphs: [
      'Seven conceptual mutations. Each changes what a memory can become.',
    ], annotation: 'An evolution of purpose / Not a release chronology' },
  ],
  artwork: {
    hero: scene('archive-of-a-life', 'A quiet archive at dusk, family photographs and an open journal preserved under glass.'),
    origin: scene('unrecorded-story', 'An empty chair beside a warm window, with a photograph, glasses and a journal on the desk.'),
    experiment: scene('voice-becoming-memory', 'A recorder, a paper waveform, fragments of words and a bound book form one physical preservation process.'),
    capture: scene('capture-desk', 'A small microphone and a family photograph on an intimate writing desk.'),
    reflection: scene('reflection-desk', 'An open book, photographs and a reading surface in a quiet archive.'),
    solutions: scene('continuity-bridge', 'Two archival cases hold the same photograph and page, connected by one warmly lit bridge.'),
    final: scene('future-reader', 'A reader in afternoon light returns to a family story, with an old photograph beside the reading surface.'),
  },
  captures: [capture('welcome', 'Memoir’s native iPad welcome screen'), capture('home', 'Native iPad workspace: recent Echoes, Narrator Mirror and chapters'), capture('book-index', 'Native iPad memoir index with chapters and export controls'), capture('reading', 'Native iPad reading spread: My Dad and the Sinclair Spectrum'),
    phoneCapture('recording', 'Native iPhone recording screen with Echo language, tone and microphone controls'),
    phoneCapture('home', 'Native iPhone home screen with recording, memoir and Narrator Mirror'),
    phoneCapture('book-index', 'Native iPhone Living Book Index with inclusion choices, PDF reading and book preview'),
  ],
  workflow: [
    { title: 'Record', body: 'Speak while the memory is close. Speech becomes text. A memory can also begin in writing.' },
    { title: 'Shape the Echo', body: 'With permission, AI helps shape the transcript. The experience and perspective remain the person’s own.' },
    { title: 'Build the memoir', body: 'Add photographs. Gather Echoes into chapters. Let a life story grow gradually.' },
    { title: 'Return to it', body: 'Read, reflect and refine. Export a PDF memoir to keep or share on your own terms.' },
  ],
  systemSurfaces: [
    { title: 'People & places', body: 'The names and places that give a memory its context.' },
    { title: 'Photographs', body: 'A face, an object, a room. The story supplies what the image cannot.' },
    { title: 'Sparks', body: 'A small invitation to remember when the next story does not come easily.' },
    { title: 'Narrator Mirror', body: 'A place to reflect on the perspective taking shape across the Echoes.' },
    { title: 'Chapters', body: 'Individual moments become part of a longer narrative.' },
    { title: 'A book to keep', body: 'The memoir can leave the app as a PDF, ready to read and share.' },
  ],
  failures: [
    { id: '01', title: 'The split memory', body: 'SwiftData CloudKit mirroring and a custom CloudKit path overlapped. Two systems were claiming responsibility for the same conceptual job.', lesson: 'Give Echo synchronisation one authoritative owner.', artwork: scene('failure-split', 'Two copies of one family photograph sit on separate glass plates, with diverging paper paths.') },
    { id: '02', title: 'The locked archive', body: 'Changes that worked locally could be rejected by the production CloudKit schema. A saved memory was not necessarily a synchronised memory.', lesson: 'Treat production schema readiness and rejected mutations as explicit states.', artwork: scene('failure-locked', 'A page is sealed inside an archival case; an index card outside cannot fit through its slot.') },
    { id: '03', title: 'The missing Echo', body: 'An Echo existed on one device while its place on another remained empty. Local success was not enough to demonstrate continuity.', lesson: 'Verify the same existing memory on both sides of the bridge.', artwork: scene('failure-missing', 'One glass archive cubby holds a photograph and page. Its neighbour remains empty across a broken conduit.') },
    { id: '04', title: 'False calm', body: 'A reassuring status could hide pending work or a failed change. Compact and expanded views needed to tell the same truth.', lesson: 'Derive sync health from the work that remains, including failures.', artwork: scene('failure-false-calm', 'A softly glowing status instrument sits above unfiled pages and loose photographs.') },
  ],
  solutions: [
    { title: 'One sync owner', body: 'CKSyncEngine owns Echo synchronisation. Removing overlapping mirroring makes responsibility clear.' },
    { title: 'Recovery with care', body: 'Schema-aware recovery and a fresh fetch give rejected work a deliberate path forward. Account changes are handled explicitly.' },
    { title: 'A truthful instrument', body: 'Pending work and failures inform sync health. Small and large layouts describe the same underlying state.' },
  ],
  validation: { heading: 'The Echo was still there.', body: 'A newer build was installed over the existing app, without erasing its data. The existing Echo survived. It subsequently appeared on the iPad.', source: 'Historical device validation supplied in the Specimen 002 brief.' },
  privacy: {
    heading: 'The story belongs\nto the person.',
    paragraphs: ['Family history. A private regret. Something never said in public. This material asks for more than a privacy badge.', 'Preservation begins with respecting the person who chose to leave the words behind.'],
    details: [
      { title: 'Personal storage', body: 'Memories are stored locally, with synchronisation through the person’s private iCloud database when available.' },
      { title: 'Permission before AI', body: 'AI processing sends text to an external service only with consent. Relevant context can include recent Echo summaries and chapter titles.' },
      { title: 'A choice that can change', body: 'AI consent can be withdrawn in Settings. Echoes already saved remain available.' },
      { title: 'Words, not an audio archive', body: 'Audio is used for speech recognition and is not permanently retained. The preserved record is the written Echo, alongside its photographs.' },
    ], url: 'https://memoir.gamadynamics.com/privacy',
  },
  mutations: [
    { id: '001', numeral: 'I', title: 'The Recorder', summary: 'A thought becomes words that can be kept.', form: 'Spoken memory → transcript', meaning: 'Capture begins with the person’s words. Original audio is not retained.', artwork: scene('capture-desk', 'A microphone and photograph on a writing desk.') },
    { id: '002', numeral: 'II', title: 'The Echo', summary: 'Speech becomes a structured memory.', form: 'Transcript → written Echo', meaning: 'Assistance gives the page shape while the person supplies the life.', artwork: scene('first-echo', 'A single ivory page preserved beneath an archival glass press.') },
    { id: '003', numeral: 'III', title: 'The Album', summary: 'A photograph gains the story around it.', form: 'Image + perspective', meaning: 'What happened just before the photograph can live beside it.', artwork: scene('photograph-story', 'An album holds a family photograph beside its written story.') },
    { id: '004', numeral: 'IV', title: 'The Chapter', summary: 'Separate moments find a shared thread.', form: 'Echoes → narrative', meaning: 'A collection becomes something a reader can follow.', artwork: scene('chapter', 'Memory pages and photographs gather in an open linen-bound chapter.') },
    { id: '005', numeral: 'V', title: 'The Memoir', summary: 'The fragments begin to describe a life.', form: 'Chapters → book', meaning: 'A growing memoir can be revisited and exported as a PDF.', artwork: scene('memoir-archive', 'An open memoir rests in a library of carefully preserved books.') },
    { id: '006', numeral: 'VI', title: 'The Bridge', summary: 'The memory follows the person across devices.', form: 'iPhone ↔ iPad', meaning: 'Capture and reflection share the same archive through one sync path.', artwork: scene('continuity-bridge', 'Matching archival cases connected by one illuminated bridge.') },
    { id: '007', numeral: 'VII', title: 'The Presence', summary: 'Someone returns to what was left behind.', form: 'Story → rediscovery', meaning: 'A future reader meets the person’s own words and photographs. Nothing needs to be invented.', artwork: scene('future-reader', 'A future reader sits beside an old photograph in a warm room.') },
  ],
  currentStage: { heading: 'Shipped. Still becoming.', body: 'A native iPhone and iPad application for recording, reflecting and remembering. The work continues: protect the archive, make the book easier to return to, and keep the person at its centre.' },
  closingLines: ['We cannot stay.', 'Our stories can.'],
};

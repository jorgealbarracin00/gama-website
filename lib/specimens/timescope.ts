import type { SpecimenArtwork, TimeScopeSpecimen } from './types';

const scene = (name: string, alt: string): SpecimenArtwork => ({
  src: `/specimens/timescope/${name}-v1.webp`,
  width: 1536,
  height: 1024,
  alt,
});

export const timescope: TimeScopeSpecimen = {
  id: 'timescope',
  number: '009',
  slug: 'timescope',
  name: 'GAMA TimeScope',
  epithet: 'See where your time goes.',
  type: 'app',
  status: 'incubating',
  statusLabel: 'Built / In App Store review',
  generation: 'The day, made visible',
  classification: 'LOCAL ACTIVITY AWARENESS / NATIVE MACOS',
  summary: 'A native Mac app born from a developer’s question: where did my day go? Clear local activity records for personal awareness and open family conversations.',
  narrative: 'Hours at a computer can feel like a blur. TimeScope gives those hours a shape, while keeping the records on the Mac and the meaning in human hands.',
  mission: 'Make computer time understandable, without turning it into a judgment.',
  platforms: ['macOS 14+'],
  technologySummary: ['SwiftUI / AppKit / Swift Charts', 'Local SQLite records', 'Optional browser Automation', 'Visible Guardian Mode'],
  featuredOrder: 9,
  accent: 'prism',
  productLink: { url: 'https://timescope.gamadynamics.com.au', label: 'Visit TimeScope' },
  chapters: [
    {
      id: 'origin',
      title: 'The missing hours',
      heading: '“Where did my day go?”',
      paragraphs: [
        'A developer could spend the whole day at a computer and still struggle to describe it. Coding, research, messages, a break, another tab. The hours were real. Their shape was hard to see.',
        'GAMA TimeScope started with that personal question. It grew into a way for anyone using a Mac to look back with a little more clarity.',
      ],
    },
    {
      id: 'experiment',
      title: 'Give the day a shape',
      heading: 'A total is a beginning. A timeline tells more.',
      paragraphs: [
        'Record foreground application sessions. Keep their start, end and duration. Then give the person two ways to read the day: a simple summary and the sequence behind it.',
        'Optional website details add context where the browser permits it. The application remains the parent: looking deeper should never count the same minute twice.',
      ],
    },
    {
      id: 'system',
      title: 'Quiet machinery',
      heading: 'In the menu bar. On your Mac.',
      paragraphs: [
        'A native macOS application observes the foreground app and keeps local records. Daily summaries, a seven-day view, the Activity Timeline and Activity Journal make those records readable.',
        'Recording begins when you choose Start recording. Browser details are a separate choice. No account or cloud service sits between you and your own day.',
      ],
    },
    {
      id: 'problems',
      title: 'What time cannot prove',
      heading: 'A visible window is not a visible mind.',
      paragraphs: [
        'A page can be open while someone thinks, reads, walks away or talks to another person. A shared macOS account can belong to more than one human. Missing observations leave uncertainty.',
        'TimeScope needed to preserve those limits. An interruption stays an interruption. Unclassified time stays unclassified. The record supports a conversation; it cannot finish it for you.',
      ],
    },
    {
      id: 'solutions',
      title: 'Clarity, with choice',
      heading: 'Useful detail. Deliberate boundaries.',
      paragraphs: [
        'Show the app first. Reveal website details only when they are wanted and available. Keep pause, retention and the privacy explanation close to the record.',
        'For a shared family Mac, visible Guardian Mode can protect settings and history deletion with a passcode. Accountability works best when everyone knows what is being recorded.',
      ],
    },
    {
      id: 'evolution',
      title: 'A day worth understanding',
      heading: 'Built for the hours that become a life.',
      paragraphs: [
        'The developer’s first question became a native application: from foreground sessions to browser permission controls, from separate totals to a hierarchy that keeps every minute in its place.',
        'TimeScope is built and in App Store review. The source project includes native interface renders, automated verification and a clear account of what remains to validate for distribution.',
      ],
    },
  ],
  artwork: {
    hero: scene('hero', 'A conceptual glass sculpture gives a computer day a shape with violet light and a spectrum of chronological rails.'),
    final: scene('horizon', 'A warm conceptual scene of a parent and teenager looking at a computer together, sharing an open conversation about their day.'),
  },
  captures: [
    {
      id: 'summary',
      title: 'The day, at a glance',
      src: '/specimens/timescope/captures/summary.webp',
      width: 2000,
      height: 1250,
      alt: 'Native TimeScope Summary showing a fictional four hours and eighteen minutes of computer activity, application totals and a seven-day chart.',
      note: 'Native SwiftUI render · isolated synthetic example · not recorded personal activity.',
    },
    {
      id: 'expanded-summary',
      title: 'Inside the application',
      src: '/specimens/timescope/captures/expanded-summary.webp',
      width: 2000,
      height: 1200,
      alt: 'Native TimeScope hierarchy showing fictional Chrome activity expanded into website domains, optional page metadata and unclassified application time.',
      note: 'Native SwiftUI render · synthetic domains and content metadata · child time remains within its application total.',
    },
    {
      id: 'timeline',
      title: 'The sequence behind the total',
      src: '/specimens/timescope/captures/timeline.webp',
      width: 2000,
      height: 1250,
      alt: 'Native TimeScope Activity Timeline with separate fictional foreground application intervals and an idle and gaps row.',
      note: 'Native SwiftUI render · isolated synthetic example · every interval is a separate session.',
    },
    {
      id: 'journal',
      title: 'A record of the recording',
      src: '/specimens/timescope/captures/journal.webp',
      width: 2000,
      height: 1250,
      alt: 'Native TimeScope Activity Journal showing a fictional monitoring timeline, a confirmed quit and an inferred interruption.',
      note: 'Native SwiftUI render · synthetic events · an inferred interruption does not establish its cause.',
    },
    {
      id: 'settings',
      title: 'Permissions, in the open',
      src: '/specimens/timescope/captures/settings.webp',
      width: 2000,
      height: 1250,
      alt: 'Native TimeScope settings with per-browser coverage, optional page-title and YouTube-identifier controls, recording settings and login-item options.',
      note: 'Native SwiftUI render · permission states are illustrative fixtures.',
    },
  ],
  closingLines: ['YOUR DAY, MADE VISIBLE.', 'A little more awareness. A better conversation.', 'SEE WHERE YOUR TIME GOES.'],
};

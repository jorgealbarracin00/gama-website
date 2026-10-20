/**
 * The public Apps showcase is deliberately separate from the specimen archive.
 * Only products approved for this six-app showcase belong in this registry.
 * QR generation and every direct action use this same destination value.
 */
export type ShowcasePlatform = 'ios' | 'web';
export type ShowcaseComposition = 'sign' | 'book' | 'display' | 'wood';

export interface ShowcaseApp {
  readonly id: string;
  readonly name: string;
  readonly platform: ShowcasePlatform;
  readonly url: string;
  readonly description: string;
  readonly visible: boolean;
  readonly order: number;
  readonly composition: ShowcaseComposition;
  readonly artwork: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
    readonly mobileSrc?: string;
    readonly mobileWidth?: number;
    readonly mobileHeight?: number;
  };
}

export const showcaseApps = [
  {
    id: 'dunnymaster',
    name: 'DunnyMaster',
    platform: 'ios',
    url: 'https://apps.apple.com/au/app/dunnymaster/id6819902112',
    description: 'A toilet-break timer. Five little games. A lighter moment.',
    visible: true,
    order: 1,
    composition: 'sign',
    artwork: {
      src: '/apps/scenes/dunnymaster-v1.webp',
      width: 1024,
      height: 1536,
      alt: 'A cheerful toilet character presents a sign in a warmly lit cartoon bathroom.',
    },
  },
  {
    id: 'tara',
    name: 'TARA',
    platform: 'ios',
    url: 'https://apps.apple.com/au/app/tara-timed-intake-assistant/id6819933946',
    description: 'Your timed intake assistant. Know what happens next.',
    visible: true,
    order: 2,
    composition: 'sign',
    artwork: {
      src: '/apps/scenes/tara-v1.webp',
      width: 1024,
      height: 1536,
      alt: 'A friendly wellness companion with a water bottle presents a sign in a peaceful, sunlit setting.',
    },
  },
  {
    id: 'grocerymaster',
    name: 'GroceryMaster',
    platform: 'ios',
    url: 'https://apps.apple.com/au/app/grocerymaster/id6767196131',
    description: 'One living grocery list. Everyone shopping together.',
    visible: true,
    order: 3,
    composition: 'sign',
    artwork: {
      src: '/apps/scenes/grocerymaster-v1.webp',
      width: 1024,
      height: 1536,
      alt: 'A smiling cartoon shopper presents a sign beside a trolley of fresh groceries.',
    },
  },
  {
    id: 'memoirechoes',
    name: 'MemoirEchoes',
    platform: 'ios',
    url: 'https://apps.apple.com/au/app/memoirechoes/id6792436890',
    description: 'Capture a memory. Give your story a place to grow.',
    visible: true,
    order: 4,
    composition: 'book',
    artwork: {
      src: '/apps/scenes/memoirechoes-v1.webp',
      width: 1024,
      height: 1536,
      alt: 'A thoughtful older storyteller opens a memoir among family photographs and treasured books.',
    },
  },
  {
    id: 'cashcast',
    name: 'CashCast',
    platform: 'web',
    url: 'https://cashcast.gamadynamics.com.au',
    description: 'See tomorrow. Change today. Give your cash flow a plan.',
    visible: true,
    order: 5,
    composition: 'display',
    artwork: {
      src: '/apps/scenes/cashcast-v1.webp',
      width: 1536,
      height: 1024,
      mobileSrc: '/apps/scenes/cashcast-mobile-v1.webp',
      mobileWidth: 1024,
      mobileHeight: 1536,
      alt: 'A friendly planner at a blue-lit desk presents a display beside a laptop and a cash-flow chart.',
    },
  },
  {
    id: 'coco',
    name: 'Coco The Llama',
    platform: 'web',
    url: 'https://cocothellama.com',
    description: 'Colourful little clothes. A whole world of personality.',
    visible: true,
    order: 6,
    composition: 'wood',
    artwork: {
      src: '/apps/scenes/coco-v1.webp',
      width: 1536,
      height: 1024,
      mobileSrc: '/apps/scenes/coco-mobile-v1.webp',
      mobileWidth: 1024,
      mobileHeight: 1536,
      alt: 'Coco the llama presents a wooden sign in a playful world of colourful clothing and creative tools.',
    },
  },
] as const satisfies readonly ShowcaseApp[];

export const visibleShowcaseApps: readonly ShowcaseApp[] = showcaseApps
  .filter(app => app.visible)
  .sort((first, second) => first.order - second.order);

export function getShowcaseActionLabel(app: Pick<ShowcaseApp, 'platform'>): string {
  return app.platform === 'ios' ? 'Download on the App Store' : 'Launch Web App';
}

export function getShowcaseQrPath(app: Pick<ShowcaseApp, 'id'>): string {
  return `/apps/qr/${app.id}.svg`;
}

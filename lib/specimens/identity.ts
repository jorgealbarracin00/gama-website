import type { IdentitySpecimen, SpecimenArtwork } from './types';

const art = (name: string, alt: string): SpecimenArtwork => ({ src: `/specimens/identity/${name}-v1.webp`, alt, width: 1536, height: 1024 });
const artwork = {
  hero: art('one-person-many-products', 'One warm identity nucleus at an architectural interchange connecting a grocery world, a memory archive, a time chamber and a small boutique.'),
  origin: art('four-separate-gates', 'Four distinct product chambers with gaps between their entrance paths; one warm identity nucleus waits outside.'),
  doors: art('many-doors', 'Three different entry gates converge at one warm identity nucleus and one continuing path.'),
  principal: art('principal-core', 'A constant warm identity nucleus inside a circular stone opening surrounded by changing glass and aqua infrastructure.'),
  session: art('session-continuity', 'A modular bridge maintains a continuous path for the identity nucleus while a segment is replaced.'),
  architecture: art('shared-layer', 'Three incoming paths cross a defined boundary into one identity court, with controlled routes to four destination terraces.'),
  kit: art('shared-kit', 'One reusable circular gateway module on a workbench and matching modules installed in different architectural structures.'),
  entitlement: art('identity-and-access', 'The same identity nucleus faces two destinations: one open, one closed by an independent glass boundary.'),
  twins: art('failure-the-twin', 'Two identical-looking warm identity nuclei on separate islands connected to different provider gates.'),
  expired: art('failure-expired-bridge', 'An identity nucleus has reached its destination, but a missing bridge segment interrupts the return path.'),
  passports: art('failure-four-passports', 'Four blank identity documents fit four incompatible doorway shapes, all for one person.'),
  environment: art('failure-wrong-environment', 'A rehearsal gateway and a finished gateway occupy separate lanes divided by glass.'),
  recovery: art('path-back', 'A gently lit side route rejoins the central identity court through a separate entrance.'),
  evolution: art('identity-evolution', 'Seven architectural bays progress from separate local doorways to a coherent connected interchange.'),
  invisible: art('invisible-infrastructure', 'A quiet architectural passage where identity routing is integrated into the floor and almost disappears.'),
  final: art('same-human', 'The same warm identity nucleus moves through a mature interchange linking four distinct product worlds.'),
};

export const identity: IdentitySpecimen = {
  id: 'GAMA-005', number: '005', slug: 'identity', name: 'GAMA Identity',
  epithet: 'Different apps. Same human.', type: 'system', status: 'deployed', statusLabel: 'Live / Production',
  generation: 'Shared platform primitive', classification: 'IDENTITY / AUTHENTICATION / SESSION CONTINUITY',
  summary: 'A shared identity platform that separates the person from the way they sign in, and gives GAMA integrations a stable principal and a common session foundation.',
  narrative: 'One person. Many products. One identity.',
  mission: 'Make identity disappear into the product.', platforms: ['Platform services', 'Apple client SDK', 'Web integrations'],
  technologySummary: ['TypeScript / Fastify', 'PostgreSQL', 'GAMAIdentityKit', 'Apple / Google / Email'],
  featuredOrder: 5, accent: 'aqua', productLink: { url: '/incubation/identity#system', label: 'Explore the identity layer' },
  chapters: [
    { id: 'origin', title: 'Origin', heading: 'Every app asked the same question.', paragraphs: ['A list. A memory. A routine. A little shop. Each product has its own world. Underneath, each eventually needs to know who arrived.', 'Rebuilding accounts, credentials and session handling for every application creates islands. The platform needed a more durable starting point.'] },
    { id: 'experiment', title: 'Experiment', heading: 'The door can change.', paragraphs: ['An authentication provider verifies a credential. GAMA resolves that verified relationship to a person inside the platform.', 'Apple, Google and email/password can be ways in. The principal is the answer that remains after the door has closed.'] },
    { id: 'system', title: 'System', heading: 'One shared identity layer.', paragraphs: ['The current service models a HumanIdentity independently of credentials and sessions. Provider relationships point to that identity. Applications can build on the result.', 'Recognition, session continuity and permission are distinct responsibilities. Keeping them separate is what makes the whole system understandable.'] },
    { id: 'problems', title: 'Problems', heading: 'The seams matter.', paragraphs: ['A successful sign-in is only the beginning. Matching emails, expired sessions, changing response contracts and environment boundaries all need explicit answers.'] },
    { id: 'solutions', title: 'Solutions', heading: 'Complexity belongs underneath.', paragraphs: ['A stable principal. Explicit provider relationships. Renewable sessions. Reusable client behaviour. Product access checked on its own terms.', 'The infrastructure carries that complexity so the person can get on with the product.'] },
    { id: 'evolution', title: 'Evolution', heading: 'From a login screen to a platform primitive.', paragraphs: ['Seven architectural mutations describe the direction of the system. These are conceptual stages, rather than a dated release history. The shared foundation is live; adoption is integration by integration.'] },
  ], artwork,
  captures: [
    { id: 'sign-in', src: '/specimens/identity/captures/coco-sign-in.webp', width: 1280, height: 1324, title: 'Coco / The doors in', alt: 'The real Coco sign-in screen with Apple, Google and blank email/password fields.', note: 'Live public interface · 8 October 2026. Sign-in options, with no authenticated account shown.' },
    { id: 'recovery', src: '/specimens/identity/captures/coco-recovery.webp', width: 1280, height: 998, title: 'Coco / A way back', alt: 'The real Coco password recovery page with an empty email field and a link back to sign-in.', note: 'Live public interface · 8 October 2026. Empty form; no recovery request was submitted.' },
  ],
  failures: [
    { id: 'the-twin', title: 'The twin', body: 'The same email can arrive through different provider subjects. Matching the visible label is not enough to establish that two authenticated identities belong together.', lesson: 'Link a verified method to an authenticated principal. Never merge on email text alone.', evidence: 'Service regression tests cover Apple, Google and password-account collisions, plus explicit linking conflicts.', artwork: artwork.twins },
    { id: 'expired-bridge', title: 'The expired bridge', body: 'A login that works now can fail later. An expired access session and a revoked renewal credential are different states, with different paths forward.', lesson: 'Renew valid continuity. Respect expiry and revocation. Preserve retryable network failures.', evidence: 'Session tests cover rotation, expiry, revocation and reuse rejection. SDK tests cover shared renewal after concurrent unauthorised responses.', artwork: artwork.expired },
    { id: 'four-passports', title: 'The four passports', body: 'A shared service can still drift from its clients. Earlier IdentityKit releases needed fixes for production registration and login response contracts.', lesson: 'Centralise response mapping and test the contract at the shared boundary.', evidence: 'IdentityKit 1.0.2 and 1.0.3 document the concrete compatibility fixes. Four passports is the metaphor for duplicated client interpretation.', artwork: artwork.passports },
    { id: 'wrong-environment', title: 'The wrong environment', body: 'A test configuration can look deceptively like a live one. Provider audiences, trusted app destinations and persistence configuration must agree before a flow can be trusted.', lesson: 'Make the environment explicit. Reject incomplete or incompatible configuration.', evidence: 'Configuration tests enforce complete provider setup, allowed client identifiers, trusted HTTPS app origins and required database configuration. This is a tested failure boundary, not a claimed production incident.', artwork: artwork.environment },
  ],
  mutations: [
    { id: 'local-login', numeral: '001', title: 'The local login', summary: 'Each product begins with its own answer.', form: 'Separate gates', meaning: 'Repeated account and session behaviour creates islands.', artwork: artwork.origin },
    { id: 'shared-account', numeral: '002', title: 'The shared account', summary: 'One foundation becomes reusable.', form: 'A central interchange', meaning: 'Products can consume a shared identity service.', artwork: artwork.architecture },
    { id: 'principal', numeral: '003', title: 'The principal', summary: 'The person outlasts the credential.', form: 'One constant nucleus', meaning: 'HumanIdentity is independent of email and provider metadata.', artwork: artwork.principal },
    { id: 'session', numeral: '004', title: 'The session', summary: 'Continuity becomes a responsibility.', form: 'A renewable bridge', meaning: 'Access can renew within its lifetime and end predictably.', artwork: artwork.session },
    { id: 'kit', numeral: '005', title: 'The kit', summary: 'Solve common client behaviour once.', form: 'One reusable module', meaning: 'IdentityKit shares persistence, validation, renewal and provider operations.', artwork: artwork.kit },
    { id: 'access', numeral: '006', title: 'The entitlement bridge', summary: 'Who you are and what you can use.', form: 'Independent destination gates', meaning: 'Identity supports product access without becoming the access rule.', artwork: artwork.entitlement },
    { id: 'same-human', numeral: '007', title: 'The same human', summary: 'Different products. One durable answer.', form: 'A coherent ecosystem', meaning: 'The direction: shared recognition across integrated products, with explicit sessions and permissions.', artwork: artwork.final },
  ],
  closingLines: ['One person.', 'Many products.', 'One identity.'],
};

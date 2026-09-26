// Landing-page content for the learning platform. Everything here is grounded
// in the real product: the interactive-lesson proof of concept (the
// ask-the-lesson flow and its measured timings), the rendering engine's
// plugin and visual-template catalogue, and the studio's draft-then-publish
// authoring workflow.

export interface Feature {
  icon: string
  title: string
  text: string
}

export interface Step {
  n: string
  title: string
  text: string
  accent?: 'amber' | 'blue'
}

export const useProductData = () => {
  const product = {
    name: 'Niyabh Labs',
    tagline: 'Lessons that answer back',
    // Reachable inbox for the team behind the platform.
    email: 'info.niyabhlabs@gmail.com',
    stage: 'Platform in active development · proof of concept running'
  }

  const nav = [
    { label: 'Ask the lesson', to: '#ask' },
    { label: 'How it works', to: '#pipeline' },
    { label: 'Engine', to: '#engine' },
    { label: 'For creators', to: '#surfaces' },
    { label: 'FAQ', to: '#faq' }
  ]

  const marquee = [
    'Ask the lesson',
    'Generated, not recorded',
    'Word-level audio sync',
    'Interactive assessments',
    'Draft → publish',
    'Rendered at runtime'
  ]

  // Why the platform exists.
  const problems: Feature[] = [
    {
      icon: 'chat',
      title: 'Your question has nowhere to go',
      text:
        'A textbook cannot hear you. A recorded video cannot either. The one moment a learner is most engaged — the moment they are confused — is the moment every other format goes quiet.'
    },
    {
      icon: 'users',
      title: 'One pace for everyone',
      text:
        'Pre-recorded content is cut once for an imaginary average learner. Too fast for some, painfully slow for others, and impossible to re-cut for the person actually watching.'
    },
    {
      icon: 'eye',
      title: 'Watching is not learning',
      text:
        'Passive playback proves nothing. Learning needs the lesson to stop, ask something back, and wait for a real answer before it moves on.'
    }
  ]

  // The flagship feature: pause → ask → generated answer → resume.
  const askSteps: Step[] = [
    {
      n: '01',
      title: 'Pause anywhere',
      text:
        'The learner hits Ask. The lesson pauses on the exact frame and the player reads that moment — what is on screen, what was being said, and which part of the diagram was pointed at.',
      accent: 'amber'
    },
    {
      n: '02',
      title: 'Ask it however you like',
      text:
        'Type the question, or tap the microphone and speak it. Live speech recognition handles Chrome and Edge; anywhere else the question is recorded and written out for you.',
      accent: 'blue'
    },
    {
      n: '03',
      title: 'The answer is made, not looked up',
      text:
        'One to three new scenes are written, voiced, assembled into a timeline and validated — a real generated video, in the same player, in the same visual language as the lesson.',
      accent: 'blue'
    },
    {
      n: '04',
      title: 'The lesson carries on',
      text:
        'Replay the answer, ask a follow-up, or go back — and the lesson resumes from the exact millisecond it stopped. Every earlier answer stays on the timeline as a blue marker.',
      accent: 'amber'
    }
  ]

  const askDetails = [
    'Click a box in a diagram to ask about that specific part',
    'Answers start playing on the first chunk of audio, before generation finishes',
    'Sentence-level captions, aligned to the narration',
    'Follow-up questions chain from the answer you just watched',
    'Draggable timeline, ±10 s, restart, full screen, keyboard shortcuts',
    'Cancel at any point and drop straight back into the lesson'
  ]

  // Measured on the proof of concept.
  const askMetrics = [
    { value: '3.5 s', label: 'First scene written' },
    { value: '~5 s', label: 'First sound of the answer' },
    { value: '12 s', label: 'Whole answer generated' }
  ]

  // How a generated answer is produced, in order.
  const pipeline: Step[] = [
    {
      n: '01',
      title: 'Capture the moment',
      text:
        'The paused frame is turned into context: the slide on screen, the sentence being spoken, the lesson so far, and the element the learner pointed at.'
    },
    {
      n: '02',
      title: 'Write the scenes',
      text:
        'A reasoning model writes one to three scenes as structured JSON, streaming them out one at a time. It is handed the engine’s own visual catalogue, so it can only choose things the engine can actually draw.'
    },
    {
      n: '03',
      title: 'Check and repair',
      text:
        'Every scene is validated against the engine’s schema and anchor conventions as it arrives, and repaired if it drifts — before a single pixel is drawn.'
    },
    {
      n: '04',
      title: 'Give it a voice',
      text:
        'Each scene is narrated by a generative speech model and streamed back as audio while the next scene is still being written. Playback begins on the first chunk.'
    },
    {
      n: '05',
      title: 'Assemble the timeline',
      text:
        'Exact audio lengths replace the estimated timings, effects are re-anchored to the words they belong to, and the finished topic is stored so replays are frame-accurate.'
    }
  ]

  const streamFrames = [
    { dir: 'out', label: 'POST /api/ask', note: 'question + the paused moment' },
    { dir: 'in', label: 'scene', note: 'scene 1 written — estimated timeline' },
    { dir: 'in', label: 'audio', note: 'narration streams in, playback starts' },
    { dir: 'in', label: 'audio-end', note: 'exact timings replace the estimate' },
    { dir: 'in', label: 'done', note: 'answer stored, ready to replay' }
  ]

  // The rendering engine.
  const engineFeatures: Feature[] = [
    {
      icon: 'bolt',
      title: 'A timeline, not a file',
      text:
        'Lessons are a sequence of timed commands executed in the browser against a native resolution — there is no mp4 to encode, host or re-cut.'
    },
    {
      icon: 'chat',
      title: 'Word-level audio sync',
      text:
        'Actions fire relative to specific spoken words, so a highlight lands on the word that explains it rather than a hard-coded second.'
    },
    {
      icon: 'layers',
      title: 'Plugin architecture',
      text:
        'The core owns time, state and the control surface. Everything visible is rendered by a plugin, so new kinds of content plug in without touching the engine.'
    },
    {
      icon: 'target',
      title: 'Interactive pausing',
      text:
        'A plugin can halt the animation loop entirely and hold the lesson until the learner actually does something — the mechanism assessments are built on.'
    },
    {
      icon: 'eye',
      title: 'Automatic captions',
      text:
        'Captions are extracted from the narration and displayed as whole sentences, in time with the audio. Nothing to author by hand.'
    },
    {
      icon: 'tune',
      title: 'Responsive and framework-agnostic',
      text:
        'One native resolution scales to any container, and the engine drops into React, Vue, Angular or plain JavaScript — including a headless, chrome-free mode.'
    }
  ]

  const plugins = [
    { name: 'Text', text: 'Hero statements, title + points, numbered lists, progressive reveal' },
    { name: 'Visual', text: 'Animated explanatory diagrams from a published template catalogue' },
    { name: 'Code', text: 'Syntax-highlighted, walk-through code blocks' },
    { name: 'Terminal', text: 'Typed commands, streaming logs, loading states' },
    { name: 'IDE simulator', text: 'A coding environment acted out on screen' },
    { name: 'Math', text: 'Equation formatting and step-by-step sequences' },
    { name: 'D3', text: 'Data visualisations and generated SVG' },
    { name: 'GSAP', text: 'Multi-element, choreographed DOM animation' },
    { name: 'Assessment', text: 'Quizzes that stop the video until they are answered' }
  ]

  const diagramTemplates = [
    'Flow diagram',
    'Layer stack',
    'Comparison',
    'Hierarchy tree',
    'Cycle diagram',
    'Annotated box',
    'Architecture diagram'
  ]

  // Content model.
  const contentModel = [
    {
      label: 'Course',
      text: 'The whole subject, with its own pricing profile — free, one-time or subscription.'
    },
    {
      label: 'Unit',
      text: 'A chapter-sized grouping, brainstormed with an agent before anything is written.'
    },
    {
      label: 'Unit item',
      text: 'The smallest learnable atom: an article as the written source, and the generated video the learner actually watches.'
    }
  ]

  const questionTypes = [
    { name: 'Multiple choice', text: 'One right answer among distractors written alongside it.' },
    { name: 'True / false', text: 'Fast checks on the claim just made on screen.' },
    { name: 'Fill in the blanks', text: 'Recall the exact term, not just recognise it.' },
    { name: 'Order the items', text: 'Prove the sequence is understood, not memorised.' },
    { name: 'Match the following', text: 'Connect concepts to their definitions or examples.' }
  ]

  // Two surfaces, one backend.
  const surfaces = [
    {
      key: 'studio',
      eyebrow: 'For creators',
      title: 'Niyabh Labs Studio',
      text:
        'Authoring with agents, not a blank page. Brainstorm the course, shape the units, generate the articles and the assessments — then edit what you got and publish when it is right.',
      points: [
        'Brainstorm a course and its unit structure in a live agent session',
        'Watch plans and content stream in as they are written',
        'Pick a plan, drop the items you do not want, refine the rest',
        'Generate articles and every assessment type from the article itself',
        'Everything is a draft until you publish — nothing half-built reaches a learner',
        'Upload and manage your own assets'
      ]
    },
    {
      key: 'learner',
      eyebrow: 'For learners',
      title: 'The learner app',
      text:
        'Discover a course, enrol, and learn from lessons that are rendered for you as you watch — with the freedom to stop and ask at any point.',
      points: [
        'Browse and enrol in published courses, free or paid',
        'Watch engine-rendered lessons with captions and full playback control',
        'Pause and ask a question, and get a generated video answer',
        'Take assessments built into the lesson itself',
        'Progress tracked per video, per unit and per course',
        'Keep a wishlist of what to learn next'
      ]
    }
  ]

  const stats = [
    { value: 9, prefix: '', suffix: '', label: 'Rendering plugins' },
    { value: 7, prefix: '', suffix: '', label: 'Diagram templates' },
    { value: 5, prefix: '', suffix: '', label: 'Assessment types' },
    { value: 5, prefix: '~', suffix: ' s', label: 'To the first spoken word of an answer' }
  ]

  const faqs = [
    {
      q: 'Are the lessons pre-recorded videos?',
      a: 'No. A lesson is a script of timed commands — text, diagrams, code, terminals — executed live in the browser by our rendering engine, narrated by generated speech. There is no video file to encode or host, which is exactly why a new scene can be added to a lesson mid-playback.'
    },
    {
      q: 'How long does a learner wait for an answer?',
      a: 'On the proof of concept: the first scene is written in about 3.5 seconds, the first sound plays at about 5 seconds, and the full answer is finished in about 12. The answer starts playing on its first chunk of audio rather than waiting for the whole thing to be generated.'
    },
    {
      q: 'Can the AI invent a visual the engine cannot draw?',
      a: 'No. The model that writes answers is given the engine’s own visual catalogue, so it can only pick templates that exist. Every scene is then validated against the engine’s schema and repaired if needed before it reaches the screen.'
    },
    {
      q: 'Does the lesson lose its place?',
      a: 'Never. The lesson player is paused and kept in memory while the answer plays in a second player. Going back returns you to the exact millisecond you left, and earlier answers stay on the timeline as markers you can replay.'
    },
    {
      q: 'Who writes the courses?',
      a: 'Creators do, with agents doing the heavy lifting in the Studio. They brainstorm the course and its units, generate the articles and assessments, edit the drafts, and publish. Learners only ever see published content.'
    },
    {
      q: 'What subjects can it teach?',
      a: 'Anything the plugins can express: prose and structured text, mathematics, code walkthroughs, terminal sessions, IDE simulations, data visualisations, and seven kinds of explanatory diagram. New subject needs get a new plugin rather than a workaround.'
    },
    {
      q: 'How do assessments fit into a video?',
      a: 'An assessment is a plugin action that stops the animation loop entirely. The lesson does not continue until the learner answers, and the submission is recorded against their progress.'
    },
    {
      q: 'Is it accessible?',
      a: 'Captions are generated from the narration and shown as whole sentences in time with the audio. Playback is keyboard-driven — space to play or pause, arrows to skip, F for full screen — and the whole player respects reduced-motion preferences.'
    }
  ]

  return {
    product,
    nav,
    marquee,
    problems,
    askSteps,
    askDetails,
    askMetrics,
    pipeline,
    streamFrames,
    engineFeatures,
    plugins,
    diagramTemplates,
    contentModel,
    questionTypes,
    surfaces,
    stats,
    faqs
  }
}

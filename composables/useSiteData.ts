// Central place for site-wide content so pages/components stay in sync.
export interface NavLink {
  label: string
  to: string
}

export interface ProcessStep {
  title: string
  text: string
}

export interface Service {
  slug: string
  icon: string
  title: string
  tagline: string
  description: string
  // Detail-page content
  summary: string
  features: string[]
  outcomes: string[]
  process: ProcessStep[]
  deliverables: string[]
  useCases: string[]
}

export const useSiteData = () => {
  const company = {
    name: 'Niyabh Labs',
    legalName: 'Niyabh Labs',
    tagline: 'AI-first engineering for ambitious teams',
    email: 'info.niyabhlabs@gmail.com',
    phone: '+91 00000 00000',
    location: 'Kerala, India · Remote-first',
    domain: 'niyabhlabs.com',
    founded: '2024'
  }

  const nav: NavLink[] = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ]

  const social = [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/' },
    { label: 'X', icon: 'twitter', href: 'https://x.com/' }
  ]

  const services: Service[] = [
    {
      slug: 'fine-tuning',
      icon: 'tune',
      title: 'Model Fine-Tuning',
      tagline: 'Models that speak your domain',
      description:
        'We fine-tune any kind of model — LLMs, vision and multimodal models, image classifiers, embeddings and more — turning general intelligence into a specialist tuned to your data.',
      summary:
        'Off-the-shelf models are generalists. We adapt them to your domain, data, and tasks — whether that is a large language model, an image or vision model, a classification model, an embedding model, or a speech model — so you get measurable accuracy gains, lower cost, and consistent behaviour in production.',
      features: [
        'Fine-tuning for LLMs, vision & multimodal models',
        'Image classification & object-detection model training',
        'Custom embedding & retrieval models',
        'Dataset curation, cleaning & synthetic augmentation',
        'LoRA / QLoRA & full fine-tuning pipelines',
        'Eval harnesses with domain-specific benchmarks'
      ],
      outcomes: [
        'Higher accuracy on your real-world tasks than a generic model',
        'Smaller, cheaper models that punch above their size',
        'Consistent tone, format, and behaviour you can rely on',
        'A repeatable training pipeline you own'
      ],
      process: [
        { title: 'Data audit & curation', text: 'We assess your data, clean it, label gaps, and generate synthetic examples where needed.' },
        { title: 'Train & experiment', text: 'We run LoRA/QLoRA or full fine-tunes across model families and track every experiment.' },
        { title: 'Evaluate', text: 'Domain-specific eval harnesses prove the tuned model beats the baseline before it ships.' },
        { title: 'Deploy & monitor', text: 'We package the model as an endpoint, wire up monitoring, and keep improving it on fresh data.' }
      ],
      deliverables: [
        'Fine-tuned model weights and/or a hosted inference endpoint',
        'Reproducible training & data-prep pipeline',
        'Evaluation report with before/after benchmarks',
        'Handover documentation'
      ],
      useCases: [
        'Domain-specific chat & copilots',
        'Document & email classification',
        'Defect detection in product images',
        'Custom search & recommendation embeddings',
        'Medical, legal, or finance specialist models'
      ]
    },
    {
      slug: 'agentic-apps',
      icon: 'robot',
      title: 'Agentic App Development',
      tagline: 'Software that takes action',
      description:
        'From tool-using copilots to multi-agent workflows, we design and build autonomous systems that plan, reason, and get real work done reliably.',
      summary:
        'We design and build AI applications that do more than chat — they use tools, retrieve grounded knowledge, plan multi-step work, and act on your systems. Every agent ships with the guardrails, evals, and streaming UX needed to be trusted in production.',
      features: [
        'Multi-agent orchestration & tool integration',
        'RAG pipelines with grounded, cited answers',
        'Guardrails, evals & human-in-the-loop controls',
        'Streaming, real-time UX across web & mobile',
        'Memory, planning & function-calling',
        'Integration with your APIs and data'
      ],
      outcomes: [
        'Products that complete tasks, not just answer questions',
        'Grounded, cited outputs your users can trust',
        'Safe autonomy with human oversight where it matters',
        'A codebase your team can extend'
      ],
      process: [
        { title: 'Scope & design', text: 'We map the jobs-to-be-done and design the agent architecture and tool surface.' },
        { title: 'Build the agent', text: 'Orchestration, tools, RAG, and memory — wired to your systems with typed interfaces.' },
        { title: 'Guardrails & evals', text: 'We add safety rails, evaluation suites, and human-in-the-loop checkpoints.' },
        { title: 'Ship & iterate', text: 'We launch with observability and tune behaviour from real usage.' }
      ],
      deliverables: [
        'Production agentic application (web and/or mobile)',
        'Tool & data integrations',
        'Eval suite and guardrail configuration',
        'Documentation and handover'
      ],
      useCases: [
        'Customer-support copilots',
        'Internal research & analysis agents',
        'Sales & ops automation assistants',
        'Document-heavy workflow agents'
      ]
    },
    {
      slug: 'agentic-automation',
      icon: 'workflow',
      title: 'Agentic Automation',
      tagline: 'Autonomous agents for your operations',
      description:
        'We set up and configure agent platforms like OpenClaw and OpenFang to automate real company activities — wired to your tools and tuned for your specific use cases.',
      summary:
        'Open agent tooling like OpenClaw and OpenFang is powerful but fiddly to run well. We install, host, and harden these platforms, connect them to your browser, tools, and internal systems, and configure them for the exact workflows you want automated — with permissions, sandboxing, and audit logging so they run safely.',
      features: [
        'OpenClaw & OpenFang setup, hosting & hardening',
        'Browser, API & internal-tool integrations',
        'Use-case-specific agent configuration & prompting',
        'Permissions, sandboxing & audit logging',
        'Human-in-the-loop approvals for sensitive actions',
        'Monitoring, alerting & ongoing maintenance'
      ],
      outcomes: [
        'Repetitive company activities run themselves',
        'Agents that operate your real tools and browser',
        'Safe, auditable autonomy — not a black box',
        'Faster turnaround on high-volume manual work'
      ],
      process: [
        { title: 'Workflow discovery', text: 'We identify the manual activities worth automating and the tools they touch.' },
        { title: 'Tool setup & integration', text: 'We deploy and configure OpenClaw / OpenFang and connect them to your systems.' },
        { title: 'Configure for your use cases', text: 'We tune the agents, prompts, and permissions for each specific workflow and test thoroughly.' },
        { title: 'Deploy, monitor, refine', text: 'We roll out with monitoring and human approvals, then refine from real runs.' }
      ],
      deliverables: [
        'Configured, hosted agent environment (OpenClaw/OpenFang)',
        'Integration connectors to your tools & data',
        'Per-workflow runbooks and permission policies',
        'Monitoring dashboard and maintenance plan'
      ],
      useCases: [
        'Automated research & data gathering',
        'Browser-based back-office tasks',
        'Cross-tool workflow automation',
        'Scheduled autonomous agent jobs',
        'Internal operations copilots'
      ]
    },
    {
      slug: 'ai-product-engineering',
      icon: 'sparkles',
      title: 'AI Product Engineering',
      tagline: 'From prototype to production',
      description:
        'We take AI features from idea to a polished, scalable product — full-stack engineering with design, infrastructure, and observability baked in.',
      summary:
        'We build complete AI products, not just prototypes. From discovery and design through full-stack engineering, data platforms, and observability, we ship AI features that are fast, reliable, and ready to scale.',
      features: [
        'Discovery, prototyping & AI feasibility studies',
        'Full-stack web & mobile app development',
        'Vector search & data platform design',
        'Analytics, monitoring & continuous evaluation',
        'Design systems & polished UX',
        'Scalable, secure architecture'
      ],
      outcomes: [
        'A production-grade product, not a demo',
        'A scalable architecture that grows with you',
        'Fast, reliable AI features users love',
        'Clear metrics and observability from day one'
      ],
      process: [
        { title: 'Discover', text: 'We validate the idea, scope the MVP, and de-risk the hardest AI parts first.' },
        { title: 'Design & prototype', text: 'We design the UX and build a working prototype to prove the experience.' },
        { title: 'Engineer', text: 'Full-stack build with the data, infra, and evals a real product needs.' },
        { title: 'Launch & scale', text: 'We ship, instrument, and harden for growth.' }
      ],
      deliverables: [
        'Production application & infrastructure',
        'Data & vector-search platform',
        'Analytics and evaluation dashboards',
        'Documentation and handover'
      ],
      useCases: [
        'AI-native SaaS products',
        'AI features inside existing apps',
        'Knowledge & search products',
        'Data-driven internal tools'
      ]
    },
    {
      slug: 'ai-first-development',
      icon: 'rocket',
      title: 'AI-First Development',
      tagline: 'Websites, apps & software — shipped fast',
      description:
        'We build websites, mobile apps, and full-stack applications the AI-first way — designing, coding, and shipping in a fraction of the traditional timeline.',
      summary:
        'Traditional agencies are slow. We build websites, mobile apps, and full-stack software using an AI-accelerated workflow from end to end — design, code, and deploy — so you get production-quality software shipped in a fraction of the usual time, without cutting corners on quality.',
      features: [
        'Marketing & product websites',
        'iOS & Android mobile apps',
        'Full-stack web applications',
        'AI-accelerated design & coding workflow',
        'Rapid prototyping straight to production',
        'Modern, scalable, maintainable code'
      ],
      outcomes: [
        'Ship in weeks, not months',
        'Production-quality software, not throwaway prototypes',
        'A modern stack your team can own and maintain',
        'Move at startup speed without the agency overhead'
      ],
      process: [
        { title: 'Rapid discovery', text: 'We lock scope and design direction fast — days, not weeks.' },
        { title: 'Design & prototype', text: 'We produce a working, clickable prototype early so you see it real.' },
        { title: 'AI-accelerated build', text: 'We build the full product with an AI-first workflow at high velocity.' },
        { title: 'Ship & iterate', text: 'We deploy with CI/CD and keep shipping improvements.' }
      ],
      deliverables: [
        'Live website, mobile app, or full-stack product',
        'Clean source code and documentation',
        'Deployment & CI/CD setup',
        'Handover and optional ongoing support'
      ],
      useCases: [
        'Launching a new product fast',
        'Marketing & landing sites',
        'Startup MVPs',
        'Mobile apps for iOS & Android',
        'Internal tools & dashboards'
      ]
    },
    {
      slug: 'mlops-cloud',
      icon: 'cloud',
      title: 'MLOps & Cloud',
      tagline: 'Reliable AI infrastructure',
      description:
        'Deploy and scale your models with confidence. We build the pipelines, CI/CD, and cloud infrastructure that keep AI systems fast, safe, and observable.',
      summary:
        'Getting a model to work is half the battle — keeping it fast, cheap, and reliable in production is the rest. We build the deployment pipelines, autoscaling, and monitoring that let you ship AI with confidence on AWS, GCP, or Azure.',
      features: [
        'AWS / GCP / Azure deployment & Infrastructure-as-Code',
        'Model serving, autoscaling & GPU cost control',
        'CI/CD for data, models & prompts',
        'Security, compliance & monitoring',
        'Observability & alerting',
        'Disaster recovery & rollback'
      ],
      outcomes: [
        'Reliable, autoscaling model serving',
        'Lower and predictable GPU / inference costs',
        'Faster, safer releases via CI/CD',
        'Full visibility into production behaviour'
      ],
      process: [
        { title: 'Assess', text: 'We review your models, traffic, and cloud footprint to find the right architecture.' },
        { title: 'Build the platform', text: 'IaC, serving, autoscaling, and CI/CD wired together.' },
        { title: 'Instrument', text: 'Monitoring, alerting, and cost controls across the stack.' },
        { title: 'Operate', text: 'We hand over runbooks — or run it for you.' }
      ],
      deliverables: [
        'Infrastructure-as-Code and deployment pipelines',
        'Model-serving & autoscaling setup',
        'Monitoring, alerting & cost dashboards',
        'Runbooks and documentation'
      ],
      useCases: [
        'Scaling a model from prototype to production',
        'Cutting GPU / inference spend',
        'Standing up CI/CD for ML',
        'Compliance-ready AI infrastructure'
      ]
    },
    {
      slug: 'automation',
      icon: 'layers',
      title: 'Intelligent Automation',
      tagline: 'Cut the busywork',
      description:
        'We replace high-leverage manual workflows with dependable AI automation — from document processing to internal knowledge assistants.',
      summary:
        'Not every problem needs an autonomous agent. We identify the manual, repetitive workflows draining your team and replace them with dependable AI automation — document extraction, data pipelines, and internal assistants that just work.',
      features: [
        'Document & data extraction pipelines',
        'Workflow & back-office automation',
        'Internal knowledge assistants',
        'Integration with your existing tools',
        'Quality checks & validation',
        'Reporting & analytics'
      ],
      outcomes: [
        'Hours of manual data work removed',
        'Fewer errors from copy-paste workflows',
        'Faster, more consistent back-office processing',
        'Knowledge at your team’s fingertips'
      ],
      process: [
        { title: 'Map the workflow', text: 'We document the current manual process and its pain points.' },
        { title: 'Design the automation', text: 'We choose the simplest reliable approach and define validation.' },
        { title: 'Build & integrate', text: 'We build the pipeline and wire it into your existing tools.' },
        { title: 'Monitor & maintain', text: 'We track quality and keep it running smoothly.' }
      ],
      deliverables: [
        'Automated pipeline(s) integrated with your tools',
        'Validation & quality-check logic',
        'Reporting dashboard',
        'Documentation and handover'
      ],
      useCases: [
        'Invoice & document processing',
        'Data entry & migration',
        'Internal knowledge Q&A',
        'Report generation'
      ]
    },
    {
      slug: 'consulting',
      icon: 'compass',
      title: 'AI Strategy & Consulting',
      tagline: 'A clear roadmap',
      description:
        'Not sure where AI fits? We audit your workflows, prioritise the highest-ROI opportunities, and hand you a pragmatic, build-ready roadmap.',
      summary:
        'AI moves fast and the hype is loud. We cut through it — auditing your workflows, modelling ROI, and handing you a prioritised, build-ready roadmap along with the architecture and governance guidance to execute it.',
      features: [
        'AI opportunity assessment & ROI modelling',
        'Architecture & vendor / model selection',
        'Team enablement & best-practice playbooks',
        'Responsible-AI & governance guidance',
        'Proof-of-concept scoping',
        'Build-vs-buy analysis'
      ],
      outcomes: [
        'A prioritised, build-ready AI roadmap',
        'Confidence in your architecture & model choices',
        'A team that knows how to execute',
        'Clear guardrails for responsible AI'
      ],
      process: [
        { title: 'Discover', text: 'We interview stakeholders and map your workflows and data.' },
        { title: 'Assess & prioritise', text: 'We score opportunities by ROI, effort, and risk.' },
        { title: 'Recommend', text: 'We deliver architecture, model choices, and a phased roadmap.' },
        { title: 'Enable', text: 'We upskill your team and stay on call as you build.' }
      ],
      deliverables: [
        'AI opportunity & ROI assessment',
        'Architecture & tooling recommendations',
        'Phased implementation roadmap',
        'Governance & best-practice playbook'
      ],
      useCases: [
        'Deciding where to start with AI',
        'Choosing models, vendors & architecture',
        'Upskilling an in-house team',
        'Setting responsible-AI policy'
      ]
    }
  ]

  return { company, nav, social, services }
}

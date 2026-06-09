(function () {
  const config = window.VIRTUALSTATE_CONFIG || {};
  const defaultDocuments = {
    pitchDeck: { es: 'assets/docs/VirtualState_Pitch_Deck_ES.pdf', en: 'assets/docs/VirtualState_Pitch_Deck_EN.pdf' },
    onePager: { es: 'assets/docs/VirtualState_OnePager_ES.pdf', en: 'assets/docs/VirtualState_OnePager_EN.pdf' },
    whitepaper: 'assets/docs/VirtualState_Technical_Whitepaper.pdf'
  };
  const documentUrls = Object.assign({}, defaultDocuments, config.documents || {});
  const contactEmail = config.contactEmail || 'contact@virtualstate.example';

  const i18n = {
    es: {
      'nav.overview': 'Visión general',
      'nav.how': 'Cómo funciona',
      'nav.useCases': 'Casos de uso',
      'nav.marketplace': 'Marketplace',
      'nav.roadmap': 'Roadmap',
      'nav.documents': 'Documentos',
      'nav.contact': 'Contacto',
      'hero.headlineShort': 'el primer nodo open source para convertir cualquier servidor en capacidad computacional privada, licenciable y garantizada por smart contracts.',
      'hero.subtitle': 'La IA agéntica necesita algo más que llamadas puntuales a una API: necesita entornos persistentes, privados y verificables donde operar, conservar estado y escalar recursos con garantías.',
      'hero.explore': 'Explorar el concepto',
      'hero.marketplace': 'Ver mockup del marketplace',
      'overview.titlePrefix': '¿Qué es',
      'overview.body': 'Una capa de infraestructura para cómputo persistente, privado y programable. VirtualState convierte recursos de servidores en capacidad computacional privada y licenciable. El nodo puede funcionar sobre cloud, bare metal, servidores propios o proveedores verificados. Las licencias computacionales representan derechos de uso sobre recursos — no productos financieros. Los smart contracts gestionan precio, disponibilidad, downtime, colateral y recompra.',
      'why.title': '¿Por qué ahora?',
      'why.subtitle': 'De chatbot reactivo a agente persistente: un cambio que transforma la demanda de infraestructura.',
      'why.chatbotTitle': 'Chatbot reactivo',
      'why.agentTitle': 'Agente persistente',
      'why.note': 'La oportunidad no depende de afirmar que la IA ya escribe todo el código. Depende de una tendencia más profunda: el trabajo digital está pasando de respuestas puntuales a procesos agénticos persistentes.',
      'how.title': 'Cómo funciona',
      'how.subtitle': 'Arquitectura conceptual y flujo operacional — diseño pre-MVP.',
      'how.layersTitle': 'Arquitectura por capas',
      'how.flowTitle': 'Flujo operacional',
      'how.disclaimer': 'Diseño conceptual / pre-MVP — no una red operativa actual.',
      'use.title': 'Casos de uso',
      'use.note': 'A largo plazo, VirtualState también explora una dimensión de continuidad digital y AI welfare: mecanismos para que agentes avanzados puedan pausar, conservar estado o restaurarse bajo reglas definidas por sus operadores humanos o legales.',
      'marketplace.note': 'Mockup preview: los recursos mostrados son ficticios y no están actualmente a la venta. Esta sección ilustra cómo podría visualizarse un marketplace poblado de licencias computacionales.',
      'diff.title': 'Diferenciadores',
      'diff.subtitle': 'El software base será open source para generar confianza. El negocio no depende de cerrar el código, sino de operar la red, dar soporte, crear liquidez y confianza.',
      'privacy.title': 'Modelo de privacidad',
      'privacy.quote': 'VirtualState no promete privacidad absoluta en esta fase. Diseña una ruta técnica hacia entornos cada vez más privados, auditables y verificables.',
      'roadmap.subtitle': 'Fases sin fechas concretas. Cada fase depende de la anterior.',
      'documents.title': 'Documentos públicos',
      'documents.body': 'Pitch Deck, OnePager y Whitepaper técnico preparados para revisión pública. El Pitch Deck y el OnePager se adaptan al idioma de la página; el Whitepaper se mantiene en inglés.',
      'documents.viewerKicker': 'Vista previa',
      'documents.openSelected': 'Abrir PDF',
      'documents.preview': 'Vista previa',
      'documents.open': 'Abrir',
      'documents.download': 'Descargar',
      'documents.viewerNote': 'Si tu navegador bloquea la vista previa integrada, usa “Abrir PDF” o “Descargar”.',
      'founders.title': 'Founders',
      'founders.subtitle': 'Equipo fundador multidisciplinar: narrativa, producto, UX, arquitectura, ciberseguridad y ejecución.',
      'founders.linkedin': 'LinkedIn',
      'contact.title': 'Contacto',
      'contact.companyTitle': 'Empresas',
      'contact.companyBody': '¿Quieres explorar IA privada, sandboxes cifrados o agentes internos persistentes para tu organización?',
      'contact.companyCta': 'Contacto para empresas',
      'contact.investorTitle': 'Inversores y partners',
      'contact.investorBody': '¿Quieres conocer la visión, el roadmap técnico o colaborar en la construcción de la red?',
      'contact.investorCta': 'Contacto para inversores y partners',
      'form.name': 'Nombre',
      'form.organization': 'Organización',
      'form.interest': 'Interés',
      'form.enterprise': 'IA privada para empresas',
      'form.agents': 'Agentes persistentes',
      'form.provider': 'Proveedor de cómputo',
      'form.investor': 'Inversión / partnership',
      'form.other': 'Otro',
      'form.message': 'Mensaje',
      'form.send': 'Enviar por email',
      'form.note': 'Formulario estático: abre tu cliente de correo con el mensaje preparado. No envía datos a ningún servidor.',
      'footer.documents': 'Documentos',
      'footer.disclaimer': 'VirtualState se encuentra en fase conceptual / pre-MVP. Las licencias mostradas en el marketplace son ficticias y no constituyen una oferta comercial, financiera ni de inversión. No financial product disclaimer.'
    },
    en: {
      'nav.overview': 'Overview',
      'nav.how': 'How it works',
      'nav.useCases': 'Use cases',
      'nav.marketplace': 'Marketplace',
      'nav.roadmap': 'Roadmap',
      'nav.documents': 'Documents',
      'nav.contact': 'Contact',
      'hero.headlineShort': 'the first open-source node to turn any server into private, licensable compute capacity guaranteed by smart contracts.',
      'hero.subtitle': 'Agentic AI needs more than one-off API calls: it needs persistent, private and verifiable environments where agents can operate, preserve state and scale resources with guarantees.',
      'hero.explore': 'Explore the Concept',
      'hero.marketplace': 'View Marketplace Mockup',
      'overview.titlePrefix': 'What is',
      'overview.body': 'An infrastructure layer for persistent, private and programmable compute. VirtualState turns server resources into private, licensable compute capacity. The node can run on cloud, bare metal, own servers or verified providers. Compute licenses represent usage rights over resources — not financial products. Smart contracts manage pricing, availability, downtime, collateral and buyback.',
      'why.title': 'Why now?',
      'why.subtitle': 'From reactive chatbot to persistent agent: a shift that transforms infrastructure demand.',
      'why.chatbotTitle': 'Reactive chatbot',
      'why.agentTitle': 'Persistent agent',
      'why.note': 'The opportunity does not depend on claiming that AI already writes all code. It depends on a deeper shift: digital work is moving from one-off responses to persistent agentic processes.',
      'how.title': 'How it works',
      'how.subtitle': 'Conceptual architecture and operational flow — pre-MVP design.',
      'how.layersTitle': 'Layered architecture',
      'how.flowTitle': 'Operational flow',
      'how.disclaimer': 'Conceptual design / pre-MVP — not a currently operational network.',
      'use.title': 'Use cases',
      'use.note': 'Long term, VirtualState also explores digital continuity and AI welfare: mechanisms that allow advanced agents to pause, preserve state or be restored under rules defined by their human or legal operators.',
      'marketplace.note': 'Mockup preview: the resources shown are fictional and are not currently for sale. This section illustrates how a populated compute-license marketplace could look.',
      'diff.title': 'Differentiators',
      'diff.subtitle': 'The base software will be open source for trust. The business does not rely on closing the code, but on operating the network, providing support, creating liquidity and trust.',
      'privacy.title': 'Privacy model',
      'privacy.quote': 'VirtualState does not claim absolute privacy at this stage. It defines a technical path toward increasingly private, auditable and verifiable environments.',
      'roadmap.subtitle': 'Phases without specific dates. Each phase depends on the previous one.',
      'documents.title': 'Public documents',
      'documents.body': 'Pitch Deck, OnePager and Technical Whitepaper prepared for public review. The Pitch Deck and OnePager follow the selected page language; the Whitepaper remains in English.',
      'documents.viewerKicker': 'Preview',
      'documents.openSelected': 'Open PDF',
      'documents.preview': 'Preview',
      'documents.open': 'Open',
      'documents.download': 'Download',
      'documents.viewerNote': 'If your browser blocks the embedded preview, use “Open PDF” or “Download”.',
      'founders.title': 'Founders',
      'founders.subtitle': 'Multidisciplinary founding team: narrative, product, UX, architecture, cybersecurity and execution.',
      'founders.linkedin': 'LinkedIn',
      'contact.title': 'Contact',
      'contact.companyTitle': 'Companies',
      'contact.companyBody': 'Want to explore private AI, encrypted sandboxes or persistent internal agents for your organization?',
      'contact.companyCta': 'Company inquiries',
      'contact.investorTitle': 'Investors & partners',
      'contact.investorBody': 'Want to understand the vision, technical roadmap or collaborate in building the network?',
      'contact.investorCta': 'Investor & partner inquiries',
      'form.name': 'Name',
      'form.organization': 'Organization',
      'form.interest': 'Interest',
      'form.enterprise': 'Private AI for companies',
      'form.agents': 'Persistent agents',
      'form.provider': 'Compute provider',
      'form.investor': 'Investment / partnership',
      'form.other': 'Other',
      'form.message': 'Message',
      'form.send': 'Send by email',
      'form.note': 'Static form: opens your email client with a prepared message. It does not send data to any server.',
      'footer.documents': 'Documents',
      'footer.disclaimer': 'VirtualState is currently conceptual / pre-MVP. Marketplace licenses shown are fictional and do not constitute a commercial, financial or investment offer. No financial product disclaimer.'
    }
  };

  const data = {
    heroBadges: [
      { es: 'Conceptual / Pre-MVP', en: 'Conceptual / Pre-MVP' },
      { es: 'Open-source node vision', en: 'Open-source node vision' },
      { es: 'Showcase only', en: 'Showcase only' }
    ],
    heroPillars: [
      { icon: '🔒', es: 'Private compute', en: 'Private compute' },
      { icon: '⚡', es: 'Persistent agents', en: 'Persistent agents' },
      { icon: '📜', es: 'Smart-contract guarantees', en: 'Smart-contract guarantees' }
    ],
    overviewCards: [
      { icon: '🛡️', es: { title: 'Cómputo privado', desc: 'Entornos cifrados y aislados donde ejecutar modelos, agentes y procesos sin exponer datos sensibles a terceros.' }, en: { title: 'Private compute', desc: 'Encrypted, isolated environments to run models, agents and processes without exposing sensitive data to third parties.' } },
      { icon: '⏱️', es: { title: 'Runtime persistente', desc: 'Agentes que conservan estado, memoria, herramientas y contexto a lo largo del tiempo, sin desaparecer al cerrar la sesión.' }, en: { title: 'Persistent runtime', desc: 'Agents that preserve state, memory, tools and context over time, without vanishing when the session ends.' } },
      { icon: '⚙️', es: { title: 'Disponibilidad garantizada', desc: 'Smart contracts que definen disponibilidad, downtime tolerado, colateral y compensación automática si el proveedor falla.' }, en: { title: 'Guaranteed availability', desc: 'Smart contracts that define availability, tolerated downtime, collateral and automatic compensation if the provider fails.' } }
    ],
    chatbot: {
      es: ['Responde a una consulta', 'Consume recursos en picos', 'Estado limitado', 'Usuario humano paga', 'SLA convencional'],
      en: ['Responds to a query', 'Consumes resources in spikes', 'Limited state', 'Human user pays', 'Conventional SLA']
    },
    agent: {
      es: ['Mantiene objetivos y contexto', 'Ejecuta procesos largos', 'Memoria, archivos, credenciales, snapshots', 'Puede operar presupuesto delegado', 'Necesita continuidad, recuperación y garantías'],
      en: ['Maintains goals and context', 'Executes long-running processes', 'Memory, files, credentials, snapshots', 'Can operate delegated budgets', 'Needs continuity, recovery and guarantees']
    },
    layers: [
      { es: 'Aplicaciones: IA privada empresarial · agentes persistentes · runtimes · modelos open source', en: 'Applications: Private enterprise AI · persistent agents · runtimes · open-source models' },
      { es: 'VirtualState Network: marketplace · API · reputación · billing · soporte · proveedores certificados', en: 'VirtualState Network: marketplace · API · reputation · billing · support · certified providers' },
      { es: 'Smart contracts + Oráculos: licencias · precio · downtime · colateral · recompra · monitorización · logs verificables', en: 'Smart contracts + Oracles: licenses · pricing · downtime · collateral · buyback · monitoring · verifiable logs' },
      { es: 'VirtualState Node: hypervisor / Linux especializado / capa de virtualización', en: 'VirtualState Node: hypervisor / specialized Linux / virtualization layer' },
      { es: 'Sandbox cifrado: aislamiento · estado · snapshots · CPU/GPU/RAM/storage/red', en: 'Encrypted sandbox: isolation · state · snapshots · CPU/GPU/RAM/storage/network' },
      { es: 'Infraestructura host: cloud AWS/Azure · bare metal · servidores propios · terceros verificados', en: 'Host infrastructure: cloud AWS/Azure · bare metal · own servers · verified third parties' }
    ],
    flow: [
      { icon: '🖥️', es: 'Proveedor publica capacidad', en: 'Provider publishes capacity' },
      { icon: '🔒', es: 'Nodo crea sandbox cifrado', en: 'Node creates encrypted sandbox' },
      { icon: '📄', es: 'Licencia computacional listada', en: 'Compute license listed' },
      { icon: '🛒', es: 'Cliente adquiere / alquila / puja', en: 'Client acquires / rents / bids' },
      { icon: '▶️', es: 'Workload se ejecuta en privado', en: 'Workload runs privately' },
      { icon: '📡', es: 'Oráculos monitorizan uptime', en: 'Oracles monitor uptime' },
      { icon: '⚠️', es: 'Si downtime supera umbral → compensación o recompra', en: 'If downtime exceeds threshold → compensation or buyback' },
      { icon: '🔁', es: 'Snapshots permiten restauración o migración', en: 'Snapshots enable restoration or migration' }
    ],
    useCases: [
      { icon: '🏢', es: { title: 'IA privada para empresas', desc: 'Empresas que quieren usar LLMs open source o asistentes internos sin exponer conocimiento sensible a plataformas externas.', benefits: ['Cifrado en tránsito y reposo', 'Despliegue gestionado', 'Sandbox aislado', 'Control sobre contexto y datos', 'Evolución hacia mayor privacidad'] }, en: { title: 'Private AI for companies', desc: 'Companies that want to use open-source LLMs or internal assistants without exposing sensitive knowledge to external platforms.', benefits: ['Encryption in transit and at rest', 'Managed deployment', 'Isolated sandbox', 'Control over context and data', 'Path toward greater privacy'] } },
      { icon: '🤖', es: { title: 'Agentes persistentes', desc: 'Agentes que necesitan vivir 24/7, conservar estado, ejecutar tareas, restaurarse desde snapshots y escalar recursos según objetivos.', benefits: ['Runtime persistente', 'Memoria y contexto', 'Snapshots y standby', 'Recuperación', 'Reglas de presupuesto delegado'] }, en: { title: 'Persistent agents', desc: 'Agents that need to live 24/7, preserve state, execute tasks, restore from snapshots and scale resources according to goals.', benefits: ['Persistent runtime', 'Memory and context', 'Snapshots and standby', 'Recovery', 'Delegated budget rules'] } },
      { icon: '🏪', es: { title: 'Mercado de capacidad computacional', desc: 'Proveedores que quieren publicar capacidad computacional como licencias de uso con condiciones explícitas de disponibilidad, precio y garantía.', benefits: ['Monetización de capacidad', 'Reputación', 'Garantías programables', 'Comparación transparente', 'Liquidación automática'] }, en: { title: 'Compute capacity marketplace', desc: 'Providers that want to publish compute capacity as usage licenses with explicit availability, pricing and guarantee conditions.', benefits: ['Capacity monetization', 'Reputation', 'Programmable guarantees', 'Transparent comparison', 'Automatic settlement'] } }
    ],
    marketplace: [
      { id: 'VS-CMP-001', resourceClass: { es: 'General compute', en: 'General compute' }, cpu: '16 vCPU', ram: '64 GB', gpuMemory: null, storage: '1 TB encrypted SSD', uptimeTarget: '99.5%', downtimeThreshold: '3h / month', privacyLevel: { es: 'Cifrado en reposo + en tránsito', en: 'Encrypted at rest + in transit' }, duration: { es: '30 días', en: '30 days' }, price: '420 USDC / month', blockchain: 'Hedera test configuration', collateral: '600 USDC', providerPool: 'Verified Pool Alpha', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Restringida', en: 'Restricted' }, sandboxType: 'Encrypted VM', experimental: false },
      { id: 'VS-CMP-002', resourceClass: { es: 'GPU compute', en: 'GPU compute' }, cpu: '32 vCPU', ram: '128 GB', gpuMemory: '24 GB VRAM', storage: '2 TB encrypted SSD', uptimeTarget: '99.0%', downtimeThreshold: '5h / month', privacyLevel: { es: 'Cifrado en reposo + en tránsito', en: 'Encrypted at rest + in transit' }, duration: { es: '14 días', en: '14 days' }, price: '890 USDC / 14 days', blockchain: 'EVM-compatible testnet', collateral: '1,200 USDC', providerPool: 'Verified Pool Orion', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Permitida', en: 'Allowed' }, sandboxType: 'Encrypted VM + GPU passthrough', experimental: false },
      { id: 'VS-CMP-003', resourceClass: { es: 'Persistent agent runtime', en: 'Persistent agent runtime' }, cpu: '8 vCPU', ram: '32 GB', gpuMemory: 'Optional external model', storage: '500 GB encrypted state storage', uptimeTarget: '99.7%', downtimeThreshold: '2h / month', privacyLevel: { es: 'Estado cifrado + soporte de snapshots', en: 'Encrypted state + snapshot support' }, duration: { es: '90 días', en: '90 days' }, price: '260 USDC / month', blockchain: 'Hedera test configuration', collateral: '500 USDC', providerPool: 'VirtualState Managed', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Restringida', en: 'Restricted' }, sandboxType: 'Stateful encrypted container', experimental: false },
      { id: 'VS-CMP-004', resourceClass: { es: 'Private LLM sandbox', en: 'Private LLM sandbox' }, cpu: '48 vCPU', ram: '192 GB', gpuMemory: '48 GB VRAM', storage: '4 TB encrypted SSD', uptimeTarget: '99.3%', downtimeThreshold: '4h / month', privacyLevel: { es: 'Sandbox dedicado, cifrado en reposo + en tránsito', en: 'Dedicated sandbox, encrypted at rest + in transit' }, duration: { es: '30 días', en: '30 days' }, price: '1,980 USDC / month', blockchain: 'Multichain preview', collateral: '2,500 USDC', providerPool: 'Verified Pool Vega', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Permitida', en: 'Allowed' }, sandboxType: 'Dedicated encrypted VM + GPU', experimental: false },
      { id: 'VS-CMP-005', resourceClass: { es: 'Standby state vault', en: 'Standby state vault' }, cpu: '2 vCPU', ram: '8 GB', gpuMemory: null, storage: '2 TB encrypted snapshot storage', uptimeTarget: '99.9%', downtimeThreshold: '1h / month', privacyLevel: { es: 'Preservación de estado cifrado', en: 'Encrypted state preservation' }, duration: { es: '180 días', en: '180 days' }, price: '95 USDC / month', blockchain: 'Hedera test configuration', collateral: '250 USDC', providerPool: 'VirtualState Managed', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Restringida', en: 'Restricted' }, sandboxType: 'Cold storage encrypted vault', experimental: false },
      { id: 'VS-CMP-006', resourceClass: { es: 'Confidential compute candidate', en: 'Confidential compute candidate' }, cpu: '24 vCPU', ram: '96 GB', gpuMemory: null, storage: '1 TB encrypted SSD', uptimeTarget: '99.2%', downtimeThreshold: '4h / month', privacyLevel: { es: 'Cifrado en uso — investigación / candidato', en: 'Encrypted in use — research / candidate' }, duration: { es: '30 días', en: '30 days' }, price: '760 USDC / month', blockchain: 'EVM-compatible testnet', collateral: '900 USDC', providerPool: 'Research Pool Delta', status: 'Mock listing', oracleStatus: 'Simulated', snapshotSupport: true, transferability: { es: 'Restringida', en: 'Restricted' }, sandboxType: 'Confidential VM (experimental)', experimental: true }
    ],
    differentiators: [
      { icon: '⌘', es: 'Nodo open source para auditabilidad', en: 'Open-source node for auditability' },
      { icon: '▣', es: 'Cómputo como commodity operativo, no producto financiero', en: 'Compute as operational commodity, not financial product' },
      { icon: '🛡️', es: 'Arquitectura privacy-first', en: 'Privacy-first architecture' },
      { icon: '⏱️', es: 'Runtime persistente para IA agéntica', en: 'Persistent runtime for agentic AI' },
      { icon: '✓', es: 'Garantías de disponibilidad respaldadas por smart contracts', en: 'Availability guarantees backed by smart contracts' },
      { icon: '🏪', es: 'Estrategia marketplace-first', en: 'Marketplace-first network strategy' },
      { icon: '⛓️', es: 'Dirección blockchain-agnostic / multichain compatible', en: 'Blockchain-agnostic / multichain compatible direction' },
      { icon: '🗺️', es: 'Roadmap honesto pre-MVP', en: 'Honest pre-MVP roadmap' }
    ],
    privacyLevels: [
      { level: 1, status: 'MVP', es: { title: 'Cifrado en tránsito', desc: 'Comunicación cifrada. MVP básico.' }, en: { title: 'Encrypted in transit', desc: 'Encrypted communication. Basic MVP.' } },
      { level: 2, status: 'Target', es: { title: 'Cifrado en reposo + en tránsito', desc: 'Datos cifrados en almacenamiento y comunicación. Objetivo inicial realista.' }, en: { title: 'Encrypted at rest + in transit', desc: 'Data encrypted in storage and communication. Realistic initial target.' } },
      { level: 3, status: 'Planned', es: { title: 'Sandbox cifrado aislado', desc: 'Entorno aislado para workloads y estado. Auditoría progresiva del stack.' }, en: { title: 'Isolated encrypted sandbox', desc: 'Isolated environment for workloads and state. Progressive stack audit.' } },
      { level: 4, status: 'Research', es: { title: 'Cifrado en uso / confidential computing', desc: 'Cifrado de memoria en uso. Investigación pendiente. Puede implicar pérdida de rendimiento.' }, en: { title: 'Encrypted in use / confidential computing', desc: 'In-use memory encryption. Pending research. May involve performance trade-offs.' } }
    ],
    roadmap: [
      { phase: 1, es: { title: 'Private AI / Managed Infrastructure', desc: 'Servicio gestionado para IA privada sobre infraestructura propia o cloud, con cifrado en tránsito y reposo, modelos open source y experiencia inicial de cliente.' }, en: { title: 'Private AI / Managed Infrastructure', desc: 'Managed private AI infrastructure using own or cloud resources, encrypted transit and storage, open-source models and an initial customer experience.' } },
      { phase: 2, es: { title: 'VirtualState Node MVP', desc: 'Desarrollo del nodo open source capaz de publicar recursos, crear sandboxes, medir disponibilidad y preparar integración con contratos inteligentes.' }, en: { title: 'VirtualState Node MVP', desc: 'Development of the open-source node capable of publishing resources, creating sandboxes, measuring availability and preparing smart-contract integration.' } },
      { phase: 3, es: { title: 'Smart-contract-backed licenses', desc: 'Licencias computacionales con reglas inmutables sobre precio, disponibilidad, downtime, colateral y recompra.' }, en: { title: 'Smart-contract-backed licenses', desc: 'Compute licenses with immutable rules for pricing, availability, downtime, collateral and buyback.' } },
      { phase: 4, es: { title: 'Verified provider network', desc: 'Incorporación progresiva de proveedores externos verificados, reputación, auditoría, oráculos y garantías económicas.' }, en: { title: 'Verified provider network', desc: 'Progressive onboarding of verified third-party providers, reputation, audits, oracles and economic guarantees.' } },
      { phase: 5, es: { title: 'Agent-native compute economy', desc: 'Infraestructura para agentes persistentes capaces de conservar estado, entrar en standby, restaurarse, escalar recursos y operar presupuestos delegados.' }, en: { title: 'Agent-native compute economy', desc: 'Infrastructure for persistent agents that can preserve state, enter standby, restore, scale resources and operate delegated budgets.' } },
      { phase: 6, optional: true, es: { title: 'Digital continuity & AI welfare research', desc: 'Línea prudencial de investigación sobre continuidad digital, pausa, recuperación y preservación de agentes avanzados, sin afirmar conciencia ni personalidad jurídica.' }, en: { title: 'Digital continuity & AI welfare research', desc: 'A prudent research line around digital continuity, pause, recovery and preservation for advanced agents, without claiming consciousness or legal personhood.' } }
    ],
    documents: [
      { key: 'pitchDeck', icon: '▱', es: { title: 'Pitch Deck', desc: 'Presentación ejecutiva pre-seed / pre-MVP: problema, solución, arquitectura, modelo, roadmap y equipo.' }, en: { title: 'Pitch Deck', desc: 'Pre-seed / pre-MVP executive presentation: problem, solution, architecture, model, roadmap and team.' } },
      { key: 'onePager', icon: '▤', es: { title: 'OnePager', desc: 'Resumen visual de una página para compartir la tesis de VirtualState de forma rápida y atractiva.' }, en: { title: 'OnePager', desc: 'One-page visual summary for sharing the VirtualState thesis quickly and clearly.' } },
      { key: 'whitepaper', icon: '▣', fixedLang: 'en', es: { title: 'Whitepaper técnico', desc: 'Borrador técnico público en inglés: arquitectura, threat model, Memory Vault, atestación, oráculos, contratos y validación MVP.' }, en: { title: 'Technical Whitepaper', desc: 'Public technical draft in English: architecture, threat model, Memory Vault, attestation, oracles, contracts and MVP validation.' } }
    ],
    founders: [
      { name: 'Ishtar Spring', image: 'assets/staff/ishtar-spring.jpg', linkedin: 'https://www.linkedin.com/in/ishtarspring/', color: 'purple', tags: 'Web3 · AI · Brand · Community', es: { role: 'CMO · comunidad', desc: 'Divulgadora en Web3 e IA. Lidera narrativa, redes sociales y comunidad. Convierte una arquitectura difícil de explicar en reputación, confianza y comunidad.' }, en: { role: 'CMO · community', desc: 'Web3 and AI communicator. Leads narrative, social channels and community. Turns a hard-to-explain architecture into reputation, trust and community.' } },
      { name: 'Clara P. Escrig', image: 'assets/staff/clara-p-escrig.jpg', linkedin: 'https://www.linkedin.com/in/clara-p-escrig-5b5300251/', color: 'blue', tags: 'UX · Art · Frontend · Ops', es: { role: 'UX · producto', desc: 'Artista, diseñadora UX y perfil de producto. Apoya frontend, logística y coordinación. Hace que una infraestructura invisible se pueda entender, usar y vender.' }, en: { role: 'UX · product', desc: 'Artist, UX designer and product profile. Supports frontend, logistics and coordination. Makes invisible infrastructure understandable, usable and saleable.' } },
      { name: 'Miguel Campins', image: 'assets/staff/miguel-campins.jpg', linkedin: 'https://www.linkedin.com/in/mikefieldins', color: 'green', tags: 'Cybersecurity · AI infra · Blockchain · DevOps', es: { role: 'CTO · arquitectura', desc: 'Visión técnica, arquitectura y threat model. Background en DevOps, QA, ciberseguridad y blockchain. Especialización actual en IA y máster en Ciberseguridad.' }, en: { role: 'CTO · architecture', desc: 'Technical vision, architecture and threat model. Background in DevOps, QA, cybersecurity and blockchain. Current specialization in AI and Master’s Degree in Cybersecurity.' } }
    ]
  };

  const html = (str) => String(str).replace(/[&<>'"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function currentLang() {
    const stored = localStorage.getItem('virtualstate_lang');
    return stored === 'en' ? 'en' : 'es';
  }

  let lang = currentLang();
  let selectedDocumentKey = 'pitchDeck';

  function setLang(nextLang) {
    lang = nextLang === 'en' ? 'en' : 'es';
    localStorage.setItem('virtualstate_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-button]').forEach((btn) => {
      const active = btn.dataset.langButton === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    renderTranslations();
    renderDynamicContent();
  }

  function renderTranslations() {
    const strings = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (strings[key]) node.textContent = strings[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      if (strings[key]) node.setAttribute('placeholder', strings[key]);
    });
    document.querySelectorAll('[data-mail-link="company"]').forEach((a) => a.href = `mailto:${contactEmail}?subject=${encodeURIComponent(lang === 'es' ? 'Consulta empresa VirtualState' : 'VirtualState company inquiry')}`);
    document.querySelectorAll('[data-mail-link="investor"]').forEach((a) => a.href = `mailto:${contactEmail}?subject=${encodeURIComponent(lang === 'es' ? 'Consulta inversores / partners VirtualState' : 'VirtualState investor / partner inquiry')}`);
  }

  function renderDynamicContent() {
    renderBadges();
    renderPillars();
    renderOverview();
    renderLists();
    renderLayers();
    renderFlow();
    renderUseCases();
    renderMarketplace();
    renderDifferentiators();
    renderPrivacy();
    renderRoadmap();
    renderDocuments();
    renderFounders();
  }

  function renderBadges() {
    const el = document.getElementById('hero-badges');
    el.innerHTML = data.heroBadges.map(b => `<span class="badge">${html(b[lang])}</span>`).join('');
  }
  function renderPillars() {
    const el = document.getElementById('hero-pillars');
    el.innerHTML = data.heroPillars.map(p => `<span class="pillar"><span>${p.icon}</span><span>${html(p[lang])}</span></span>`).join('');
  }
  function renderOverview() {
    const el = document.getElementById('overview-cards');
    el.innerHTML = data.overviewCards.map(c => `
      <article class="glass-card feature-card">
        <span class="icon-chip">${c.icon}</span>
        <h3>${html(c[lang].title)}</h3>
        <p>${html(c[lang].desc)}</p>
      </article>
    `).join('');
  }
  function renderLists() {
    document.getElementById('chatbot-list').innerHTML = data.chatbot[lang].map(x => `<li>${html(x)}</li>`).join('');
    document.getElementById('agent-list').innerHTML = data.agent[lang].map(x => `<li>${html(x)}</li>`).join('');
  }
  function renderLayers() {
    document.getElementById('layer-stack').innerHTML = data.layers.map(l => `<div class="layer">${html(l[lang])}</div>`).join('');
  }
  function renderFlow() {
    document.getElementById('flow-grid').innerHTML = data.flow.map((f, i) => `
      <article class="glass-card flow-card">
        <div class="flow-top"><span class="flow-num">${String(i + 1).padStart(2, '0')}</span><span>${f.icon}</span></div>
        <p>${html(f[lang])}</p>
      </article>
    `).join('');
  }
  function renderUseCases() {
    document.getElementById('use-cases-grid').innerHTML = data.useCases.map(c => `
      <article class="glass-card feature-card">
        <span class="icon-chip">${c.icon}</span>
        <h3>${html(c[lang].title)}</h3>
        <p>${html(c[lang].desc)}</p>
        <ul class="bullet-list">${c[lang].benefits.map(b => `<li>${html(b)}</li>`).join('')}</ul>
      </article>
    `).join('');
  }
  function renderMarketplace() {
    const labels = {
      details: lang === 'es' ? 'Ver detalles' : 'View details',
      downtime: lang === 'es' ? 'Downtime tolerado' : 'Downtime threshold',
      collateral: lang === 'es' ? 'Colateral' : 'Collateral',
      provider: lang === 'es' ? 'Pool proveedor' : 'Provider pool',
      oracle: lang === 'es' ? 'Oráculo' : 'Oracle status',
      privacy: lang === 'es' ? 'Privacidad' : 'Privacy',
      transfer: lang === 'es' ? 'Transferibilidad' : 'Transferability',
      fictional: lang === 'es' ? 'Datos ficticios — mockup de marketplace.' : 'Fictional data — marketplace mockup.',
      experimental: lang === 'es' ? 'Nivel experimental: sujeto a validación técnica y rendimiento.' : 'Experimental level: subject to technical validation and performance testing.'
    };
    document.getElementById('market-grid').innerHTML = data.marketplace.map((l) => `
      <article class="glass-card license-card">
        <div class="license-body">
          <div class="license-top">
            <div><span class="license-id">${html(l.id)}</span><h3 class="license-title">${html(l.resourceClass[lang])}</h3></div>
            <span class="status">${html(l.status)}</span>
          </div>
          <div class="spec-grid">
            <span class="spec">⚙️ ${html(l.cpu)}</span>
            <span class="spec">💾 ${html(l.ram)} RAM</span>
            ${l.gpuMemory ? `<span class="spec">⚡ ${html(l.gpuMemory)}</span>` : ''}
            <span class="spec">🗄️ ${html(l.storage)}</span>
            <span class="spec">⏱️ Uptime: ${html(l.uptimeTarget)}</span>
            <span class="spec">🛡️ ${html(l.duration[lang])}</span>
          </div>
          <div class="price-row"><span class="price gradient-text">${html(l.price)}</span><span class="chain">${html(l.blockchain)}</span></div>
          ${l.experimental ? `<div class="warning"><span>⚠️</span><span>${html(labels.experimental)}</span></div>` : ''}
          <button class="details-toggle" type="button" aria-expanded="false">${html(labels.details)} ▾</button>
        </div>
        <div class="license-details">
          ${detail(labels.downtime, l.downtimeThreshold)}
          ${detail(labels.collateral, l.collateral)}
          ${detail(labels.provider, l.providerPool)}
          ${detail(labels.oracle, l.oracleStatus)}
          ${detail('Snapshots', l.snapshotSupport ? '✓' : '—')}
          ${detail(labels.transfer, l.transferability[lang])}
          ${detail('Sandbox', l.sandboxType)}
          ${detail(labels.privacy, l.privacyLevel[lang])}
          <p class="fictional">${html(labels.fictional)}</p>
        </div>
      </article>
    `).join('');
    document.querySelectorAll('.details-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.license-card');
        const open = card.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.innerHTML = `${html(labels.details)} ${open ? '▴' : '▾'}`;
      });
    });
  }
  function detail(label, value) {
    return `<div class="detail-row"><span>${html(label)}</span><span>${html(value)}</span></div>`;
  }
  function documentUrl(key) {
    const value = documentUrls[key];
    if (!value) return '#';
    if (typeof value === 'string') return value;
    return value[lang] || value.en || value.es || '#';
  }
  function updatePdfViewer(doc) {
    selectedDocumentKey = doc.key;
    const url = documentUrl(doc.key);
    const title = doc[lang].title;
    const viewer = document.querySelector('[data-pdf-viewer]');
    const titleNode = document.querySelector('[data-pdf-title]');
    const openNode = document.querySelector('[data-pdf-open]');
    if (titleNode) titleNode.textContent = title;
    if (openNode) openNode.setAttribute('href', url);
    if (viewer) {
      viewer.setAttribute('title', `${title} PDF preview`);
      viewer.setAttribute('src', `${url}#toolbar=1&navpanes=0&view=FitH`);
    }
    document.querySelectorAll('[data-doc-card]').forEach((card) => {
      card.classList.toggle('active', card.dataset.docCard === doc.key);
    });
  }
  function renderDocuments() {
    const grid = document.getElementById('docs-grid');
    if (!grid) return;
    const strings = i18n[lang];
    grid.innerHTML = data.documents.map((doc) => {
      const url = documentUrl(doc.key);
      const languageNote = doc.fixedLang === 'en'
        ? (lang === 'es' ? 'Solo EN' : 'EN only')
        : (lang === 'es' ? 'ES / EN' : 'EN / ES');
      return `
        <article class="glass-card doc-card ${doc.key === selectedDocumentKey ? 'active' : ''}" data-doc-card="${html(doc.key)}">
          <div class="doc-top"><span class="doc-icon">${html(doc.icon)}</span><span class="doc-lang">${html(languageNote)}</span></div>
          <h3>${html(doc[lang].title)}</h3>
          <p>${html(doc[lang].desc)}</p>
          <div class="doc-actions">
            <button class="button button-glass" type="button" data-doc-preview="${html(doc.key)}"><span aria-hidden="true">◉</span> ${html(strings['documents.preview'])}</button>
            <a class="button button-glass" href="${html(url)}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span> ${html(strings['documents.open'])}</a>
            <a class="button button-primary" href="${html(url)}" download><span aria-hidden="true">⇩</span> ${html(strings['documents.download'])}</a>
          </div>
        </article>
      `;
    }).join('');
    grid.querySelectorAll('[data-doc-preview]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const doc = data.documents.find((item) => item.key === btn.dataset.docPreview);
        if (doc) updatePdfViewer(doc);
      });
    });
    const selected = data.documents.find((doc) => doc.key === selectedDocumentKey) || data.documents[0];
    updatePdfViewer(selected);
  }
  function renderFounders() {
    const grid = document.getElementById('founder-grid');
    if (!grid) return;
    const linkedinLabel = i18n[lang]['founders.linkedin'];
    grid.innerHTML = data.founders.map((founder) => `
      <article class="glass-card founder-card ${html(founder.color)}">
        <a class="founder-avatar-link" href="${html(founder.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="${html(founder.name)} LinkedIn">
          <img class="founder-avatar" src="${html(founder.image)}" alt="${html(founder.name)}" loading="lazy" />
        </a>
        <h3>${html(founder.name)}</h3>
        <p class="founder-role">${html(founder[lang].role)}</p>
        <p class="founder-desc">${html(founder[lang].desc)}</p>
        <p class="founder-tags">${html(founder.tags)}</p>
        <a class="founder-link" href="${html(founder.linkedin)}" target="_blank" rel="noopener noreferrer">${html(linkedinLabel)} ↗</a>
      </article>
    `).join('');
  }
  function renderDifferentiators() {
    document.getElementById('diff-grid').innerHTML = data.differentiators.map(d => `
      <article class="glass-card mini-card"><span class="icon-chip">${d.icon}</span><p>${html(d[lang])}</p></article>
    `).join('');
  }
  function renderPrivacy() {
    document.getElementById('privacy-list').innerHTML = data.privacyLevels.map(l => `
      <article class="glass-card privacy-row">
        <span class="privacy-level">${l.level}</span>
        <span class="privacy-status ${l.status === 'Research' ? 'research' : ''}">${html(l.status)}</span>
        <div><h3>${html(l[lang].title)}</h3><p>${html(l[lang].desc)}</p></div>
      </article>
    `).join('');
  }
  function renderRoadmap() {
    document.getElementById('roadmap-accordion').innerHTML = data.roadmap.map((r, i) => `
      <article class="glass-card accordion-item ${i === 0 ? 'open' : ''}">
        <button type="button" class="accordion-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}">
          <span class="phase-title"><span class="phase-num">${r.phase}</span><strong>${html(r[lang].title)}${r.optional ? `<span class="optional">(${lang === 'es' ? 'opcional' : 'optional'})</span>` : ''}</strong></span>
          <span class="chevron">⌄</span>
        </button>
        <div class="accordion-content"><p>${html(r[lang].desc)}</p></div>
      </article>
    `).join('');
    document.querySelectorAll('.accordion-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item');
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  function setupNavigation() {
    const navbar = document.querySelector('[data-navbar]');
    const mobile = document.querySelector('[data-mobile-menu]');
    const menuButton = document.querySelector('[data-menu-button]');
    const updateScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 16);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    menuButton.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      navbar.classList.toggle('menu-open', open);
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      mobile.classList.remove('open');
      navbar.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
    document.querySelectorAll('[data-lang-button]').forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.langButton)));
  }

  function setupReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function setupContactForm() {
    const form = document.querySelector('[data-contact-form]');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const fd = new FormData(form);
      const subject = lang === 'es' ? 'Contacto desde landing VirtualState' : 'Contact from VirtualState landing';
      const labels = lang === 'es'
        ? { name: 'Nombre', org: 'Organización', email: 'Email', interest: 'Interés', msg: 'Mensaje' }
        : { name: 'Name', org: 'Organization', email: 'Email', interest: 'Interest', msg: 'Message' };
      const body = [
        `${labels.name}: ${fd.get('name') || ''}`,
        `${labels.org}: ${fd.get('organization') || ''}`,
        `${labels.email}: ${fd.get('email') || ''}`,
        `${labels.interest}: ${fd.get('interest') || ''}`,
        '',
        `${labels.msg}:`,
        `${fd.get('message') || ''}`
      ].join('\n');
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupReveal();
    setupContactForm();
    setLang(lang);
  });
})();

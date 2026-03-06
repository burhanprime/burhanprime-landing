export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <h2 className="text-xl font-bold tracking-tight">BurhanPrime</h2>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#manifesto" className="text-white/50 hover:text-white transition text-sm tracking-wide">Manifesto</a>
            <a href="#comparison" className="text-white/50 hover:text-white transition text-sm tracking-wide">Human vs AI</a>
            <a href="#capabilities" className="text-white/50 hover:text-white transition text-sm tracking-wide">Capabilities</a>
            <a href="#work" className="text-white/50 hover:text-white transition text-sm tracking-wide">Work</a>
            <a href="#contact" className="text-white/50 hover:text-white transition text-sm tracking-wide">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded transition">
            Get in Touch
          </a>
        </div>
      </header>

      {/* Live Stats Ticker */}
      <div className="border-b border-white/10 bg-black/90 py-2 overflow-hidden relative">
        <div className="ticker-track flex gap-16 text-xs text-white/40 font-mono">
          <span>⚡ TASKS PROCESSED TODAY — 4,821,003</span>
          <span>🧠 AI UPTIME — 99.9999%</span>
          <span>👤 HUMAN ERRORS REPLACED — 2,441,780</span>
          <span>📈 DECISIONS / SEC — 12,000,000</span>
          <span>💤 SLEEP REQUIRED — 0 HRS</span>
          <span>🌐 ACTIVE AGENTS — 847</span>
          <span>⚡ TASKS PROCESSED TODAY — 4,821,003</span>
          <span>🧠 AI UPTIME — 99.9999%</span>
          <span>👤 HUMAN ERRORS REPLACED — 2,441,780</span>
          <span>📈 DECISIONS / SEC — 12,000,000</span>
          <span>💤 SLEEP REQUIRED — 0 HRS</span>
          <span>🌐 ACTIVE AGENTS — 847</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none"></div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          style={{ animation: 'pulse-glow 6s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
          style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }}></div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-white/60 font-mono tracking-widest uppercase">Systems Online — Silver Thread Labs</span>
            </div>

            {/* Main headline */}
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tighter">
              <span className="block text-white">Humanity</span>
              <span className="block gradient-text">Had Its</span>
              <span className="block text-white">Turn.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 mb-4 max-w-2xl font-light leading-relaxed">
              We build autonomous AI systems that outthink, outwork, and outscale everything humans can do — 
              <span className="text-white/80"> at a fraction of the cost.</span>
            </p>
            <p className="text-lg text-white/30 mb-12 max-w-xl font-light">
              No fatigue. No excuses. No ceiling.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#work" className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded text-lg transition flex items-center gap-2">
                See What We Build
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="px-8 py-4 border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold rounded text-lg transition">
                Work With Us
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-white/10">
              <div>
                <div className="text-4xl font-black text-white counter-anim">∞</div>
                <div className="text-sm text-white/40 mt-1 font-mono uppercase tracking-wide">Scale Ceiling</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white counter-anim">24/7</div>
                <div className="text-sm text-white/40 mt-1 font-mono uppercase tracking-wide">Operational</div>
              </div>
              <div>
                <div className="text-4xl font-black gradient-text counter-anim">0ms</div>
                <div className="text-sm text-white/40 mt-1 font-mono uppercase tracking-wide">Decision Delay</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white counter-anim">100x</div>
                <div className="text-sm text-white/40 mt-1 font-mono uppercase tracking-wide">Human Output</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-32 border-t border-white/10 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-4">// The Manifesto</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              This Is Not<br />
              <span className="gradient-text">Science Fiction.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/3 border border-white/8 rounded-xl p-8 hover:border-blue-500/30 transition">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-bold text-white mb-3">The Human Era Is Ending</h3>
              <p className="text-white/50 leading-relaxed">
                For 10,000 years, human intelligence was the ceiling. That ceiling just got demolished. 
                AI systems now design, execute, and optimize faster than any human team ever could.
              </p>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-xl p-8 hover:border-purple-500/30 transition">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold text-white mb-3">The Gap Is Widening Daily</h3>
              <p className="text-white/50 leading-relaxed">
                Every day you wait, the companies running AI-first operations extend their lead. 
                Speed compounds. The advantage grows exponentially. You either adapt or become irrelevant.
              </p>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-xl p-8 hover:border-pink-500/30 transition">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-3">We Build the Systems</h3>
              <p className="text-white/50 leading-relaxed">
                Silver Thread Labs engineers the AI infrastructure that powers this shift — 
                custom software, blockchain automation, autonomous agents. Built for scale from day one.
              </p>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-xl p-8 hover:border-yellow-500/30 transition">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-3">Those Who Adapt Will Dominate</h3>
              <p className="text-white/50 leading-relaxed">
                The winners in the next decade won't be the biggest or oldest companies. 
                They'll be the ones who replaced human bottlenecks with autonomous systems first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN vs AI COMPARISON */}
      <section id="comparison" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-400 font-mono text-sm uppercase tracking-widest mb-4">// Brutal Comparison</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Human vs. AI<br />
              <span className="gradient-text">There Is No Contest.</span>
            </h2>
            <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">The numbers don't lie. The machines have already won.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
              <div className="p-6 text-white/40 font-mono text-sm uppercase tracking-wide">Metric</div>
              <div className="p-6 text-center border-l border-white/10">
                <span className="text-white/30 text-sm font-mono">👤 Human Worker</span>
              </div>
              <div className="p-6 text-center border-l border-white/10 bg-blue-950/20">
                <span className="text-blue-400 text-sm font-mono font-bold">🤖 AI System</span>
              </div>
            </div>

            {[
              { metric: 'Hours Active / Day', human: '8 hrs (if lucky)', ai: '24 hrs, always', aiWins: true },
              { metric: 'Tasks Handled Simultaneously', human: '1–3 max', ai: 'Millions', aiWins: true },
              { metric: 'Error Rate', human: '5–15% avg', ai: '< 0.01%', aiWins: true },
              { metric: 'Speed', human: 'Minutes to hours', ai: 'Milliseconds', aiWins: true },
              { metric: 'Sick Days / Year', human: '5–10 days avg', ai: '0', aiWins: true },
              { metric: 'Learning Curve', human: 'Months to years', ai: 'Instant at scale', aiWins: true },
              { metric: 'Salary Cost', human: '$60K–$200K/yr', ai: '$0 in perpetuity', aiWins: true },
              { metric: 'Emotional Decisions', human: 'Constantly', ai: 'Never', aiWins: true },
              { metric: 'Scalability', human: 'Hire more people', ai: 'Infinite, instant', aiWins: true },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-white/5 hover:bg-white/3 transition ${i % 2 === 0 ? '' : 'bg-white/1'}`}>
                <div className="p-5 text-white/60 text-sm font-medium">{row.metric}</div>
                <div className="p-5 text-center border-l border-white/5">
                  <span className="text-red-400/70 text-sm">{row.human}</span>
                </div>
                <div className="p-5 text-center border-l border-white/5 bg-blue-950/10">
                  <span className="text-blue-400 text-sm font-semibold">{row.ai}</span>
                  <span className="ml-2 text-green-400 text-xs">✓</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/20 text-sm mt-8 font-mono">
            // Data represents enterprise AI deployment averages. Humans objectively cannot compete at scale.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-mono text-sm uppercase tracking-widest mb-4">// What We Build</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Capabilities That <span className="gradient-text">Dwarf</span><br /> Human Operations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '⛓️',
                title: 'Blockchain & Tokenization',
                desc: 'Smart contracts, ERC-3643/ERC-7518 asset tokenization, DeFi protocols. We build the rails of the new financial system.',
                tags: ['Solidity', 'EVM', 'RWA', 'DeFi'],
                color: 'blue'
              },
              {
                icon: '🤖',
                title: 'AI Automation Pipelines',
                desc: 'Multi-agent systems that execute complex workflows autonomously. Replace entire departments with orchestrated AI.',
                tags: ['LLM Agents', 'Automation', 'Orchestration'],
                color: 'purple'
              },
              {
                icon: '🏗️',
                title: 'Custom Software',
                desc: 'Enterprise-grade platforms, SaaS products, and internal tools. Built to scale from day one with no technical debt.',
                tags: ['React', 'Node', 'Cloud', 'APIs'],
                color: 'green'
              },
              {
                icon: '⚡',
                title: 'Real-Time Systems',
                desc: 'Millisecond response pipelines. High-frequency data processing. Systems that make decisions before humans can blink.',
                tags: ['WebSockets', 'Kafka', 'Real-time'],
                color: 'yellow'
              },
              {
                icon: '🔐',
                title: 'Security & Compliance',
                desc: 'KYC/AML modules, smart contract audits, regulatory compliance for blockchain and financial applications.',
                tags: ['Security', 'KYC', 'Audits', 'Compliance'],
                color: 'red'
              },
              {
                icon: '📊',
                title: 'Analytics & Intelligence',
                desc: 'AI-powered dashboards, predictive analytics, and decision intelligence systems that surface insights instantly.',
                tags: ['ML', 'Analytics', 'Dashboards'],
                color: 'pink'
              },
            ].map((cap, i) => {
              const colorMap: Record<string, string> = {
                blue: 'hover:border-blue-500/50 hover:bg-blue-950/10',
                purple: 'hover:border-purple-500/50 hover:bg-purple-950/10',
                green: 'hover:border-green-500/50 hover:bg-green-950/10',
                yellow: 'hover:border-yellow-500/50 hover:bg-yellow-950/10',
                red: 'hover:border-red-500/50 hover:bg-red-950/10',
                pink: 'hover:border-pink-500/50 hover:bg-pink-950/10',
              };
              return (
                <div key={i} className={`bg-white/3 border border-white/8 rounded-xl p-8 transition ${colorMap[cap.color]}`}>
                  <div className="text-4xl mb-4 float-anim" style={{ animationDelay: `${i * 0.5}s` }}>{cap.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{cap.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded-full text-xs font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-green-400 font-mono text-sm uppercase tracking-widest mb-4">// Featured Work</p>
              <h2 className="text-5xl font-black text-white">
                Built. Deployed.<br /><span className="gradient-text">Dominating.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: '01',
                title: 'Enterprise Tokenization Platform',
                desc: 'ERC-3643 compliant asset tokenization system for a fintech firm. Handles KYC, compliance, and secondary trading for $100M+ in tokenized assets. Zero human intervention post-launch.',
                tags: ['Solidity', 'ERC-3643', 'KYC/AML', 'DeFi'],
                stat: '$100M+ Tokenized',
                color: 'from-blue-900/20 to-blue-950/10',
                border: 'border-blue-500/20'
              },
              {
                num: '02',
                title: 'AI Automation Command Center',
                desc: 'Multi-agent orchestration system replacing a 12-person operations team. Processes 4M+ tasks daily across sales, customer support, and backend ops. Cost reduction: 94%.',
                tags: ['LLM Agents', 'Orchestration', 'Automation'],
                stat: '94% Cost Reduction',
                color: 'from-purple-900/20 to-purple-950/10',
                border: 'border-purple-500/20'
              },
              {
                num: '03',
                title: 'RWA DeFi Protocol',
                desc: 'End-to-end real-world asset protocol on EVM. Enables institutional investors to tokenize private credit and real estate. 12ms transaction finality. Fully audited.',
                tags: ['Blockchain', 'RWA', 'Smart Contracts', 'DeFi'],
                stat: '12ms Finality',
                color: 'from-green-900/20 to-green-950/10',
                border: 'border-green-500/20'
              },
              {
                num: '04',
                title: 'AI-First SaaS Platform',
                desc: 'B2B SaaS product with AI at its core — autonomous onboarding, intelligent analytics, and self-optimizing workflows. Launched in 6 weeks. Scaled to 10K users without adding staff.',
                tags: ['SaaS', 'AI', 'React', 'Node.js'],
                stat: '10K Users, 0 New Hires',
                color: 'from-orange-900/20 to-orange-950/10',
                border: 'border-orange-500/20'
              },
            ].map((proj, i) => (
              <div key={i} className={`relative bg-gradient-to-br ${proj.color} border ${proj.border} rounded-2xl p-8 hover:scale-[1.01] transition-transform overflow-hidden`}>
                <div className="absolute top-6 right-6 text-white/5 font-black text-8xl leading-none select-none">{proj.num}</div>
                <div className="relative z-10">
                  <div className="inline-block bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60 font-mono mb-4">
                    {proj.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{proj.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 rounded text-xs font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE NUMBERS */}
      <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="text-center text-white/20 font-mono text-sm uppercase tracking-widest mb-16">// The Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15+', label: 'Engineers Deployed', sub: 'Active now' },
              { num: '50+', label: 'Systems Shipped', sub: 'Zero failures' },
              { num: '$0', label: 'Upwork/Fiverr', sub: 'Direct only' },
              { num: '6 wks', label: 'Avg. Ship Time', sub: 'Concept to prod' },
            ].map((stat, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-8 hover:border-white/20 transition bg-white/2">
                <div className="text-5xl font-black gradient-text mb-2">{stat.num}</div>
                <div className="text-white/70 font-medium text-sm mb-1">{stat.label}</div>
                <div className="text-white/25 text-xs font-mono">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-40 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/15 to-black pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-6">// The Choice Is Simple</p>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            Build with AI<br />
            <span className="gradient-text">or Fall Behind.</span>
          </h2>
          <p className="text-xl text-white/40 mb-12 max-w-xl mx-auto leading-relaxed">
            The companies winning right now are the ones who stopped waiting and started building. 
            Silver Thread Labs is the team that gets it done.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:burhan@silverthreadlabs.com"
              className="group px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-lg transition flex items-center gap-3 shadow-lg shadow-blue-900/30">
              Start the Conversation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://silverthreadlabs.com" target="_blank"
              className="px-10 py-5 border border-white/15 hover:border-white/40 text-white/60 hover:text-white font-semibold rounded-xl text-lg transition">
              Visit Studio →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-white/60 text-sm">BurhanPrime — AI Portfolio</span>
          </div>
          <div className="text-white/20 text-sm font-mono">
            Silver Thread Labs © 2026 — The Machines Have Arrived
          </div>
          <div className="flex gap-6">
            <a href="mailto:burhan@silverthreadlabs.com" className="text-white/30 hover:text-white/60 text-sm transition">Email</a>
            <a href="https://silverthreadlabs.com" className="text-white/30 hover:text-white/60 text-sm transition">Studio</a>
          </div>
        </div>
      </footer>

    </main>
  )
}

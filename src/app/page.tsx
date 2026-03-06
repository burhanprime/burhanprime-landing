export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">BurhanPrime</h2>
          <nav className="flex gap-8">
            <a href="#work" className="text-gray-600 hover:text-black transition">Work</a>
            <a href="#capabilities" className="text-gray-600 hover:text-black transition">Capabilities</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-40"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">Portfolio</p>
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
              The Day of AI is Here
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-light">
              Autonomous systems that think, execute, and scale beyond human limits. 
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
                Explore Work
              </button>
              <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-black mb-16">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Project 1 */}
            <div className="border border-gray-300 rounded p-8 hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded mb-6 h-48 flex items-center justify-center">
                <span className="text-blue-600 text-6xl font-bold">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Enterprise Automation</h3>
              <p className="text-gray-700 mb-4">End-to-end AI systems handling complex workflows. 24/7 execution without human intervention.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">AI</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Automation</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Scale</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-300 rounded p-8 hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded mb-6 h-48 flex items-center justify-center">
                <span className="text-purple-600 text-6xl font-bold">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Intelligent Decision Making</h3>
              <p className="text-gray-700 mb-4">Real-time analysis and autonomous decision systems that optimize for speed and precision.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">AI</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Analytics</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Real-time</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray-300 rounded p-8 hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded mb-6 h-48 flex items-center justify-center">
                <span className="text-green-600 text-6xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">High-Speed Processing</h3>
              <p className="text-gray-700 mb-4">Process millions of tasks instantly. No latency. No delays. Pure velocity.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Performance</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Infrastructure</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Speed</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-gray-300 rounded p-8 hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded mb-6 h-48 flex items-center justify-center">
                <span className="text-orange-600 text-6xl font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Infinite Scalability</h3>
              <p className="text-gray-700 mb-4">Grow without boundaries. AI systems that scale effortlessly with demand.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Cloud</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Scalability</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-black mb-16">Why AI Wins</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Always On</h3>
              <p className="text-gray-700">No breaks. No fatigue. AI operates 24/7/365 without missing a beat.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Perfect Precision</h3>
              <p className="text-gray-700">Eliminates human error. Consistent output every single time.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Limitless Scale</h3>
              <p className="text-gray-700">Handle millions of operations simultaneously. No ceiling.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Instant Execution</h3>
              <p className="text-gray-700">Millisecond response times. Speed that humans can't match.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Cost Efficient</h3>
              <p className="text-gray-700">Dramatically lower operational costs. Better ROI.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-3">Autonomous</h3>
              <p className="text-gray-700">Requires minimal oversight. Adapts and improves continuously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready for the AI Era?</h2>
          <p className="text-xl text-gray-700 mb-8">Join us as we build the future. The time for AI is now.</p>
          <button className="px-10 py-4 bg-black text-white font-semibold rounded text-lg hover:bg-gray-800 transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-2">BurhanPrime — AI Portfolio</p>
          <p className="text-sm">Silver Thread Labs © 2026</p>
        </div>
      </footer>
    </main>
  )
}

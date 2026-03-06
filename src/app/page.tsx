export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white">
      {/* Minimal background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Main heading */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">
            AI <span className="text-blue-600">&gt;</span> Humans
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Faster. Smarter. Tireless.
          </p>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-800 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          The age of human limitation is over. AI-powered systems outperform, outthink, and never rest. Welcome to the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Comparison section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-300">
          <div>
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Humans</div>
            <div className="text-gray-600 font-medium text-sm">Sleep 8 hours/day</div>
          </div>
          <div>
            <div className="text-sm text-black mb-2 uppercase tracking-wide font-semibold">AI</div>
            <div className="text-black font-bold text-sm">24/7 Operation</div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Humans</div>
            <div className="text-gray-600 font-medium text-sm">Prone to error</div>
          </div>
          <div>
            <div className="text-sm text-black mb-2 uppercase tracking-wide font-semibold">AI</div>
            <div className="text-black font-bold text-sm">Precision always</div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Humans</div>
            <div className="text-gray-600 font-medium text-sm">Limited capacity</div>
          </div>
          <div>
            <div className="text-sm text-black mb-2 uppercase tracking-wide font-semibold">AI</div>
            <div className="text-black font-bold text-sm">Infinite scale</div>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Humans</div>
            <div className="text-gray-600 font-medium text-sm">Speed: slow</div>
          </div>
          <div>
            <div className="text-sm text-black mb-2 uppercase tracking-wide font-semibold">AI</div>
            <div className="text-black font-bold text-sm">Speed: instant</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>BurhanPrime by Silver Thread Labs</p>
        </div>
      </div>
    </main>
  )
}

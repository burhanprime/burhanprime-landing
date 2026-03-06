export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-lg">
            BURHAN
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 ml-4">
              PRIME
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          The barrier is breaking. Full automation. Infinite scale. The future is running now.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
            See What's Coming
          </button>
          <button className="px-8 py-4 border-2 border-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition">
            Get Notified
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Tireless Operation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-400 text-sm">Infinite Scale</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">⚡</div>
            <div className="text-gray-400 text-sm">Lightning Fast</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm">
          <p>Silverthread Labs • Powered by Vision and Fire</p>
        </div>
      </div>
    </main>
  )
}

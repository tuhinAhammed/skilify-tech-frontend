import React, { useState } from 'react'

const HowItworkCard = ({item}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
      <main className=" p-4">
      <div
        className={`relative w-96 h-72 rounded-2xl p-8 transition-all duration-500 ease-out cursor-pointer overflow-hidden ${
          isHovered
            ? 'bg-gradient-to-br from-amber-900/50 to-slate-800'
            : 'bg-gradient-to-br from-slate-700 to-slate-800'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background accent layer */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-amber-800/0 to-amber-700/0 transition-all duration-500 ${
            isHovered ? 'from-amber-800/20 to-amber-700/10' : ''
          }`}
        />

        {/* Card number badge */}
        <div className="absolute top-6 right-6 z-20">
          <div className="w-12 h-12 rounded-full border-2 border-slate-500 flex items-center justify-center text-white font-semibold text-lg">
            01
          </div>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title */}
          <h2 className="text-white text-2xl font-bold mb-8">{item.title}</h2>

          {/* Menu items */}
          <div className="flex flex-col gap-3 flex-1">
            {item.items.map(
              (item, index) => (
                <button
                  key={index}
                  className="px-6 py-2 rounded-full border-2 border-amber-700/60 text-amber-100 text-sm font-medium hover:bg-amber-700/20 transition-colors duration-300"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Rotating image container */}
        <div
          className={`absolute bottom-6 right-8 w-32 h-32 transition-transform duration-500 ${
            isHovered ? 'rotate-360' : ''
          }`}
          style={{
            animation: isHovered
              ? 'spin 3s linear infinite'
              : 'none',
          }}
        >
          <img
            src="/Shape-1.png"
            alt="Project Planning Tools"
            width={128}
            height={128}
            className="object-contain filter drop-shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  )
}

export default HowItworkCard
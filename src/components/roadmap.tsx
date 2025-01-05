import { ArrowRight } from 'lucide-react';

export default function Roadmap() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">Internship Roadmap</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl p-8 w-full md:w-1/2 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Self-paced Training</h3>
          <div className="space-y-2 text-white text-sm">
            <p className="font-semibold">Key Features:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Foundational Skill Building</li>
              <li>Live Doubt-Solving Sessions (Weekends)</li>
            </ul>
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="hidden md:block w-12 h-12 text-white" />

        {/* Real-time Projects Card */}
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-8 w-full md:w-1/2 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Real-time Projects</h3>
          <div className="space-y-2 text-white text-sm">
            <p className="font-semibold">Key Features:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Industry-Relevant Projects</li>
              <li>Project-Oriented Sessions (Weekends)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

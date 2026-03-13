import React from 'react';
import { ChevronLeft, Clock, Award, CheckCircle, AlertCircle } from 'lucide-react';

interface QuizDetailScreenProps {
  taskId: number;
  onBack: () => void;
}

export const QuizDetailScreen: React.FC<QuizDetailScreenProps> = ({ taskId, onBack }) => {
  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Quiz Details</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-orange-100">
          <Award size={40} />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">Operating Systems Mid-Term Quiz</h2>
        <p className="text-gray-500 font-bold uppercase tracking-wider text-xs mb-10">Computer Science • Prof. Johnson</p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Clock size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Duration</span>
            </div>
            <p className="text-xl font-bold text-gray-900 tracking-tight">45 Mins</p>
          </div>
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <CheckCircle size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Questions</span>
            </div>
            <p className="text-xl font-bold text-gray-900 tracking-tight">30 MCQs</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-[32px] border border-gray-100 mb-10 shadow-inner">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={18} className="text-orange-500" />
            <h3 className="font-bold text-gray-900 tracking-tight">Instructions</h3>
          </div>
          <ul className="space-y-3">
            {[
              'Ensure you have a stable internet connection.',
              'Once started, the timer cannot be paused.',
              'You cannot switch tabs during the quiz.'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                <span className="text-sm text-gray-600 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all">
            Start Quiz Now
          </button>
        </div>
      </div>
    </div>
  );
};

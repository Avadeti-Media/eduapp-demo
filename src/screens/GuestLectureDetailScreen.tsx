import React from 'react';
import { ChevronLeft, Calendar, User, Video, Users } from 'lucide-react';

interface GuestLectureDetailScreenProps {
  lectureId: number;
  onBack: () => void;
}

export const GuestLectureDetailScreen: React.FC<GuestLectureDetailScreenProps> = ({ lectureId, onBack }) => {
  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Guest Lecture</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        <div className="w-full aspect-video bg-gray-900 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center shadow-xl shadow-gray-200">
          <img src="https://picsum.photos/seed/lecture/800/450" alt="Lecture Cover" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-10 cursor-pointer hover:bg-white/30 transition-all hover:scale-110 active:scale-95 border border-white/30">
            <Video size={32} className="ml-1" />
          </div>
          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <p className="text-[10px] font-bold text-white uppercase tracking-widest">Live in 2 days</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">Future of Quantum Computing</h2>
        
        <div className="flex items-center gap-4 mb-8 p-5 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm shrink-0">
            <img src="https://picsum.photos/seed/turing/100/100" alt="Speaker" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-gray-900 tracking-tight text-lg">Dr. Alan Turing</p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Chief Scientist, Quantum Labs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="flex items-center gap-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
              <Calendar size={20} />
            </div>
            <span className="font-bold text-sm text-gray-700 tracking-tight">October 15, 2024 • 10:00 AM</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
              <Users size={20} />
            </div>
            <span className="font-bold text-sm text-gray-700 tracking-tight">245 Students Registered</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">About this session</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            Join us for an exclusive session on the future of quantum computing. Dr. Turing will discuss recent breakthroughs in qubit stability, error correction, and what this means for cryptography and complex system simulations in the next decade.
          </p>
        </div>

        <div className="mt-auto">
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
            Join Live Session
          </button>
        </div>
      </div>
    </div>
  );
};

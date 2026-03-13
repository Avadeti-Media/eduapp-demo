import React from 'react';
import { Calendar, User, Video } from 'lucide-react';

interface LectureCardProps {
  lecture: {
    id: number;
    topic: string;
    speaker: string;
    date: string;
  };
}

export const GuestLectureCard: React.FC<LectureCardProps> = ({ lecture }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-5 rounded-3xl shadow-md text-white mb-4 relative overflow-hidden">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg leading-tight w-3/4">{lecture.topic}</h3>
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
            <Video size={20} className="text-white" />
          </div>
        </div>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm text-indigo-100 font-medium">
            <User size={16} />
            <span>{lecture.speaker}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-indigo-100 font-medium">
            <Calendar size={16} />
            <span>{lecture.date}</span>
          </div>
        </div>
        
        <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl shadow-sm hover:bg-indigo-50 transition-colors active:scale-[0.98]">
          Join Lecture
        </button>
      </div>
    </div>
  );
};

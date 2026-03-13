import React from 'react';
import { ChevronLeft, PlayCircle, FileText, Download, MessageSquare } from 'lucide-react';

interface CourseDetailScreenProps {
  courseId: number;
  onBack: () => void;
}

export const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ courseId, onBack }) => {
  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Course Details</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Data Structures & Algorithms</h2>
          <p className="text-gray-500 font-medium">Dr. Smith • Computer Science</p>
          
          <div className="mt-8 bg-gray-50 p-5 rounded-3xl border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-gray-700 tracking-tight">Course Progress</span>
              <span className="text-sm font-bold text-indigo-600 tracking-tight">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 shadow-inner">
              <div className="bg-indigo-600 h-2.5 rounded-full shadow-sm" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Current Module</h3>
            <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-3xl border border-indigo-100 flex items-start gap-4 shadow-sm">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                <PlayCircle size={28} />
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 tracking-tight text-lg">Trees and Graphs</h4>
                <p className="text-sm text-indigo-700 mt-1 font-medium">Lecture 12 • 45 mins</p>
                <button className="mt-4 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-200 active:scale-95 transition-all hover:bg-indigo-700">
                  Resume Lecture
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Course Materials</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 shadow-sm shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-[15px] text-gray-900 tracking-tight">Chapter {i} Notes.pdf</p>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">2.4 MB • Oct {10 + i}, 2024</p>
                    </div>
                  </div>
                  <button className="p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

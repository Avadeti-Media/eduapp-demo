import React, { useState } from 'react';
import { ChevronLeft, Upload, MessageSquare, FileText, Send, Sparkles } from 'lucide-react';

interface AssignmentDetailScreenProps {
  taskId: number;
  onBack: () => void;
}

export const AssignmentDetailScreen: React.FC<AssignmentDetailScreenProps> = ({ taskId, onBack }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Assignment</h1>
        </div>
        <button 
          onClick={() => setShowChat(!showChat)}
          className={`p-2.5 rounded-full transition-all active:scale-90 ${showChat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          <MessageSquare size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        {showChat ? (
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-6 mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-indigo-100">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div className="bg-gray-50 p-4 rounded-3xl rounded-tl-none text-sm text-gray-800 border border-gray-100 shadow-sm font-medium leading-relaxed">
                  Hi! I'm your AI assistant. Do you have any doubts about the Computer Networks assignment?
                </div>
              </div>
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 shadow-md shadow-emerald-100">
                  <span className="text-xs font-bold text-white uppercase tracking-widest">ME</span>
                </div>
                <div className="bg-indigo-600 p-4 rounded-3xl rounded-tr-none text-sm text-white shadow-lg shadow-indigo-100 font-medium leading-relaxed">
                  Yes, for question 2, do we need to implement the OSI model in code?
                </div>
              </div>
            </div>
            <div className="mt-auto flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 shadow-inner">
              <input type="text" placeholder="Ask a doubt..." className="flex-1 bg-transparent px-4 py-2 outline-none text-sm font-medium" />
              <button className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-md shadow-indigo-200 active:scale-95 transition-all hover:bg-indigo-700">
                <Send size={18} />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest border border-red-100 shadow-sm">Due Today, 11:59 PM</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">Network Topologies Analysis</h2>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">Computer Networks • Dr. Williams</p>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-[32px] border border-gray-100 shadow-inner">
                <div className="prose prose-sm text-gray-600 font-medium leading-relaxed">
                  <p className="mb-4">Please write a comprehensive analysis of different network topologies including Star, Ring, Mesh, and Bus.</p>
                  <p className="mb-2 font-bold text-gray-900">Your submission should include:</p>
                  <ul className="list-none pl-0 space-y-2">
                    {['Pros and cons of each topology', 'Real-world use cases', 'Cost analysis for implementation'].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Reference Material</h3>
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-blue-500 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-gray-900 tracking-tight">Assignment_Guidelines.pdf</p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">1.2 MB • PDF</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">Your Submission</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-10 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 hover:border-indigo-300 transition-all cursor-pointer group">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-md flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <Upload size={32} />
                </div>
                <p className="font-bold text-gray-900 mb-1 tracking-tight text-lg">Upload your work</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">PDF, DOCX, or ZIP up to 50MB</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { User, BookOpen, GraduationCap, Building, ChevronRight, Check } from 'lucide-react';
import { Role } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

interface OnboardingScreenProps {
  onComplete: (role: Role) => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>('Student');
  const [name, setName] = useState('');
  const [stream, setStream] = useState('');
  const [semester, setSemester] = useState('');

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onComplete(role);
    }
  };

  return (
    <div className="bg-white h-full flex flex-col p-8">
      <div className="mt-12 mb-10">
        <div className="flex gap-3 mb-8">
          {[1, 2].map((i) => (
            <div 
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                step >= i ? 'bg-indigo-600 shadow-sm shadow-indigo-100' : 'bg-gray-100'
              }`}
            ></div>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">
          {step === 1 ? 'Choose your role' : 'Complete your profile'}
        </h1>
        <p className="text-gray-500 font-medium">
          {step === 1 ? 'How will you be using CampusConnect?' : 'Tell us a bit more about yourself'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {[
                { id: 'Student', icon: GraduationCap, desc: 'Access courses, assignments, and grades' },
                { id: 'Teacher', icon: BookOpen, desc: 'Manage classes, grade assignments' },
                { id: 'Parent', icon: User, desc: 'Monitor child\'s academic progress' },
                { id: 'Principal', icon: Building, desc: 'Overview of institution performance' }
              ].map((r) => (
                <div 
                  key={r.id}
                  onClick={() => setRole(r.id as Role)}
                  className={`p-5 rounded-3xl border-2 flex items-center gap-5 cursor-pointer transition-all relative overflow-hidden ${
                    role === r.id ? 'border-indigo-600 bg-indigo-50/50 shadow-md' : 'border-gray-50 bg-gray-50/30 hover:border-indigo-100 hover:bg-white'
                  }`}
                >
                  {role === r.id && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white p-1.5 rounded-bl-2xl">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    role === r.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white text-gray-400 border border-gray-100'
                  }`}>
                    <r.icon size={28} />
                  </div>
                  <div>
                    <h3 className={`font-bold tracking-tight text-lg ${role === r.id ? 'text-indigo-900' : 'text-gray-900'}`}>{r.id}</h3>
                    <p className={`text-xs font-medium leading-relaxed ${role === r.id ? 'text-indigo-700' : 'text-gray-500'}`}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4.5 px-5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                />
              </div>
              
              {(role === 'Student' || role === 'Teacher') && (
                <>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Stream / Department</label>
                    <div className="relative">
                      <select 
                        value={stream}
                        onChange={(e) => setStream(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4.5 px-5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none shadow-sm"
                      >
                        <option value="">Select Stream</option>
                        <option value="cs">Computer Science</option>
                        <option value="me">Mechanical Engineering</option>
                        <option value="ee">Electrical Engineering</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  
                  {role === 'Student' && (
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Semester</label>
                      <div className="relative">
                        <select 
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4.5 px-5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none shadow-sm"
                        >
                          <option value="">Select Semester</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                            <option key={s} value={s}>Semester {s}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={handleNext}
        className="w-full bg-indigo-600 text-white py-4.5 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-8"
      >
        {step === 1 ? 'Continue' : 'Get Started'}
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

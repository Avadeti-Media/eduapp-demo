import React, { useState } from 'react';
import { ProgressChart } from '../components/ProgressChart';
import { mockProgressStats, Role } from '../data/mockData';
import { Settings, Award, BookOpen, Clock, ChevronRight, Users, Star, TrendingUp, Bookmark, FileText, Layout, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProfileScreenProps {
  role: Role;
  onNavigate: (screen: string, params?: any) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ role, onNavigate }) => {
  const [progressView, setProgressView] = useState<'overview' | 'details'>('overview');
  const [engagementView, setEngagementView] = useState<'weekly' | 'monthly'>('weekly');

  const isTeacher = role === 'Teacher';
  const isParent = role === 'Parent';
  const isPrincipal = role === 'Principal';
  const isStudent = role === 'Student';

  const getProfileName = () => {
    if (isTeacher) return 'Dr. Sarah Smith';
    if (isPrincipal) return 'Dr. James Wilson';
    if (isParent) return 'Robert Johnson';
    return 'Alex Johnson';
  };

  const getProfileSubtitle = () => {
    if (isTeacher) return 'Teacher • Computer Science';
    if (isPrincipal) return 'Principal • Engineering College';
    if (isParent) return 'Parent of Alex Johnson';
    return 'Student • Computer Science';
  };

  return (
    <div className="p-8 bg-slate-50/50 min-h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">Profile</h1>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">Manage your account</p>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('settings')}
          className="w-14 h-14 bg-white border border-slate-200/60 rounded-[22px] flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all shadow-sm"
        >
          <Settings size={22} />
        </motion.button>
      </div>

      <div className="bg-white rounded-[44px] shadow-sm border border-slate-200/60 mb-10 overflow-hidden group">
        <div className="h-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/40 to-purple-600/40 opacity-60"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-6 right-8">
            <Sparkles size={24} className="text-white/20" />
          </div>
        </div>
        <div className="px-8 pb-10 relative flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-32 h-32 rounded-[40px] bg-white p-2 shadow-2xl -mt-16 mb-6 relative z-10"
          >
            <img src={`https://picsum.photos/seed/${role}/200/200`} alt="Profile" className="w-full h-full object-cover rounded-[32px]" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full shadow-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
          <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight mb-1">{getProfileName()}</h2>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">{getProfileSubtitle()}</p>
          
          <div className="flex gap-4 w-full">
            {isStudent && (
              <>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-brand-600 mb-0.5 tracking-tighter">3</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Semester</div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-emerald-600 mb-0.5 tracking-tighter">A+</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Grade</div>
                </div>
              </>
            )}
            {isTeacher && (
              <>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-brand-600 mb-0.5 tracking-tighter">4</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Courses</div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-emerald-600 mb-0.5 tracking-tighter flex items-center justify-center gap-1">
                    4.8 <Star size={20} className="fill-current" />
                  </div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Rating</div>
                </div>
              </>
            )}
            {isParent && (
              <>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-brand-600 mb-0.5 tracking-tighter">1</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Child</div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-emerald-600 mb-0.5 tracking-tighter">A+</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Avg Grade</div>
                </div>
              </>
            )}
            {isPrincipal && (
              <>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-brand-600 mb-0.5 tracking-tighter">12</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Depts</div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[28px] p-5 border border-slate-100 shadow-inner">
                  <div className="text-3xl font-display font-black text-emerald-600 mb-0.5 tracking-tighter">4.5k</div>
                  <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">Students</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {(isStudent || isParent) && (
        <div className="mb-10">
          <h3 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">
            {isParent ? "Child's Progress" : "Academic Progress"}
          </h3>
          <div className="bg-white rounded-[44px] p-8 shadow-sm border border-slate-200/60">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Overall Completion</p>
                <p className="text-5xl font-display font-black text-slate-900 mt-1 tracking-tighter">{mockProgressStats.overall}%</p>
              </div>
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-[22px] flex items-center justify-center shadow-sm">
                <Award size={32} />
              </div>
            </div>

            <div className="flex bg-slate-50 p-1.5 rounded-[20px] mb-8 border border-slate-100 shadow-inner">
              <button
                onClick={() => setProgressView('overview')}
                className={`flex-1 py-3 text-[10px] font-mono font-bold rounded-[14px] transition-all uppercase tracking-widest ${
                  progressView === 'overview' ? 'bg-white text-brand-600 shadow-md ring-1 ring-black/5' : 'text-slate-400'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setProgressView('details')}
                className={`flex-1 py-3 text-[10px] font-mono font-bold rounded-[14px] transition-all uppercase tracking-widest ${
                  progressView === 'details' ? 'bg-white text-brand-600 shadow-md ring-1 ring-black/5' : 'text-slate-400'
                }`}
              >
                Detailed
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {progressView === 'overview' ? (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ProgressChart 
                    type="bar" 
                    data={mockProgressStats.courseCompletion} 
                    dataKey="completed" 
                    nameKey="name" 
                    colors={['#6366f1']}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {mockProgressStats.courseCompletion.map((course, idx) => (
                    <div key={idx} className="flex justify-between items-center p-6 bg-slate-50/50 rounded-[24px] border border-slate-100 shadow-sm">
                      <span className="font-bold text-sm text-slate-900 tracking-tight">{course.name}</span>
                      <div className="flex items-center gap-4">
                        <div className="w-24 bg-slate-200 rounded-full h-2 shadow-inner">
                          <div className="bg-brand-600 h-2 rounded-full shadow-sm" style={{ width: `${course.completed}%` }}></div>
                        </div>
                        <span className="text-xs font-mono font-bold text-brand-600 w-8 text-right">{course.completed}%</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {isTeacher && (
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Student Engagement</h3>
          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Avg Class Attendance</p>
                <p className="text-4xl font-bold text-gray-900 mt-1 tracking-tighter">88%</p>
              </div>
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm">
                <Users size={28} />
              </div>
            </div>

            <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-8 border border-gray-100 shadow-inner">
              <button
                onClick={() => setEngagementView('weekly')}
                className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${
                  engagementView === 'weekly' ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-gray-400'
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setEngagementView('monthly')}
                className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${
                  engagementView === 'monthly' ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {engagementView === 'weekly' ? (
                <motion.div
                  key="weekly"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ProgressChart 
                    type="bar" 
                    data={[
                      { name: 'Week 1', completed: 92 },
                      { name: 'Week 2', completed: 89 },
                      { name: 'Week 3', completed: 85 },
                      { name: 'Week 4', completed: 88 },
                    ]} 
                    dataKey="completed" 
                    nameKey="name" 
                    colors={['#10b981']}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="monthly"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <ProgressChart 
                    type="bar" 
                    data={[
                      { name: 'Jan', completed: 85 },
                      { name: 'Feb', completed: 88 },
                      { name: 'Mar', completed: 91 },
                      { name: 'Apr', completed: 89 },
                    ]} 
                    dataKey="completed" 
                    nameKey="name" 
                    colors={['#3b82f6']}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Saved Items Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">Saved Items</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { id: 'notes', icon: FileText, label: 'Notes', color: 'bg-blue-50 text-blue-600' },
            { id: 'posts', icon: Layout, label: 'Posts', color: 'bg-purple-50 text-purple-600' },
            { id: 'blogs', icon: Bookmark, label: 'Blogs', color: 'bg-orange-50 text-orange-600' }
          ].map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => onNavigate('savedItems', { type: item.id })}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex flex-col items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className={`w-14 h-14 ${item.color} rounded-[20px] flex items-center justify-center shadow-sm`}>
                <item.icon size={26} />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-900 uppercase tracking-widest">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">
          {isTeacher ? 'Quick Actions' : isPrincipal ? 'Institution Overview' : 'Quick Stats'}
        </h3>
        
        {(isStudent || isParent) && (
          <>
            <motion.div 
              whileHover={{ x: 5 }}
              onClick={() => onNavigate('statsGraph', { title: 'Assignments' })}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-[22px] flex items-center justify-center shadow-sm">
                  <BookOpen size={26} />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-lg tracking-tight">Assignments</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{mockProgressStats.assignmentCompletion}% Completed</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              onClick={() => onNavigate('statsGraph', { title: 'Attendance' })}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-[22px] flex items-center justify-center shadow-sm">
                  <Clock size={26} />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-lg tracking-tight">Attendance</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{mockProgressStats.attendance}% Present</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </motion.div>
          </>
        )}

        {isTeacher && (
          <>
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-[22px] flex items-center justify-center shadow-sm">
                  <BookOpen size={26} />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-lg tracking-tight">My Courses</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Manage syllabus and materials</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-[22px] flex items-center justify-center shadow-sm">
                  <TrendingUp size={26} />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-lg tracking-tight">Assignment Submissions</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">76% submission rate this week</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </motion.div>
          </>
        )}

        {isPrincipal && (
          <>
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-200"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-[22px] flex items-center justify-center shadow-sm">
                  <Users size={26} />
                </div>
                <div>
                  <h4 className="font-display font-black text-slate-900 text-lg tracking-tight">Faculty Directory</h4>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Manage teaching staff</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300" />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};


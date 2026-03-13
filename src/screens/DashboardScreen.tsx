import React from 'react';
import { ProgressChart } from '../components/ProgressChart';
import { mockInstitutionStats, Role } from '../data/mockData';
import { Users, TrendingUp, BookOpen, Award, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardScreenProps {
  role: Role;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ role }) => {
  const isPrincipal = role === 'Principal';

  return (
    <div className="p-8 bg-slate-50/50 min-h-full">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">
            {isPrincipal ? 'Institution' : 'Your'} <br />
            <span className="text-brand-600">{isPrincipal ? 'Overview' : 'Progress'}</span>
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">Fall Semester 2024</p>
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-white rounded-[22px] border border-slate-200/60 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
        >
          <div className="w-10 h-10 bg-slate-100 rounded-[18px] overflow-hidden">
            <img src={`https://picsum.photos/seed/${role}/100/100`} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </motion.button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <motion.div 
          whileHover={{ y: -4, scale: 1.02 }}
          className="col-span-2 bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl shadow-slate-200 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-brand-500/40 transition-colors duration-700"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Users size={20} className="text-brand-300" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Live Metrics</span>
            </div>
            <p className="text-5xl font-display font-black mb-1 tracking-tighter">
              {isPrincipal ? mockInstitutionStats.totalStudents : '92%'}
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest opacity-80">
              {isPrincipal ? 'Total Enrolled Students' : 'Overall Attendance'}
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
            <TrendingUp size={22} className="text-emerald-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-2xl font-display font-black text-slate-900 mb-0.5 tracking-tight">{mockInstitutionStats.averageAttendance}%</p>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Attendance</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-200/60 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
            <BookOpen size={22} className="text-orange-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-2xl font-display font-black text-slate-900 mb-0.5 tracking-tight">{mockInstitutionStats.courseCompletionRate}%</p>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Completion</p>
        </motion.div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Performance</h3>
          <button className="w-10 h-10 bg-white rounded-xl border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-all">
            <ArrowUpRight size={20} />
          </button>
        </div>
        <div className="bg-white rounded-[44px] p-8 shadow-sm border border-slate-200/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-50/50 rounded-full blur-[60px] -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <ProgressChart 
              type="bar" 
              data={mockInstitutionStats.performanceData} 
              dataKey="score" 
              nameKey="name" 
              colors={['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff']}
            />
          </div>
        </div>
      </div>
      
      {isPrincipal && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Department Breakdown</h3>
          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
            <ProgressChart 
              type="pie" 
              data={[
                { name: 'CS', value: 400 },
                { name: 'EC', value: 300 },
                { name: 'ME', value: 300 },
                { name: 'CE', value: 200 },
              ]} 
              dataKey="value" 
              nameKey="name" 
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

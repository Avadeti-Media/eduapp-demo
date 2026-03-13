import React, { useState, useMemo } from 'react';
import { CourseCard } from '../components/CourseCard';
import { mockCourses, Role } from '../data/mockData';
import { Search, Filter, X, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CoursesScreenProps {
  role: Role;
  onNavigate: (screen: string, params?: any) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({ role, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('All');

  const tabs = ['All', 'In Progress', 'Completed', 'Archived'];
  const branches = ['All', 'Computer Science', 'Mechanical', 'Electrical'];

  const filteredCourses = useMemo(() => {
    return mockCourses.filter(course => {
      // Search filter
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Tab filter
      let matchesTab = true;
      if (activeTab === 'In Progress') matchesTab = course.progress > 0 && course.progress < 100;
      else if (activeTab === 'Completed') matchesTab = course.progress === 100;
      else if (activeTab === 'Archived') matchesTab = false; // Mock logic: none are archived

      // Branch filter
      let matchesBranch = true;
      if (selectedBranch !== 'All') {
        matchesBranch = course.branch === selectedBranch;
      }

      return matchesSearch && matchesTab && matchesBranch;
    });
  }, [searchQuery, activeTab, selectedBranch]);

  return (
    <div className="p-6 relative h-full flex flex-col bg-gray-50/50">
      <div className="flex justify-between items-end mb-8 shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            {role === 'Teacher' ? 'My Classes' : 'My Courses'}
          </h1>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">Semester 3</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fall 2024</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-gray-400 shadow-sm hover:text-indigo-600 transition-colors">
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-8 shrink-0">
        <div className="flex-1 relative group">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all shadow-sm"
          />
        </div>
        <button 
          onClick={() => setShowFilterModal(true)}
          className={`w-14 h-14 border rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 ${
            selectedBranch !== 'All' 
              ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' 
              : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'
          }`}
        >
          <SlidersHorizontal size={20} />
        </button>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide shrink-0">
        {tabs.map((filter) => (
          <button 
            key={filter}
            onClick={() => setActiveTab(filter)}
            className={`px-6 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all tracking-tight ${
              activeTab === filter 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105' 
                : 'bg-white text-gray-500 border border-gray-100 hover:border-indigo-200 hover:text-indigo-600 shadow-sm'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pb-10 scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {filteredCourses.length > 0 ? (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5"
            >
              {filteredCourses.map((course, idx) => (
                <motion.div 
                  key={course.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onNavigate('courseDetail', { courseId: course.id })}
                  className="cursor-pointer active:scale-[0.98] transition-all"
                >
                  <CourseCard course={course} role={role} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-[40px] border border-gray-100 shadow-sm"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">No courses found</h3>
              <p className="text-sm text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed">Try adjusting your search or filters to find what you're looking for</p>
              {(searchQuery || selectedBranch !== 'All' || activeTab !== 'All') && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('All');
                    setSelectedBranch('All');
                  }}
                  className="mt-8 text-indigo-600 font-bold text-xs uppercase tracking-widest hover:text-indigo-700 bg-indigo-50 px-6 py-3 rounded-xl border border-indigo-100 transition-all active:scale-95"
                >
                  Clear all filters
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filter Modal */}
      <AnimatePresence>
        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilterModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-white rounded-t-[48px] p-8 shadow-2xl border-t border-gray-100"
            >
              <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Filter Courses</h2>
                <button onClick={() => setShowFilterModal(false)} className="p-2.5 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all active:scale-90">
                  <X size={20} />
                </button>
              </div>

              <div className="mb-10">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-1">Branch / Department</h3>
                <div className="flex flex-wrap gap-3">
                  {branches.map(branch => (
                    <button
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all tracking-tight ${
                        selectedBranch === branch
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-105'
                          : 'bg-gray-50 text-gray-500 border border-gray-100 hover:border-indigo-200 hover:text-indigo-600'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setSelectedBranch('All');
                    setShowFilterModal(false);
                  }}
                  className="flex-1 py-4.5 rounded-2xl font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-all active:scale-95"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setShowFilterModal(false)}
                  className="flex-[2] py-4.5 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

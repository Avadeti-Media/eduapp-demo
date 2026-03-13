import React, { useState, useRef, useEffect } from 'react';
import { TaskCard } from '../components/TaskCard';
import { GuestLectureCard } from '../components/GuestLectureCard';
import { mockTasks, mockGuestLectures, Role } from '../data/mockData';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CalendarScreenProps {
  role: Role;
  onNavigate: (screen: string, params?: any) => void;
}

export const CalendarScreen: React.FC<CalendarScreenProps> = ({ role, onNavigate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 9, 15)); // Oct 15, 2024
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate a stable range of dates (30 days before and after the initial date)
  const [dates] = useState(() => {
    const baseDate = new Date(2024, 9, 15);
    const arr = [];
    for (let i = -30; i <= 30; i++) {
      const d = new Date(baseDate);
      d.setDate(d.getDate() + i);
      arr.push(d);
    }
    return arr;
  });

  // Center the selected date in the scroll view
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const selectedElement = container.querySelector('[data-selected="true"]');
        if (selectedElement) {
          const element = selectedElement as HTMLElement;
          const scrollLeft = element.offsetLeft - (container.offsetWidth / 2) + (element.offsetWidth / 2);
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedDate]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setShowFullCalendar(false);
  };

  const handleTaskClick = (task: any) => {
    if (task.type === 'lecture') onNavigate('courseDetail', { courseId: 1 });
    else if (task.type === 'quiz') onNavigate('quizDetail', { taskId: task.id });
    else if (task.type === 'assignment') onNavigate('assignmentDetail', { taskId: task.id });
    else if (task.type === 'guest_lecture') onNavigate('guestLectureDetail', { lectureId: 1 });
  };

  const handleLectureClick = (lecture: any) => {
    onNavigate('guestLectureDetail', { lectureId: lecture.id });
  };

  // Filter tasks based on selected date (mock logic: just show all for demo, or filter if we had real dates)
  // For demo, we'll just show the mock tasks if it's Oct 15, otherwise show empty or a subset
  const isOct15 = selectedDate.getDate() === 15 && selectedDate.getMonth() === 9;
  const displayTasks = isOct15 ? mockTasks : [];
  const displayLectures = isOct15 ? mockGuestLectures : [];

  const renderFullCalendar = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const monthName = selectedDate.toLocaleString('default', { month: 'long' });

    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="absolute inset-0 bg-white z-50 flex flex-col h-full"
      >
        <div className="p-8 flex justify-between items-center border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{monthName} {selectedDate.getFullYear()}</h2>
          <button 
            onClick={() => setShowFullCalendar(false)} 
            className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:text-gray-900 transition-all active:scale-90"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8 flex-1 overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-7 gap-3 mb-6">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-3">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const date = i + 1;
              const isSelected = date === selectedDate.getDate();
              const hasEvents = date === 15 || date === 18; // Mock events
              return (
                <button
                  key={date}
                  onClick={() => handleDateClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date))}
                  className={`aspect-square flex flex-col items-center justify-center rounded-2xl relative transition-all ${
                    isSelected ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-110 z-10' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm font-bold">{date}</span>
                  {hasEvents && (
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${isSelected ? 'bg-white' : 'bg-indigo-500 shadow-sm'}`} />
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">Upcoming Events this Month</h3>
            <div className="space-y-4">
              <div className="p-5 bg-indigo-50/50 rounded-[32px] border border-indigo-100/50 flex items-center gap-5 group hover:bg-indigo-50 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex flex-col items-center justify-center text-indigo-600 font-bold leading-tight shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Oct</span>
                  <span className="text-xl tracking-tighter">15</span>
                </div>
                <div>
                  <p className="font-bold text-[15px] text-gray-900 tracking-tight">Mid-term Exams Begin</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">University Wide</p>
                </div>
              </div>
              <div className="p-5 bg-orange-50/50 rounded-[32px] border border-orange-100/50 flex items-center gap-5 group hover:bg-orange-50 transition-colors">
                <div className="w-14 h-14 bg-white rounded-2xl flex flex-col items-center justify-center text-orange-600 font-bold leading-tight shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Oct</span>
                  <span className="text-xl tracking-tighter">18</span>
                </div>
                <div>
                  <p className="font-bold text-[15px] text-gray-900 tracking-tight">Tech Fest 2024</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Main Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="p-8 relative h-full flex flex-col bg-slate-50/50">
      <AnimatePresence>
        {showFullCalendar && renderFullCalendar()}
      </AnimatePresence>
      
      <div className="flex justify-between items-start mb-8 shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-brand-500 rounded-full"></div>
            <span className="text-[10px] font-mono font-bold text-brand-600 uppercase tracking-[0.3em]">Schedule</span>
          </div>
          <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none mb-2">Today</h1>
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">
            {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowFullCalendar(true)}
          className="w-14 h-14 bg-white shadow-sm border border-slate-200/60 rounded-[22px] flex items-center justify-center hover:bg-brand-50 transition-all"
        >
          <CalendarIcon size={24} className="text-brand-600" />
        </motion.button>
      </div>

      {/* Mini Calendar Strip */}
      <div className="flex justify-between items-center mb-10 bg-white p-4 rounded-[32px] shadow-sm border border-slate-200/60 shrink-0">
        <button 
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
          }}
          className="p-2 text-slate-300 hover:text-brand-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-2 snap-x"
          style={{ scrollBehavior: 'smooth' }}
        >
          {dates.map((date, i) => {
            const isSelected = date.toDateString() === selectedDate.toDateString();
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0);
            return (
              <button
                key={i} 
                onClick={() => handleDateClick(date)}
                data-selected={isSelected}
                className={`flex flex-col items-center justify-center w-12 h-18 rounded-2xl shrink-0 snap-center transition-all ${
                  isSelected ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-110 z-10' : 'text-slate-400 hover:bg-slate-50'
                }`}
              >
                <span className="text-[9px] font-mono font-bold uppercase opacity-60">{dayName}</span>
                <span className={`text-base font-display font-black mt-1.5 ${isSelected ? 'text-white' : 'text-slate-900'}`}>{date.getDate()}</span>
              </button>
            );
          })}
        </div>
        <button 
          onClick={() => {
            if (scrollRef.current) scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
          }}
          className="p-2 text-slate-300 hover:text-brand-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-10 scrollbar-hide">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight">
              {role === 'Teacher' ? 'Assigned Tasks' : 'My Tasks'}
            </h2>
            <span className="text-[10px] font-mono font-bold text-brand-600 bg-brand-50 px-4 py-2 rounded-xl uppercase tracking-widest">{displayTasks.length} Pending</span>
          </div>
          <AnimatePresence mode="popLayout">
            {displayTasks.length > 0 ? (
              <div className="space-y-6">
                {displayTasks.map((task, idx) => (
                  <motion.div 
                    key={task.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleTaskClick(task)} 
                    className="cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <TaskCard task={task} role={role} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-white rounded-[44px] border border-dashed border-slate-200 shadow-sm"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon size={24} className="text-slate-300" />
                </div>
                <p className="text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest">No tasks scheduled</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <h2 className="text-2xl font-display font-black text-slate-900 mb-8 tracking-tight">Guest Lectures</h2>
          <AnimatePresence mode="popLayout">
            {displayLectures.length > 0 ? (
              <div className="space-y-6">
                {displayLectures.map((lecture, idx) => (
                  <motion.div 
                    key={lecture.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    onClick={() => handleLectureClick(lecture)} 
                    className="cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <GuestLectureCard lecture={lecture} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-white rounded-[44px] border border-dashed border-slate-200 shadow-sm"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={24} className="text-slate-300" />
                </div>
                <p className="text-slate-400 font-mono font-bold text-[10px] uppercase tracking-widest">No lectures scheduled</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

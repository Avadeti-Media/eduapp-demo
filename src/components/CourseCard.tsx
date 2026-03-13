import React from 'react';
import { BookOpen, Users } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    teacher: string;
    progress: number;
    lectures: number;
    semester: number;
    branch: string;
  };
  role: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, role }) => {
  const isTeacher = role === 'Teacher';

  return (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-4 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-50 rounded-full opacity-50 blur-xl"></div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-1 block">
            {course.branch} • Sem {course.semester}
          </span>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{isTeacher ? 'Your Course' : course.teacher}</p>
        </div>
        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
          <BookOpen size={20} className="text-indigo-600" />
        </div>
      </div>

      <div className="mt-6 relative z-10">
        <div className="flex justify-between text-xs font-medium text-gray-600 mb-2">
          <span>{isTeacher ? 'Syllabus Coverage' : 'Progress'}</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 relative z-10">
        <div className="flex items-center gap-1.5">
          <BookOpen size={14} />
          <span>{course.lectures} Lectures</span>
        </div>
        {isTeacher && (
          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span>120 Students</span>
          </div>
        )}
      </div>
    </div>
  );
};

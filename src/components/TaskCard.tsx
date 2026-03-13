import React from 'react';
import { PlayCircle, FileText, CheckCircle, Clock } from 'lucide-react';

interface TaskCardProps {
  task: {
    id: number;
    title: string;
    time: string;
    type: string;
    status: string;
    course: string;
  };
  role: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, role }) => {
  const isTeacher = role === 'Teacher';
  const getIcon = () => {
    switch (task.type) {
      case 'lecture': return <PlayCircle size={20} className="text-blue-500" />;
      case 'quiz': return <CheckCircle size={20} className="text-green-500" />;
      case 'assignment': return <FileText size={20} className="text-orange-500" />;
      default: return <Clock size={20} className="text-purple-500" />;
    }
  };

  return (
    <div className={`bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-3 flex items-start gap-4 transition-transform active:scale-[0.98] ${isTeacher ? 'border-l-4 border-l-indigo-500' : ''}`}>
      <div className="p-3 bg-gray-50 rounded-xl shrink-0">
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-semibold text-gray-900 text-sm truncate">{task.title}</h4>
          <span className="text-xs font-medium text-gray-500 shrink-0 ml-2">{task.time}</span>
        </div>
        <p className="text-xs text-gray-500 truncate">{task.course}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className={`text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wide ${
            task.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
          }`}>
            {task.status}
          </span>
          {isTeacher && (
            <span className="text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wide bg-indigo-50 text-indigo-700">
              Assigned
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ChevronLeft, Bell, BookOpen, Calendar as CalendarIcon } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

interface NotificationListScreenProps {
  onBack: () => void;
  onNavigate: (screen: string, params?: any) => void;
}

export const NotificationListScreen: React.FC<NotificationListScreenProps> = ({ onBack, onNavigate }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'academic': return <BookOpen size={20} className="text-indigo-600" />;
      case 'event': return <CalendarIcon size={20} className="text-orange-600" />;
      default: return <Bell size={20} className="text-emerald-600" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-indigo-50';
      case 'event': return 'bg-orange-50';
      default: return 'bg-emerald-50';
    }
  };

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Notifications</h1>
        </div>
        <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Mark all read</button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10 space-y-4 bg-gray-50">
        {mockNotifications.map(notif => (
          <div 
            key={notif.id} 
            onClick={() => onNavigate('notificationDetail', { notificationId: notif.id })}
            className={`flex gap-4 p-4 rounded-3xl border cursor-pointer active:scale-[0.98] transition-all hover:shadow-md ${notif.read ? 'bg-white border-gray-100' : 'bg-white border-indigo-200 ring-1 ring-indigo-100 shadow-sm shadow-indigo-50'}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${getBg(notif.type)}`}>
              {getIcon(notif.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-[15px] font-bold tracking-tight ${notif.read ? 'text-gray-900' : 'text-indigo-900'}`}>{notif.title}</h4>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap ml-2 mt-1">{notif.time}</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 font-medium leading-relaxed">{notif.message}</p>
              {!notif.read && (
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">New</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

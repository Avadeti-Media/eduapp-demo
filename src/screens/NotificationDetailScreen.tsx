import React from 'react';
import { ChevronLeft, Bell, BookOpen, Calendar as CalendarIcon } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

interface NotificationDetailScreenProps {
  notificationId: number;
  onBack: () => void;
}

export const NotificationDetailScreen: React.FC<NotificationDetailScreenProps> = ({ notificationId, onBack }) => {
  const notif = mockNotifications.find(n => n.id === notificationId) || mockNotifications[0];

  const getIcon = (type: string) => {
    switch (type) {
      case 'academic': return <BookOpen size={32} className="text-indigo-600" />;
      case 'event': return <CalendarIcon size={32} className="text-orange-600" />;
      default: return <Bell size={32} className="text-emerald-600" />;
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
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Notification</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        <div className="flex flex-col items-center text-center mb-10 mt-6">
          <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-white ${getBg(notif.type)}`}>
            {getIcon(notif.type)}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight leading-tight">{notif.title}</h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{notif.time}</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 shadow-inner">
          <p className="text-gray-700 leading-relaxed text-lg font-medium">
            {notif.message}
          </p>
        </div>

        <div className="mt-10">
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

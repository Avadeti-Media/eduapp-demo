import React from 'react';
import { ChevronLeft, LogOut, Shield, FileText, Bell, Lock, User, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SettingsScreenProps {
  onBack: () => void;
  onNavigate: (screen: string, params?: any) => void;
  onLogout: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack, onNavigate, onLogout }) => {
  return (
    <div className="bg-gray-50/50 h-full flex flex-col relative">
      <div className="p-6 pb-6 flex items-center gap-4 border-b border-gray-100 bg-white shrink-0 shadow-sm">
        <button onClick={onBack} className="p-2.5 -ml-2 text-gray-400 hover:text-indigo-600 bg-gray-50 rounded-xl transition-all active:scale-90">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 px-2">Account</h3>
          <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
            {[
              { id: 'Personal Information', icon: User, color: 'bg-indigo-50 text-indigo-600' },
              { id: 'Password & Security', icon: Lock, color: 'bg-orange-50 text-orange-600' },
              { id: 'Notifications', icon: Bell, color: 'bg-emerald-50 text-emerald-600' }
            ].map((item, idx, arr) => (
              <div 
                key={item.id}
                onClick={() => onNavigate('settingDetail', { title: item.id })}
                className={`p-5 flex items-center justify-between active:bg-gray-50 cursor-pointer transition-all group ${idx !== arr.length - 1 ? 'border-b border-gray-50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} />
                  </div>
                  <span className="font-bold text-[15px] text-gray-900 tracking-tight">{item.id}</span>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 px-2">About</h3>
          <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
            {[
              { id: 'Privacy Policy', icon: Shield, color: 'bg-blue-50 text-blue-600' },
              { id: 'Terms of Service', icon: FileText, color: 'bg-purple-50 text-purple-600' },
              { id: 'Help & Support', icon: HelpCircle, color: 'bg-gray-100 text-gray-600' }
            ].map((item, idx, arr) => (
              <div 
                key={item.id}
                onClick={() => onNavigate('settingDetail', { title: item.id })}
                className={`p-5 flex items-center justify-between active:bg-gray-50 cursor-pointer transition-all group ${idx !== arr.length - 1 ? 'border-b border-gray-50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={22} />
                  </div>
                  <span className="font-bold text-[15px] text-gray-900 tracking-tight">{item.id}</span>
                </div>
                <ArrowRight size={18} className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onLogout}
          className="w-full mt-8 p-5 flex items-center justify-center gap-3 text-red-600 bg-red-50 rounded-[24px] font-bold active:scale-[0.98] transition-all hover:bg-red-100 shadow-sm border border-red-100/50"
        >
          <LogOut size={22} />
          <span className="tracking-tight">Log Out</span>
        </motion.button>
      </div>
    </div>
  );
};

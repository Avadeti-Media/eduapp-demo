import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface BottomTabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="absolute bottom-6 left-6 right-6 h-16 bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[24px] px-4 flex justify-around items-center shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
              isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabBackground"
                className="absolute inset-0 bg-brand-100/50 rounded-2xl"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon 
              size={22} 
              strokeWidth={isActive ? 2.5 : 2} 
              className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} 
            />
            {isActive && (
              <motion.span 
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-1.5 text-[8px] font-bold uppercase tracking-widest text-brand-600"
              >
                {tab.label}
              </motion.span>
            )}
          </button>
        );
      })}
    </div>
  );
};

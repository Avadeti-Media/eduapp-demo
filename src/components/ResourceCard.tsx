import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  icon: LucideIcon;
  colorScheme: 'blue' | 'purple' | 'orange' | 'emerald';
  onClick?: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ title, icon: Icon, colorScheme, onClick }) => {
  const getStyle = () => {
    switch (colorScheme) {
      case 'blue': return { bg: 'bg-blue-50', border: 'border-blue-100', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', textColor: 'text-blue-900' };
      case 'purple': return { bg: 'bg-purple-50', border: 'border-purple-100', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', textColor: 'text-purple-900' };
      case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-100', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', textColor: 'text-orange-900' };
      case 'emerald': return { bg: 'bg-emerald-50', border: 'border-emerald-100', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', textColor: 'text-emerald-900' };
    }
  };

  const styles = getStyle();

  return (
    <div 
      onClick={onClick}
      className={`${styles.bg} p-4 rounded-2xl border ${styles.border} flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer`}
    >
      <div className={`w-12 h-12 ${styles.iconBg} rounded-full flex items-center justify-center ${styles.iconColor}`}>
        <Icon size={24} />
      </div>
      <span className={`font-bold ${styles.textColor} text-sm`}>{title}</span>
    </div>
  );
};

import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface MobileContainerProps {
  children: React.ReactNode;
  bottomBar?: React.ReactNode;
}

export const MobileContainer: React.FC<MobileContainerProps> = ({ children, bottomBar }) => {
  return (
    <div className="flex justify-center w-full bg-slate-100 min-h-screen sm:py-12">
      <div className="w-full max-w-[400px] h-[100dvh] sm:h-[850px] bg-slate-50 sm:rounded-[54px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden relative flex flex-col border-slate-200 sm:border-[12px] ring-1 ring-black/5">
        {/* Status Bar Mock */}
        <div className="h-14 w-full bg-transparent flex justify-between items-center px-8 text-[14px] font-bold text-slate-900 z-50 shrink-0 absolute top-0 left-0 right-0">
          <span className="w-14 font-display">9:41</span>
          
          {/* Dynamic Island / Notch Mock */}
          <div className="w-32 h-8 bg-black rounded-[20px] absolute left-1/2 -translate-x-1/2 top-3 flex items-center justify-center gap-2 px-3">
            <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
            <div className="flex-1 h-1 bg-slate-900 rounded-full opacity-20"></div>
            <div className="w-3 h-3 bg-slate-800 rounded-full border border-slate-700"></div>
          </div>
          
          <div className="flex items-center gap-2 w-14 justify-end">
            <Signal size={16} strokeWidth={2.5} />
            <Wifi size={16} strokeWidth={2.5} />
            <Battery size={20} strokeWidth={2} className="opacity-90" />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className={`flex-1 overflow-y-auto bg-slate-50 pt-14 scrollbar-hide ${bottomBar ? 'pb-32' : 'pb-8'}`}>
          {children}
        </div>

        {bottomBar}
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-900/10 rounded-full z-50"></div>
      </div>
    </div>
  );
};

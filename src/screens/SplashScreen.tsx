import React, { useEffect } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="bg-indigo-600 h-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-indigo-400/20 rounded-full blur-[100px]"></div>
      
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-28 h-28 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl relative z-10">
          <BookOpen size={56} className="text-indigo-600" />
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 text-indigo-200"
        >
          <Sparkles size={32} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-3 tracking-tighter">CampusConnect</h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[1px] w-8 bg-indigo-300/50"></div>
          <p className="text-indigo-100 font-bold uppercase tracking-[0.2em] text-[10px]">Your Academic Universe</p>
          <div className="h-[1px] w-8 bg-indigo-300/50"></div>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

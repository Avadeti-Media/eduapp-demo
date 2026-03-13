import React from 'react';
import { ChevronLeft, Camera, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface SettingDetailScreenProps {
  title: string;
  onBack: () => void;
}

export const SettingDetailScreen: React.FC<SettingDetailScreenProps> = ({ title, onBack }) => {
  return (
    <div className="bg-gray-50/50 h-full flex flex-col relative">
      <div className="p-6 pb-6 flex items-center gap-4 border-b border-gray-100 bg-white shrink-0 shadow-sm">
        <button onClick={onBack} className="p-2.5 -ml-2 text-gray-400 hover:text-indigo-600 bg-gray-50 rounded-xl transition-all active:scale-90">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-8 pb-10 scrollbar-hide">
        {title === 'Personal Information' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center mb-10">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[48px] bg-indigo-100 mb-4 overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <img src="https://picsum.photos/seed/user/200/200" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-2 right-0 p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-90">
                  <Camera size={20} />
                </button>
              </div>
              <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors">Change Photo</button>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">Full Name</label>
                <input type="text" defaultValue="Alex Johnson" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">Email</label>
                <input type="email" defaultValue="alex.j@example.com" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">Phone</label>
                <input type="tel" defaultValue="+1 234 567 8900" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-5 rounded-[24px] font-bold mt-10 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] tracking-tight">Save Changes</button>
          </motion.div>
        )}

        {title === 'Password & Security' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 ml-2">Confirm New Password</label>
                <input type="password" placeholder="••••••••" className="w-full bg-white border border-gray-100 rounded-[24px] py-4 px-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" />
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-5 rounded-[24px] font-bold mt-10 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] tracking-tight">Update Password</button>
          </motion.div>
        )}

        {title === 'Notifications' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {[
              { id: 'Push Notifications', sub: 'Receive alerts on your device', active: true },
              { id: 'Email Notifications', sub: 'Receive daily summaries', active: false },
              { id: 'Assignment Reminders', sub: '24h before deadline', active: true }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-gray-900 tracking-tight text-lg mb-1 group-hover:text-indigo-600 transition-colors">{item.id}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.sub}</p>
                </div>
                <div className={`w-14 h-8 ${item.active ? 'bg-indigo-600' : 'bg-gray-200'} rounded-full relative cursor-pointer transition-all shadow-inner`}>
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 shadow-md transition-all ${item.active ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {(title === 'Privacy Policy' || title === 'Terms of Service') && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose prose-sm text-gray-500 max-w-none"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-indigo-500" />
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Last updated: October 2024</span>
            </div>
            <p className="mb-6 leading-relaxed font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">1. Introduction</h3>
            <p className="mb-6 leading-relaxed font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">2. Data Collection</h3>
            <p className="mb-6 leading-relaxed font-medium">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </motion.div>
        )}

        {title === 'Help & Support' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 rounded-[40px] shadow-xl shadow-indigo-100 relative overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="font-bold text-white mb-2 text-xl tracking-tight relative z-10">Contact Support</h4>
              <p className="text-sm text-indigo-100 mb-6 font-medium relative z-10">We typically reply within 24 hours.</p>
              <button className="bg-white text-indigo-600 px-8 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-lg active:scale-95 relative z-10">Email Us</button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {['How do I reset my password?', 'Where can I find my grades?', 'How to submit an assignment?'].map((q, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="p-6 bg-white rounded-[32px] border border-gray-100 font-bold text-gray-700 text-[15px] tracking-tight hover:bg-gray-50 transition-all cursor-pointer shadow-sm flex items-center justify-between group"
                  >
                    <span>{q}</span>
                    <ChevronLeft size={20} className="text-gray-300 rotate-180 group-hover:text-indigo-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

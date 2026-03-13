import React, { useState, useMemo } from 'react';
import { FeedPost } from '../components/FeedPost';
import { mockFeeds, Role } from '../data/mockData';
import { Bell, Plus, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeedsScreenProps {
  role: Role;
  onNavigate: (screen: string, params?: any) => void;
}

export const FeedsScreen: React.FC<FeedsScreenProps> = ({ role, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Announcements', 'Academic', 'General'];

  const filteredFeeds = useMemo(() => {
    return mockFeeds.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'All' || post.category === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  const handleShare = () => {
    // alert('Link copied to clipboard!');
  };

  return (
    <div className="p-8 bg-slate-50/50 h-full flex flex-col relative">
      <div className="flex justify-between items-start mb-8 shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-brand-500 rounded-full"></div>
            <span className="text-[10px] font-mono font-bold text-brand-600 uppercase tracking-[0.3em]">Community</span>
          </div>
          <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none">Campus <br /> <span className="text-slate-400">Feed</span></h1>
        </div>
        <div className="flex gap-3">
          {(role === 'Teacher' || role === 'Principal') && (
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-slate-900 text-white rounded-[22px] flex items-center justify-center shadow-xl shadow-slate-200 hover:bg-brand-600 transition-all"
            >
              <Plus size={24} />
            </motion.button>
          )}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate('notifications')}
            className="w-14 h-14 bg-white border border-slate-200/60 rounded-[22px] flex items-center justify-center text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all relative shadow-sm"
          >
            <Bell size={22} />
            <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white"></span>
          </motion.button>
        </div>
      </div>

      <div className="mb-8 shrink-0 relative group">
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-brand-500 transition-colors z-10">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search campus updates..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-slate-200/60 rounded-[24px] py-5 pl-14 pr-6 text-sm font-medium focus:outline-none focus:ring-8 focus:ring-brand-500/5 focus:border-brand-500 transition-all shadow-sm placeholder:text-slate-300"
        />
      </div>

      <div className="flex gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide shrink-0">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-2xl text-[11px] font-bold whitespace-nowrap transition-all tracking-widest uppercase ${
              activeTab === tab 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-100' 
                : 'bg-white text-slate-400 border border-slate-200/60 hover:border-brand-200 hover:text-brand-600 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pb-10 scrollbar-hide space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredFeeds.length > 0 ? (
            filteredFeeds.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <FeedPost 
                  post={post} 
                  onClick={() => onNavigate('feedDetail', { postId: post.id })}
                  onComment={() => onNavigate('feedDetail', { postId: post.id })}
                  onShare={handleShare}
                />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-[40px] border border-gray-100 shadow-sm"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">No posts found</h3>
              <p className="text-sm text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed">Try adjusting your search or filters to find what you're looking for</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

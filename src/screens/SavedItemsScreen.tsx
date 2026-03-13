import React from 'react';
import { ChevronLeft, Bookmark, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { mockFeeds, mockBlogs, mockResources } from '../data/mockData';
import { FeedPost } from '../components/FeedPost';
import { BlogCard } from '../components/BlogCard';
import { motion, AnimatePresence } from 'motion/react';

interface SavedItemsScreenProps {
  type: 'notes' | 'posts' | 'blogs';
  onBack: () => void;
  onNavigate: (screen: string, params?: any) => void;
}

export const SavedItemsScreen: React.FC<SavedItemsScreenProps> = ({ type, onBack, onNavigate }) => {
  const getTitle = () => {
    switch (type) {
      case 'notes': return 'Saved Notes';
      case 'posts': return 'Saved Posts';
      case 'blogs': return 'Saved Blogs';
    }
  };

  const renderContent = () => {
    if (type === 'posts') {
      return (
        <div className="space-y-6">
          {mockFeeds.slice(0, 2).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <FeedPost 
                post={post} 
                onClick={() => onNavigate('feedDetail', { postId: post.id })}
                onComment={() => onNavigate('feedDetail', { postId: post.id })}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    if (type === 'blogs') {
      return (
        <div className="space-y-4">
          {mockBlogs.slice(0, 2).map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <BlogCard 
                blog={blog} 
                onClick={() => onNavigate('blogDetail', { blogId: blog.id })}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    if (type === 'notes') {
      const savedNotes = mockResources.filter(r => r.type === 'pdf').slice(0, 3);
      return (
        <div className="space-y-4">
          {savedNotes.map((res, idx) => (
            <motion.div 
              key={res.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-5 bg-white rounded-[32px] border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FileText size={28} />
                </div>
                <div>
                  <p className="font-bold text-[15px] text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">{res.title}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{res.size} • {res.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bookmark size={20} className="text-indigo-600 fill-current shrink-0" />
                <ArrowRight size={18} className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-50/50 h-full flex flex-col relative">
      <div className="p-6 pb-6 flex items-center gap-4 border-b border-gray-100 bg-white shrink-0 shadow-sm">
        <button onClick={onBack} className="p-2.5 -ml-2 text-gray-400 hover:text-indigo-600 bg-gray-50 rounded-xl transition-all active:scale-90">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{getTitle()}</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10 scrollbar-hide">
        <div className="flex items-center gap-2 mb-6 ml-2">
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Your Collection</span>
        </div>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </div>
  );
};

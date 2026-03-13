import React, { useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { ChatBubble } from '../components/ChatBubble';
import { ResourceCard } from '../components/ResourceCard';
import { mockBlogs, mockChatHistory, mockResources, Role } from '../data/mockData';
import { Search, Folder, FileText, Video, Send, Download, PlayCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResourcesScreenProps {
  role: Role;
  onNavigate: (screen: string, params?: any) => void;
}

export const ResourcesScreen: React.FC<ResourcesScreenProps> = ({ role, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('materials');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter(res => 
    res.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50/50 h-full flex flex-col relative">
      <div className="flex justify-between items-end mb-8 shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles size={16} className="text-indigo-500" />
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Library</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">Resources</h1>
        </div>
      </div>

      <div className="flex bg-white p-1.5 rounded-[24px] mb-8 shrink-0 shadow-sm border border-gray-100">
        {['Materials', 'Blogs', 'Ask AI'].map((tab) => {
          const tabId = tab.toLowerCase().replace(' ', '');
          const isActive = activeTab === tabId;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tabId)}
              className={`flex-1 py-3 text-[11px] font-bold rounded-2xl transition-all uppercase tracking-widest ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'materials' && (
          <motion.div 
            key="materials"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 flex flex-col min-h-0"
          >
            <div className="relative mb-8 shrink-0 group">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search notes, PDFs, videos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-[24px] py-4.5 pl-12 pr-6 text-[15px] font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>

            {searchQuery ? (
              <div className="flex-1 overflow-y-auto pb-10 space-y-4 scrollbar-hide">
                {filteredResources.length > 0 ? (
                  filteredResources.map((res, idx) => (
                    <motion.div 
                      key={res.id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-5 bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-all group-hover:scale-110 ${
                          res.type === 'pdf' ? 'bg-blue-50 text-blue-600' :
                          res.type === 'video' ? 'bg-purple-50 text-purple-600' :
                          'bg-orange-50 text-orange-600'
                        }`}>
                          {res.type === 'pdf' ? <FileText size={28} /> :
                           res.type === 'video' ? <Video size={28} /> :
                           <Folder size={28} />}
                        </div>
                        <div>
                          <p className="font-bold text-[15px] text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">{res.title}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{res.type === 'video' ? res.duration : res.size} • {res.date}</p>
                        </div>
                      </div>
                      <button className="p-3 text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all active:scale-90 bg-gray-50 group-hover:bg-indigo-600 group-hover:text-white">
                        {res.type === 'video' ? <PlayCircle size={22} /> : <Download size={22} />}
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-16 bg-white rounded-[40px] border border-dashed border-gray-200 shadow-sm">
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">No resources found</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 shrink-0">
                <ResourceCard 
                  title="PDF Notes" 
                  icon={FileText} 
                  colorScheme="blue" 
                  onClick={() => onNavigate('resourceList', { category: 'PDF Notes' })}
                />
                <ResourceCard 
                  title="Video Lectures" 
                  icon={Video} 
                  colorScheme="purple" 
                  onClick={() => onNavigate('resourceList', { category: 'Video Lectures' })}
                />
                <ResourceCard 
                  title="Study Materials" 
                  icon={Folder} 
                  colorScheme="orange" 
                  onClick={() => onNavigate('resourceList', { category: 'Study Materials' })}
                />
                <ResourceCard 
                  title="Previous Papers" 
                  icon={FileText} 
                  colorScheme="emerald" 
                  onClick={() => onNavigate('resourceList', { category: 'Previous Papers' })}
                />
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'blogs' && (
          <motion.div 
            key="blogs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 overflow-y-auto pb-10 space-y-6 scrollbar-hide"
          >
            {mockBlogs.map((blog, idx) => (
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
          </motion.div>
        )}

        {activeTab === 'askai' && (
          <motion.div 
            key="askai"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 flex flex-col bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-xl mb-20 relative"
          >
            <div className="bg-indigo-600 p-6 text-white flex items-center gap-4 shrink-0 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-indigo-100 font-bold uppercase tracking-widest">Always Online</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 scrollbar-hide">
              {mockChatHistory.map(msg => (
                <ChatBubble key={msg.id} message={msg} />
              ))}
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 shrink-0">
              <input 
                type="text" 
                placeholder="Ask anything..." 
                className="flex-1 bg-gray-50 rounded-[20px] py-4 px-6 text-sm font-bold text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all border border-gray-100"
              />
              <button className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-90">
                <Send size={22} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronLeft, Bookmark, Share2, Clock, User } from 'lucide-react';
import { mockBlogs } from '../data/mockData';

interface BlogDetailScreenProps {
  blogId: number;
  onBack: () => void;
}

export const BlogDetailScreen: React.FC<BlogDetailScreenProps> = ({ blogId, onBack }) => {
  const blog = mockBlogs.find(b => b.id === blogId) || mockBlogs[0];
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    alert('Blog link copied to clipboard!');
  };

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => setSaved(!saved)}
            className={`p-2.5 rounded-full transition-all active:scale-90 ${saved ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
          >
            <Bookmark size={20} className={saved ? 'fill-current' : ''} />
          </button>
          <button 
            onClick={handleShare}
            className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all active:scale-90"
          >
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest shadow-lg shadow-indigo-500/30">
              Technology
            </span>
            <h1 className="text-3xl font-bold text-white leading-tight tracking-tight shadow-sm">{blog.title}</h1>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2.5 text-gray-500">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-bold tracking-tight text-gray-900">Admin Team</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-500">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock size={16} />
              </div>
              <span className="text-sm font-bold tracking-tight text-gray-900">5 min read</span>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none text-gray-600 leading-relaxed font-medium">
            <p className="text-xl font-bold text-gray-900 mb-8 leading-relaxed tracking-tight">
              {blog.preview}
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-5 tracking-tight">Key Takeaways</h3>
            <ul className="list-none pl-0 mb-8 space-y-4">
              {[
                'Understanding the core concepts is crucial.',
                'Practice makes perfect when it comes to implementation.',
                'Always stay updated with the latest trends.'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-bold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

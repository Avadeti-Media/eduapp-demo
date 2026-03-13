import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface FeedPostProps {
  post: {
    id: number;
    author: string;
    role: string;
    category?: string;
    avatar: string;
    title: string;
    description: string;
    timestamp: string;
    likes: number;
    comments: number;
    image?: string;
  };
  onClick?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export const FeedPost: React.FC<FeedPostProps> = ({ post, onClick, onComment, onShare }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 mb-6 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300" onClick={onClick}>
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <img src={post.avatar} alt={post.author} className="w-11 h-11 rounded-full object-cover border border-gray-100 shadow-sm" />
            {post.category === 'Announcements' && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-indigo-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm tracking-tight">{post.author}</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider bg-indigo-50 px-1.5 py-0.5 rounded-md">{post.role}</span>
              <span className="text-[10px] text-gray-400 font-medium">• {post.timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-900 transition-colors p-1" onClick={(e) => e.stopPropagation()}>
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="px-5 pb-4">
        <h3 className="font-bold text-gray-900 text-[15px] mb-1.5 leading-snug tracking-tight">{post.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{post.description}</p>
      </div>

      {post.image && (
        <div className="w-full h-52 bg-gray-50 relative">
          <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
        </div>
      )}

      <div className="px-5 py-3.5 flex items-center justify-between border-t border-gray-50 bg-gray-50/50">
        <div className="flex items-center gap-6">
          <button 
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }} 
            className={`flex items-center gap-1.5 transition-colors ${liked ? 'text-red-500' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <Heart size={18} className={liked ? 'fill-current' : ''} />
            <span className="text-xs font-bold">{post.likes + (liked ? 1 : 0)}</span>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onComment && onComment(); }}
            className="flex items-center gap-1.5 text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <MessageCircle size={18} />
            <span className="text-xs font-bold">{post.comments}</span>
          </button>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onShare && onShare(); }}
          className="text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

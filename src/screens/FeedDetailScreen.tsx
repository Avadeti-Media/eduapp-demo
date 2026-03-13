import React, { useState } from 'react';
import { ChevronLeft, Send } from 'lucide-react';
import { FeedPost } from '../components/FeedPost';
import { mockFeeds } from '../data/mockData';

interface FeedDetailScreenProps {
  postId: number;
  onBack: () => void;
}

export const FeedDetailScreen: React.FC<FeedDetailScreenProps> = ({ postId, onBack }) => {
  const post = mockFeeds.find(p => p.id === postId) || mockFeeds[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Jane Doe', avatar: 'https://picsum.photos/seed/jane/100/100', text: 'This is amazing! Can\'t wait.', time: '1 hour ago' },
    { id: 2, author: 'Mark Smith', avatar: 'https://picsum.photos/seed/mark/100/100', text: 'Will there be food provided?', time: '30 mins ago' },
  ]);

  const handleSend = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: 'You', avatar: 'https://picsum.photos/seed/you/100/100', text: comment, time: 'Just now' }
    ]);
    setComment('');
  };

  const handleShare = () => {
    alert('Link copied to clipboard!');
  };

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Post</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-32">
        <FeedPost post={post} onShare={handleShare} />

        <div className="mt-8">
          <h3 className="font-bold text-gray-900 mb-6 tracking-tight text-lg">Comments ({comments.length})</h3>
          <div className="space-y-6 mb-6">
            {comments.map(c => (
              <div key={c.id} className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <img src={c.avatar} alt={c.author} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 bg-gray-50 p-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-sm text-gray-900 tracking-tight">{c.author}</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{c.time}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-200 shadow-inner">
          <input 
            type="text" 
            placeholder="Write a comment..." 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm font-medium" 
          />
          <button 
            onClick={handleSend}
            className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-md shadow-indigo-200 active:scale-95 transition-all hover:bg-indigo-700"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

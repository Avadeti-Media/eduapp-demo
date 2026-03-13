import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    preview: string;
    image: string;
  };
  onClick?: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden flex active:scale-[0.98] transition-transform cursor-pointer"
    >
      <div className="w-24 shrink-0 bg-gray-100">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">{blog.title}</h4>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{blog.preview}</p>
      </div>
      <div className="p-3 flex items-center justify-center text-gray-300">
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

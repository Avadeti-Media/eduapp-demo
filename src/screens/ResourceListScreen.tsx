import React, { useState } from 'react';
import { ChevronLeft, Search, FileText, Video, Folder, Download, PlayCircle } from 'lucide-react';
import { mockResources } from '../data/mockData';

interface ResourceListScreenProps {
  category: string;
  onBack: () => void;
}

export const ResourceListScreen: React.FC<ResourceListScreenProps> = ({ category, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredResources = mockResources.filter(res => 
    res.category === category && 
    res.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">{category}</h1>
      </div>

      <div className="p-6 pb-2 shrink-0">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder={`Search in ${category}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pt-2 pb-10 space-y-4 bg-gray-50">
        {filteredResources.length > 0 ? (
          filteredResources.map(res => (
            <div key={res.id} className="flex items-center justify-between p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-all hover:shadow-md cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${
                  res.type === 'pdf' ? 'bg-blue-50 text-blue-600' :
                  res.type === 'video' ? 'bg-purple-50 text-purple-600' :
                  'bg-orange-50 text-orange-600'
                }`}>
                  {res.type === 'pdf' ? <FileText size={24} /> :
                   res.type === 'video' ? <Video size={24} /> :
                   <Folder size={24} />}
                </div>
                <div>
                  <p className="font-bold text-[15px] text-gray-900 tracking-tight">{res.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 font-bold uppercase tracking-wider">{res.type === 'video' ? res.duration : res.size} • {res.date}</p>
                </div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  alert(res.type === 'video' ? 'Starting video playback...' : 'Downloading file...');
                }}
                className="p-2.5 text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors group-hover:scale-110 active:scale-95"
              >
                {res.type === 'video' ? <PlayCircle size={24} /> : <Download size={24} />}
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-[32px] border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">No resources found</h3>
            <p className="text-sm text-gray-500 font-medium">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

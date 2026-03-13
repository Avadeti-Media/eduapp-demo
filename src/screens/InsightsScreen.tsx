import React from 'react';
import { Role } from '../data/mockData';
import { mockInsightsData, InsightArticle, InsightVideo, InsightNews, InsightUpdate } from '../data/insightsData';
import { PlayCircle, ArrowRight, Clock, Newspaper, Megaphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface InsightsScreenProps {
  role: Role;
}

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6 mt-12 first:mt-2">
    <h2 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">{title}</h2>
    {subtitle && <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5 leading-relaxed">{subtitle}</p>}
  </div>
);

const InsightCard: React.FC<{ article: InsightArticle }> = ({ article }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden mb-6 flex flex-col hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="h-52 w-full relative overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-bold text-indigo-700 uppercase tracking-widest shadow-sm">
        {article.category}
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors">{article.title}</h3>
      <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-1 leading-relaxed font-medium">{article.description}</p>
      <button className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest hover:text-indigo-700 transition-colors self-start group-hover:translate-x-1 transition-transform">
        Read Article <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);

const VideoInsightCard: React.FC<{ video: InsightVideo }> = ({ video }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden mb-6 flex flex-col hover:shadow-md transition-all"
  >
    <div className="h-60 w-full relative group cursor-pointer overflow-hidden">
      <img src={video.thumbnail} alt={video.topic} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity group-hover:bg-black/40">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[32px] flex items-center justify-center border border-white/40 shadow-2xl transform transition-all group-hover:scale-110 group-hover:rotate-12">
          <PlayCircle size={40} className="text-white fill-white/20" />
        </div>
      </div>
      <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-3 py-2 rounded-2xl text-[10px] font-bold text-white flex items-center gap-2 shadow-sm uppercase tracking-widest">
        <Clock size={14} />
        {video.duration}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">{video.topic}</h3>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Speaker: <span className="text-indigo-600">{video.speaker}</span></p>
    </div>
  </motion.div>
);

const NewsCard: React.FC<{ news: InsightNews }> = ({ news }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="bg-white p-5 rounded-[32px] shadow-sm border border-gray-100 mb-4 flex gap-5 items-center hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
      <Newspaper size={28} />
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-gray-900 text-[15px] mb-1.5 leading-snug tracking-tight group-hover:text-indigo-600 transition-colors">{news.title}</h4>
      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        <span className="text-indigo-600">{news.category}</span>
        <span className="opacity-30">•</span>
        <span>{news.date}</span>
      </div>
    </div>
    <ArrowRight size={18} className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
  </motion.div>
);

const UpdateCard: React.FC<{ update: InsightUpdate }> = ({ update }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 mb-6 relative overflow-hidden group"
  >
    <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-50/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-100">
        <Megaphone size={18} />
      </div>
      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">{update.date}</span>
    </div>
    <h4 className="font-bold text-gray-900 mb-3 text-lg tracking-tight relative z-10">{update.title}</h4>
    <p className="text-sm text-gray-400 font-medium leading-relaxed relative z-10">{update.description}</p>
  </motion.div>
);

export const InsightsScreen: React.FC<InsightsScreenProps> = ({ role }) => {
  const isPrincipal = role === 'Principal';
  const isParent = role === 'Parent';

  return (
    <div className="bg-gray-50/50 h-full flex flex-col relative">
      <div className="p-6 pb-8 bg-white border-b border-gray-100 shrink-0 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Discovery</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">Insights</h1>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">
          {isPrincipal ? 'Institutional trends & updates' : 'Educational resources & guidance'}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10 scrollbar-hide">
        {isPrincipal && (
          <>
            <SectionHeader 
              title="Education Trends" 
              subtitle="Latest articles shaping the future of learning" 
            />
            {mockInsightsData.articles.map(article => (
              <InsightCard key={article.id} article={article} />
            ))}

            <SectionHeader 
              title="Institutional Insights" 
              subtitle="Global news and business updates" 
            />
            {mockInsightsData.news.map(item => (
              <NewsCard key={item.id} news={item} />
            ))}

            <SectionHeader 
              title="Platform Updates" 
              subtitle="New features and announcements" 
            />
            {mockInsightsData.updates.map(update => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </>
        )}

        {isParent && (
          <>
            <SectionHeader 
              title="Career Guidance" 
              subtitle="Expert advice for your child's future" 
            />
            {mockInsightsData.videos.map(video => (
              <VideoInsightCard key={video.id} video={video} />
            ))}

            <SectionHeader 
              title="Education Blogs" 
              subtitle="Featured articles on learning and development" 
            />
            {mockInsightsData.articles.map(article => (
              <InsightCard key={article.id} article={article} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

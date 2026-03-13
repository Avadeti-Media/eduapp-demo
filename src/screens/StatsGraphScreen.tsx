import React from 'react';
import { ChevronLeft, TrendingUp } from 'lucide-react';
import { ProgressChart } from '../components/ProgressChart';

interface StatsGraphScreenProps {
  title: string;
  onBack: () => void;
}

export const StatsGraphScreen: React.FC<StatsGraphScreenProps> = ({ title, onBack }) => {
  // Mock data for the graphs based on the title
  const data = title === 'Attendance' ? [
    { name: 'Week 1', value: 95 },
    { name: 'Week 2', value: 88 },
    { name: 'Week 3', value: 92 },
    { name: 'Week 4', value: 85 },
    { name: 'Week 5', value: 100 },
  ] : [
    { name: 'Math', value: 85 },
    { name: 'Science', value: 92 },
    { name: 'History', value: 78 },
    { name: 'English', value: 88 },
    { name: 'Art', value: 95 },
  ];

  const color = title === 'Attendance' ? '#10b981' : '#4f46e5'; // emerald for attendance, indigo for assignments

  return (
    <div className="bg-white h-full flex flex-col relative">
      <div className="p-6 pb-4 flex items-center gap-4 border-b border-gray-100 shrink-0">
        <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">{title} Overview</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10">
        <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 mb-10 shadow-inner">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">{title} Trends</h2>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
              <TrendingUp size={14} className="text-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">+5.2%</span>
            </div>
          </div>
          <div className="h-64">
            <ProgressChart 
              type="bar" 
              data={data} 
              dataKey="value" 
              nameKey="name" 
              colors={[color]}
            />
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">Detailed Breakdown</h3>
        <div className="space-y-4">
          {data.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors">
              <span className="font-bold text-[15px] text-gray-900 tracking-tight">{item.name}</span>
              <div className="flex items-center gap-4">
                <div className="w-24 bg-gray-100 rounded-full h-2 shadow-inner">
                  <div className="h-2 rounded-full shadow-sm" style={{ width: `${item.value}%`, backgroundColor: color }}></div>
                </div>
                <span className="text-xs font-bold w-10 text-right" style={{ color }}>{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

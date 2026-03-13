import React from 'react';

interface ChatBubbleProps {
  message: {
    id: number;
    sender: string;
    text: string;
  };
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex w-full mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
        isBot 
          ? 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm' 
          : 'bg-indigo-600 text-white rounded-tr-sm'
      }`}>
        {message.text}
      </div>
    </div>
  );
};

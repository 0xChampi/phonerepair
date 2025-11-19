'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Message sent: ${message}\n\nWe'll respond shortly!`);
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl border-none cursor-pointer group"
          style={{ background: 'linear-gradient(135deg, var(--lime-green), #65a30d)' }}
        >
          <span className="text-2xl">💬</span>
          <span className="text-white font-bold text-base hidden sm:inline">Chat with us</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div
            className="px-6 py-5 text-white flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, var(--lime-green), #65a30d)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                👋
              </div>
              <div>
                <div className="font-bold text-base">Phone Guys</div>
                <div className="text-xs text-white/90">We're online now!</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:bg-white/20 w-8 h-8 rounded-full transition-all border-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="p-6 h-64 overflow-y-auto bg-gray-50">
            <div className="mb-4">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800 mb-2">
                  👋 Hi there! Welcome to Phone Guys!
                </p>
                <p className="text-sm text-gray-800">
                  Have questions about repairs or pricing? We're here to help!
                </p>
                <div className="text-xs text-gray-500 mt-2">Just now</div>
              </div>
            </div>

            {/* Quick Options */}
            <div className="space-y-2 mt-4">
              <div className="text-xs text-gray-500 mb-2">Quick questions:</div>
              {[
                '💰 How much for screen repair?',
                '⏱️ How long does repair take?',
                '📍 Where are you located?',
                '🛡️ What warranty do you offer?',
              ].map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setMessage(question.replace(/^[^\s]+\s/, ''))}
                  className="block w-full text-left px-4 py-3 bg-white hover:bg-gray-100 rounded-xl text-sm text-gray-700 transition-all border border-gray-200 cursor-pointer"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-white border-none cursor-pointer transition-all hover:scale-105"
                style={{ background: 'var(--teal-green)' }}
              >
                Send
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              Typically replies in minutes
            </div>
          </form>
        </div>
      )}
    </>
  );
}

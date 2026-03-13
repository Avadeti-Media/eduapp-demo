import React, { useState } from 'react';
import { Mail, Lock, Phone, ChevronRight, Apple, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuthScreenProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMethod === 'phone' && !showOtp) {
      setShowOtp(true);
      return;
    }
    
    if (isLogin) {
      onLogin();
    } else {
      onSignup();
    }
  };

  return (
    <div className="bg-white h-full flex flex-col p-8 relative overflow-hidden">
      <div className="mt-6 mb-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-100"
        >
          <Sparkles size={24} className="text-white" />
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">
          {showOtp ? 'Enter OTP' : isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          {showOtp 
            ? 'We sent a code to your phone' 
            : isLogin 
              ? 'Sign in to continue your journey' 
              : 'Sign up to get started'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 flex-1">
        {!showOtp ? (
          <>
            <div className="flex bg-gray-50 p-1 rounded-2xl mb-6 border border-gray-100 shadow-inner">
              <button
                type="button"
                onClick={() => setAuthMethod('email')}
                className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${
                  authMethod === 'email' ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-gray-400'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setAuthMethod('phone')}
                className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest ${
                  authMethod === 'phone' ? 'bg-white text-indigo-600 shadow-md ring-1 ring-black/5' : 'text-gray-400'
                }`}
              >
                Phone
              </button>
            </div>

            <AnimatePresence mode="wait">
              {authMethod === 'email' ? (
                <motion.div 
                  key="email"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-3"
                >
                  <div className="relative group">
                    <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                      required
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="phone"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="relative group"
                >
                  <Phone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {isLogin && authMethod === 'email' && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:text-indigo-700">Forgot Password?</button>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-between gap-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <input 
                key={i}
                type="text" 
                maxLength={1}
                className="w-full aspect-square text-center text-3xl font-bold bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                required
              />
            ))}
          </div>
        )}

        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
        >
          {showOtp ? 'Verify & Continue' : authMethod === 'phone' ? 'Send OTP' : isLogin ? 'Sign In' : 'Sign Up'}
          <ChevronRight size={18} />
        </button>

        {!showOtp && (
          <>
            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-[9px] font-bold uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-sm active:scale-95">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all font-bold text-gray-700 shadow-sm active:scale-95">
                <Apple size={18} className="fill-current" />
                <span className="text-xs">Apple</span>
              </button>
            </div>
          </>
        )}
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-500 text-xs font-medium">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setShowOtp(false);
            }} 
            className="text-indigo-600 font-bold hover:underline tracking-tight"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

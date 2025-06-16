
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';

const PartnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/partner-signup');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background with running people */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url('/lovable-uploads/b2953ff8-805f-4a96-8ef3-557c12710651.png')`
          }}
        >
        </div>

        {/* DNA Helix Logo with "STEM FOR SOCIETY" text positioned as in the image */}
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* DNA Helix circular design matching the reference */}
          <div className="w-80 h-80 flex items-center justify-center">
            <div className="relative">
              {/* Outer DNA helix design */}
              <div className="w-64 h-64 flex items-center justify-center relative">
                {/* DNA strand design with flowing curves */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  {/* DNA helix strands */}
                  <path d="M50,50 Q100,25 150,50 Q100,75 50,100 Q100,125 150,150 Q100,175 50,200" 
                        stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
                  <path d="M150,50 Q100,25 50,50 Q100,75 150,100 Q100,125 50,150 Q100,175 150,200" 
                        stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none"/>
                  
                  {/* DNA base pairs */}
                  <g stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <line x1="70" y1="60" x2="130" y2="60"/>
                    <line x1="90" y1="80" x2="110" y2="80"/>
                    <line x1="70" y1="100" x2="130" y2="100"/>
                    <line x1="90" y1="120" x2="110" y2="120"/>
                    <line x1="70" y1="140" x2="130" y2="140"/>
                    <line x1="90" y1="160" x2="110" y2="160"/>
                  </g>
                  
                  {/* DNA nucleotides */}
                  <g fill="rgba(255,255,255,0.7)">
                    <circle cx="70" cy="60" r="4"/>
                    <circle cx="130" cy="60" r="4"/>
                    <circle cx="90" cy="80" r="4"/>
                    <circle cx="110" cy="80" r="4"/>
                    <circle cx="70" cy="100" r="4"/>
                    <circle cx="130" cy="100" r="4"/>
                    <circle cx="90" cy="120" r="4"/>
                    <circle cx="110" cy="120" r="4"/>
                    <circle cx="70" cy="140" r="4"/>
                    <circle cx="130" cy="140" r="4"/>
                    <circle cx="90" cy="160" r="4"/>
                    <circle cx="110" cy="160" r="4"/>
                  </g>
                </svg>
                
                {/* Center text exactly as in the image */}
                <div className="text-center z-10 bg-white/10 backdrop-blur-sm rounded-full p-8">
                  <div className="text-white text-3xl font-bold mb-1 tracking-wider">
                    STEM
                  </div>
                  <div className="text-white/90 text-base tracking-widest">
                    FOR SOCIETY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Partner Login Form with glass effect matching the reference */}
      <div className="w-full max-w-lg bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col justify-center px-12 py-16 relative">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Partner with us
            </h2>
            <p className="text-gray-700 text-base">
              Enter your credentials to proceed further
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl placeholder-gray-500 focus:bg-white/90 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm" 
              />
            </div>

            <div>
              <Input 
                type="password" 
                placeholder="Confirm Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl placeholder-gray-500 focus:bg-white/90 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm" 
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="remember" 
                  checked={rememberPassword} 
                  onCheckedChange={checked => setRememberPassword(checked as boolean)} 
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 bg-white/80 border-white/50" 
                />
                <label htmlFor="remember" className="text-sm text-gray-700 font-medium">
                  Remember Password
                </label>
              </div>
              <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Forget Password?
              </button>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-base tracking-wide transition-colors shadow-lg">
              LOGIN
            </Button>
          </form>

          {/* Divider */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/60 backdrop-blur-sm text-gray-600 rounded-full">or sign in with</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center hover:bg-white/90 transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <span className="text-gray-700 text-sm">
              Want to partner with us?{' '}
              <button 
                onClick={handleSignUp}
                className="text-blue-500 hover:text-blue-600 font-medium underline"
              >
                Sign up
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogin;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExploreProgramDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Navigate to sign up when implemented
    console.log('Navigate to sign up');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo and running people */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background with running people */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: `url('/lovable-uploads/0670081d-eef6-41c3-976e-be6532a261ec.png')`
          }}
        >
        </div>

        {/* DNA Helix Logo with "STEM FOR SOCIETY" text positioned as in the reference */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          {/* DNA Helix circular design matching the reference */}
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* DNA Helix Circle */}
            <div className="absolute inset-0 border-4 border-white/60 rounded-full">
              {/* DNA strands around the circle */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-16 border-l-4 border-r-4 border-white/50 rounded-full rotate-0"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-16 border-l-4 border-r-4 border-white/50 rounded-full rotate-45"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-16 border-l-4 border-r-4 border-white/50 rounded-full rotate-90"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-16 border-l-4 border-r-4 border-white/50 rounded-full rotate-135"></div>
            </div>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl font-bold mb-2 tracking-wider">STEM</h1>
              <p className="text-xl font-light tracking-widest">FOR SOCIETY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form with glass effect matching the reference */}
      <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl flex flex-col justify-center px-12 py-16 relative">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Partner with us
            </h2>
            <p className="text-gray-600 text-base">
              Enter your credentials to proceed further
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
              />
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="remember"
                  checked={rememberPassword}
                  onCheckedChange={(checked) => setRememberPassword(checked as boolean)}
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 bg-white/90 border-white/60"
                />
                <label htmlFor="remember" className="text-sm text-gray-600 font-medium">
                  Remember Password
                </label>
              </div>
              <button type="button" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
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
                <div className="w-full border-t border-gray-300/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/70 backdrop-blur-sm text-gray-500 rounded-full">or sign in with</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="w-14 h-14 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              <button className="w-14 h-14 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                <Mail className="w-6 h-6 text-blue-500" />
              </button>
              <button className="w-14 h-14 bg-white/90 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                <User className="w-6 h-6 text-blue-500" />
              </button>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Want to partner with us?{' '}
              <button onClick={handleSignUp} className="text-blue-500 hover:text-blue-600 font-medium underline">
                Sign up
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProgramDashboard;

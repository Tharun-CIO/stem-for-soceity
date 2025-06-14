
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const [userType, setUserType] = useState<'institution' | 'student' | 'individual'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const getTitleByUserType = () => {
    switch (userType) {
      case 'institution':
        return 'Partner with us';
      case 'student':
        return 'Login as Student';
      case 'individual':
        return 'Individual Login';
      default:
        return 'Login as Student';
    }
  };

  const getBottomTextByUserType = () => {
    switch (userType) {
      case 'institution':
        return { text: 'Want to partner with us?', link: 'Sign up' };
      case 'student':
        return { text: "Don't have an account?", link: 'Create Account' };
      case 'individual':
        return { text: "Don't have an account?", link: 'Sign up' };
      default:
        return { text: "Don't have an account?", link: 'Create Account' };
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - DNA Logo and Background */}
      <div className="flex-1 relative bg-gradient-to-br from-sky-300 via-sky-400 to-sky-500 overflow-hidden">
        {/* Cloud-like background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* DNA Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            {/* DNA Helix Design */}
            <div className="w-80 h-80 relative">
              <svg viewBox="0 0 320 320" className="w-full h-full">
                {/* DNA Helix strands */}
                <g className="animate-pulse">
                  {/* Left strand */}
                  <path
                    d="M80 40 Q120 80 80 120 Q40 160 80 200 Q120 240 80 280"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="8"
                    fill="none"
                    className="drop-shadow-lg"
                  />
                  {/* Right strand */}
                  <path
                    d="M240 40 Q200 80 240 120 Q280 160 240 200 Q200 240 240 280"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="8"
                    fill="none"
                    className="drop-shadow-lg"
                  />
                  {/* Connecting bars */}
                  {[60, 100, 140, 180, 220, 260].map((y, index) => (
                    <line
                      key={index}
                      x1="85"
                      y1={y}
                      x2="235"
                      y2={y}
                      stroke="rgba(30,58,138,0.7)"
                      strokeWidth="4"
                      className="drop-shadow-md"
                    />
                  ))}
                </g>
                
                {/* Central text */}
                <text
                  x="160"
                  y="140"
                  textAnchor="middle"
                  className="fill-white text-4xl font-bold tracking-wider drop-shadow-2xl"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  STEM
                </text>
                <text
                  x="160"
                  y="180"
                  textAnchor="middle"
                  className="fill-white text-lg font-medium tracking-wide drop-shadow-xl"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  FOR SOCIETY
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-white text-3xl md:text-4xl font-light tracking-wide drop-shadow-lg">
            Let's Innovate, Incubate and Impact the world together!
          </h1>
        </div>

        {/* Animated figures */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-400 to-green-300">
          <div className="absolute bottom-0 left-1/4 w-4 h-8 bg-red-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-0 left-1/2 w-4 h-8 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-0 right-1/4 w-4 h-8 bg-purple-400 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm flex flex-col justify-center px-8 py-12 relative">
        {/* User type selector */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setUserType('institution')}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all ${
                userType === 'institution'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Institution
            </button>
            <button
              onClick={() => setUserType('student')}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all ${
                userType === 'student'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setUserType('individual')}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-all ${
                userType === 'individual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Individual
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {getTitleByUserType()}
            </h2>
            <p className="text-gray-600 text-sm">
              Enter your credentials to proceed further
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberPassword}
                  onCheckedChange={(checked) => setRememberPassword(checked as boolean)}
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember Password
                </label>
              </div>
              <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
                Forget Password?
              </button>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm tracking-wide">
              LOGIN
            </Button>
          </form>

          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or sign in with</span>
              </div>
            </div>

            <div className="mt-4 flex justify-center space-x-3">
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">G</span>
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">✉</span>
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="text-xl">👤</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <span className="text-gray-600 text-sm">
              {getBottomTextByUserType().text}{' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                {getBottomTextByUserType().link}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

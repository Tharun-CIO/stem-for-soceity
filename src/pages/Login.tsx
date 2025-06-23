import React from 'react';
import Header from '@/components/Header';
import GridBackground from '@/components/GridBackground';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import SignupLayout from "@/components/ui/SignupLayout";

const Login = () => {
  return (
    <div className="min-h-screen w-full">
      <GridBackground>
        <Header />
        <SignupLayout
      title="Welcome Back!"
      subtitle="Login to continue your learning journey"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>
          <p className="text-gray-600 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white/80 rounded-xl"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/80 rounded-xl"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded-sm text-[#0389FF] focus:ring-[#0389FF]"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-[#0389FF] hover:text-[#0389FF]/80 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button className="w-full bg-[#0389FF] hover:bg-[#0389FF]/90 text-white rounded-xl">
            LOGIN
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#0389FF] hover:text-[#0389FF]/80 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="text-center text-sm text-gray-600 mt-8">
          — or sign in with —
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            G
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            L
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            F
          </button>
        </div>
      </div>
    </SignupLayout>
      </GridBackground>
    </div>
  );
};

export default Login;

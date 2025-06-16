
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleReload = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-2xl">
        {/* Robot Illustration */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/4e303a5c-e5bd-4d61-bfb4-a4740f482c58.png" 
            alt="404 Robot Error"
            className="w-full max-w-xs mx-auto"
          />
        </div>

        {/* Oops Text */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops!</h1>
        
        {/* 404 Numbers */}
        <div className="text-8xl font-bold text-blue-500 mb-6 leading-none">404</div>
        
        {/* Error Message */}
        <p className="text-gray-600 text-lg mb-8">Looks like you've got lost....</p>
        
        {/* Reload Button */}
        <Button 
          onClick={handleReload}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl text-lg w-full"
        >
          RELOAD
        </Button>
      </div>
    </div>
  );
};

export default NotFound;


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import GridBackground from "@/components/GridBackground";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#00549f]">
      <GridBackground>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/4e303a5c-e5bd-4d61-bfb4-a4740f482c58.png" 
              alt="404 Robot Error" 
              className="w-full max-w-lg mx-auto" 
            />
          </div>
        </div>
      </GridBackground>
    </div>
  );
};

export default NotFound;

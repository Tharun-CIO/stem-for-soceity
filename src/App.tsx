
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cover from "./pages/Cover";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import PsychologyCounselling from "./pages/PsychologyCounselling";
import CareerCounselling from "./pages/CareerCounselling";
import InstitutionPricing from "./pages/InstitutionPricing";
import Community from "./pages/Community";
import CampusAmbassador from "./pages/CampusAmbassador";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/psychology-counselling" element={<PsychologyCounselling />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/institution-pricing" element={<InstitutionPricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

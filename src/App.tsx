import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cover from "./pages/Cover";
import Login from "./pages/Login";
import PartnerLogin from "./pages/PartnerLogin";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import PsychologyCounselling from "./pages/PsychologyCounselling";
import CareerCounselling from "./pages/CareerCounselling";
import InstitutionPricing from "./pages/InstitutionPricing";
import Community from "./pages/Community";
import CampusAmbassador from "./pages/CampusAmbassador";
import CampusAmbassadorBooking from "./pages/CampusAmbassadorBooking";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import BookingFlow from "./pages/BookingFlow";
import CoursesBookingFlow from "./pages/CoursesBookingFlow";
import PsychologyBookingFlow from "./pages/PsychologyBookingFlow";
import InstitutionBookingFlow from "./pages/InstitutionBookingFlow";
import NotFound from "./pages/NotFound";
import SelectRole from "./pages/SelectRole";

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
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/partner-login" element={<PartnerLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/psychology-counselling" element={<PsychologyCounselling />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/institution-pricing" element={<InstitutionPricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/campus-ambassador" element={<CampusAmbassador />} />
          <Route path="/campus-ambassador-booking" element={<CampusAmbassadorBooking />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-article" element={<BlogArticle />} />
          <Route path="/booking-flow" element={<BookingFlow />} />
          <Route path="/courses-booking" element={<CoursesBookingFlow />} />
          <Route path="/psychology-booking" element={<PsychologyBookingFlow />} />
          <Route path="/institution-booking" element={<InstitutionBookingFlow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

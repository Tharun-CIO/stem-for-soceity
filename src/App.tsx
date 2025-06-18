
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Index from "./pages/Index";
import Cover from "./pages/Cover";
import Login from "./pages/Login";
import PartnerLogin from "./pages/PartnerLogin";
import InstitutionLogin from "./pages/InstitutionLogin";
import PartnerSignUp from "./pages/PartnerSignUp";
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
import ExploreProgramDashboard from "./pages/ExploreProgramDashboard";
import NotFound from "./pages/NotFound";
import SelectRole from "./pages/SelectRole";
import PartnerRole from "./pages/PartnerRole";
import CampusAmbassadorSignup from "./pages/CampusAmbassadorSignup";
import PartnerInstitutionSignup from "./pages/PartnerInstitutionSignup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingFallback />}>
        <TooltipProvider delayDuration={300} skipDelayDuration={0}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cover" element={<Cover />} />
              <Route path="/select-role" element={<SelectRole />} />
              <Route path="/partner-role" element={<PartnerRole />} />
              <Route path="/campus-ambassador-signup" element={<CampusAmbassadorSignup />} />
              <Route path="/partner-institution-signup" element={<PartnerInstitutionSignup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/partner-login" element={<PartnerLogin />} />
              <Route path="/institution-login" element={<InstitutionLogin />} />
              <Route path="/partner-signup" element={<PartnerSignUp />} />
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
              <Route path="/explore-program-dashboard" element={<ExploreProgramDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </Suspense>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

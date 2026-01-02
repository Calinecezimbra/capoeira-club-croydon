import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Instructor from "./pages/Instructor";
import Classes from "./pages/Classes";
import KidsClass from "./pages/KidsClass";
import AdultClass from "./pages/AdultClass";
import Events from "./pages/Events";
import KidsGraduations from "./pages/KidsGraduations";
import Graduations from "./pages/Graduations";
import SchoolCollaborations from "./pages/SchoolCollaborations";
import BreastCancerAwareness from "./pages/BreastCancerAwareness";
import JoinNow from "./pages/JoinNow";
import Contact from "./pages/Contact";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/instructor" component={Instructor} />
      <Route path="/classes" component={Classes} />
      <Route path="/kids-class" component={KidsClass} />
      <Route path="/adult-class" component={AdultClass} />
      <Route path="/events" component={Events} />
      <Route path="/kids-graduations" component={KidsGraduations} />
      <Route path="/graduations" component={Graduations} />
      <Route path="/school-collaborations" component={SchoolCollaborations} />
      <Route path="/breast-cancer-awareness" component={BreastCancerAwareness} />
      <Route path="/join-now" component={JoinNow} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

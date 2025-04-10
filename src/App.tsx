import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SDGList from "./pages/SDGList";
import SDG4Detail from "./pages/SDG4Detail";
import SDG1Detail from "./pages/SDG1Detail";
import SDG2Detail from "./pages/SDG2Detail";
import SDG3Detail from "./pages/SDG3Detail";
import SDG5Detail from "./pages/SDG5Detail";
import SDG6Detail from "./pages/SDG6Detail";
import SDG7Detail from "./pages/SDG7Detail";
import SDG8Detail from "./pages/SDG8Detail";
import SDG9Detail from "./pages/SDG9Detail";
import SDG10Detail from "./pages/SDG10Detail";
import SDG11Detail from "./pages/SDG11Detail";
import SDG12Detail from "./pages/SDG12Detail";
import SDG13Detail from "./pages/SDG13Detail";
import SDG14Detail from "./pages/SDG14Detail";
import SDG15Detail from "./pages/SDG15Detail";
import SDG16Detail from "./pages/SDG16Detail";
import SDG17Detail from "./pages/SDG17Detail";
import Tutorial from "./pages/Tutorial";
import Presentation from "./pages/Presentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Determine if we're in production mode to set the correct basename
const basename = import.meta.env.PROD ? "/scratch-sdg-tutorial" : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sdgs" element={<SDGList />} />
          <Route path="/sdg4" element={<SDG4Detail />} />
          <Route path="/sdg1" element={<SDG1Detail />} />
          <Route path="/sdg2" element={<SDG2Detail />} />
          <Route path="/sdg3" element={<SDG3Detail />} />
          <Route path="/sdg5" element={<SDG5Detail />} />
          <Route path="/sdg6" element={<SDG6Detail />} />
          <Route path="/sdg7" element={<SDG7Detail />} />
          <Route path="/sdg8" element={<SDG8Detail />} />
          <Route path="/sdg9" element={<SDG9Detail />} />
          <Route path="/sdg10" element={<SDG10Detail />} />
          <Route path="/sdg11" element={<SDG11Detail />} />
          <Route path="/sdg12" element={<SDG12Detail />} />
          <Route path="/sdg13" element={<SDG13Detail />} />
          <Route path="/sdg14" element={<SDG14Detail />} />
          <Route path="/sdg15" element={<SDG15Detail />} />
          <Route path="/sdg16" element={<SDG16Detail />} />
          <Route path="/sdg17" element={<SDG17Detail />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/presentation" element={<Presentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

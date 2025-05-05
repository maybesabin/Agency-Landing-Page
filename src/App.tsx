import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Hero from "./container/Hero";
import Pricing from "./container/Pricing";
import Services from "./container/Services";
import Testimonials from "./container/Testimonials";
import { cn } from "./lib/utils";

const App = () => {
  return (
    <div className="relative bg-black text-white w-full min-h-screen flex items-start justify-center xl:p-0 p-6">

      {/* Dot background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}>

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="lg:w-[80rem] w-full relative">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
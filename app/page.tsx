import Hero from "@/components/widgets/Hero";
import CoreTracks from "./components/widgets/CoreTracks";
import SpecializedTracks from "./components/widgets/SpecializedTracks";
import ProgramOutcome from "./components/widgets/ProgramOutcome";
import Footer from "./components/layout/Footer";



export default function Home() {
  return (
    <main>
    
      {/* Hero Section */}
      <Hero />
      {/* Core Tracks Section */}
      <CoreTracks />
      {/* Specialized Track */}
    <SpecializedTracks />
    {/* Outcome Section */}
    <ProgramOutcome />
    <Footer />
    </main>
  )
}

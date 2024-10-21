import LeftSection from "./comp/LeftSection/LeftSection";
import RightSection from "./comp/RightSection/RightSection";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 h-screen">
      {/* Grid Layout for Large and Small Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        
        {/* Left Section - Centered and Non-Scrollable */}
        <div className="lg:sticky lg:top-0 lg:h-full flex justify-center items-center">
          <LeftSection />
        </div>

        {/* Right Section - Scrollable */}
        <div className="lg:overflow-y-auto lg:h-full">
          <RightSection />
        </div>

      </div>
    </div>
  );
}

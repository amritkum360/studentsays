import Navbar from "../Navbar/Navbar";
import Reviews from "./comp/Reviews/Reviews";
import SchoolDetails from "./comp/SchoolDetail/SchoolDetails";

export default function SchoolPage() {
    return (
        <>
            <Navbar />
            {/* Adding margin below Navbar */}
            <div className="mt-8">
                <SchoolDetails />
            </div>
            {/* Adding margin between SchoolDetails and Reviews */}
            <div className="mt-12">
                <Reviews />
            </div>
        </>
    );
}
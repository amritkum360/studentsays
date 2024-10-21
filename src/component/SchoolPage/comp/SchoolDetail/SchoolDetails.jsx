export default function SchoolDetails() {
    const defaultImage = "schoollogo.avif"; // Placeholder for the default image
    
    return (
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-6xl mx-auto">
            {/* Container for logo and title */}
            <div className="flex items-start space-x-4 mb-6">
                <img
                    src={defaultImage} // Replace this with the actual image URL if available
                    alt="College Logo"
                    className="w-16 h-16 rounded-full border border-gray-200"
                />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Greenwood High School                    </h1>
                    <div className="text-blue-600">
                        <a href="#" className="hover:underline">
                            Guwahati, Assam
                        </a>
                    </div>
                </div>
            </div>

            {/* Question & Answer link */}
            <div className="mb-4">
                <a href="#" className="text-blue-500 hover:underline font-medium">
                    20+ Reviews
                </a>
            </div>

            {/* College details */}
            <div className="text-gray-700">
                <span className="font-semibold">Government</span> | Affiliated School of{' '}
                <a href="#" className="text-blue-600 hover:underline">
                    CBSE
                </a>
            </div>

            {/* Photos section
            <div className="mt-6">
                <a href="#" className="text-blue-500 hover:underline font-medium">
                    View Photos
                </a>
            </div> */}
        </div>
    );
}

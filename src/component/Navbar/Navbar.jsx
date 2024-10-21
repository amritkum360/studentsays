import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side: Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="logo.png" // Replace with actual logo URL
                            alt="Logo"
                            className="h-10 w-10"
                        />
                    </div>

                    {/* Center: Menu Items */}
                    <div className="hidden md:flex space-x-8">
                        {/* Use Link component for navigation */}
                        <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium">
                            Home
                        </Link>
                        <Link to="/school" className="text-gray-800 hover:text-blue-600 font-medium">
                            School Page
                        </Link>
                    </div>

                    {/* Right side: Buttons */}
                    <div className="flex space-x-4">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                            Add Review
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

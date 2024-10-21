export default function Reviews() {
    // Dummy array of reviews
    const reviews = [
        {
            id: 1,
            profileImage: "user.png",
            reviewerName: "John Doe",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 20, 2024",
            subject: "Great Infrastructure",
            rating: 4,
            review: "The infrastructure of the college is really good. The labs are well-equipped and the classrooms are spacious.",
        },
        {
            id: 2,
            profileImage: "user.png",
            reviewerName: "Jane Smith",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 18, 2024",
            subject: "Average Placement",
            rating: 3,
            review: "The placement opportunities could be better. However, the faculty is very supportive and provides guidance.",
        },
        {
            id: 3,
            profileImage: "user.png",
            reviewerName: "Alex Johnson",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 15, 2024",
            subject: "Good Faculty",
            rating: 5,
            review: "The faculty at Pandu College is amazing. They are experienced and always willing to help students.",
        },
        {
            id: 1,
            profileImage: "user.png",
            reviewerName: "John Doe",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 20, 2024",
            subject: "Great Infrastructure",
            rating: 4,
            review: "The infrastructure of the college is really good. The labs are well-equipped and the classrooms are spacious.",
        },
        {
            id: 2,
            profileImage: "user.png",
            reviewerName: "Jane Smith",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 18, 2024",
            subject: "Average Placement",
            rating: 3,
            review: "The placement opportunities could be better. However, the faculty is very supportive and provides guidance.",
        },
        {
            id: 3,
            profileImage: "user.png",
            reviewerName: "Alex Johnson",
            schoolName: "Greenwood High School, Guwahati",
            reviewedOn: "October 15, 2024",
            subject: "Good Faculty",
            rating: 5,
            review: "The faculty at Pandu College is amazing. They are experienced and always willing to help students.",
        }
    ];

    return (
        <div className="p-6 bg-white-50 max-w-6xl mx-auto space-y-6 mt-10">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 rounded-md shadow-md">
                    {/* Profile image and reviewer info */}
                    <div className="flex items-center space-x-4 mb-3">
                        <img
                            src={review.profileImage}
                            alt="Reviewer Profile"
                            className="w-12 h-12 rounded-full border border-gray-200"
                        />
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">{review.reviewerName}</h3>
                            <p className="text-sm text-gray-500">{review.schoolName}</p>
                            <p className="text-xs text-gray-400">Reviewed on {review.reviewedOn}</p>
                        </div>
                    </div>

                    {/* Review Subject and Rating */}
                    <div className="mb-3">
                        <h4 className="font-medium text-gray-700 text-md">{review.subject}</h4>
                        <p className="text-sm text-yellow-500">Rating: {review.rating}/5</p>
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-600 mb-4">{review.review}</p>

                    {/* Action buttons (Like, Dislike, Reply, Share) */}
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <button className="hover:text-blue-600">👍 Like</button>
                        <button className="hover:text-blue-600">👎 Dislike</button>
                        <button className="hover:text-blue-600">💬 Reply</button>
                        <button className="hover:text-blue-600">🔗 Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitReview from "./component/HomePage/comp/SubmitReview/SubmitReview";
import HomePage from "./component/HomePage/HomePage";
import SchoolPage from "./component/SchoolPage/SchoolPage";
import './index.css';

export default function App() {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for school page */}
        <Route path="/school" element={<SchoolPage />} />

        {/* You can add more routes like this */}
        {/* <Route path="/submit-review" element={<SubmitReview />} /> */}
      </Routes>
    </Router>
  );
}

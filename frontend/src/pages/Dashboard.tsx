import React from 'react';
import AvailableCoursesPanel from '../components/AvailableCoursesPanel';
import EnrolledCoursesPanel from '../components/EnrolledCoursesPanel';
import Announcements from '../components/Announcements';
import '../styles/Dashboard.css'; // Import CSS for Dashboard styling

const Dashboard: React.FC = () => {
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  if (!userId) {
    return <div>Please log in to view your dashboard.</div>; // Handle unauthenticated state
  }

  return (
    <div className="dashboard">
      <div className="available-courses-section">
        <AvailableCoursesPanel userId={userId} />
      </div>
      <div className="enrolled-courses-section">
        <EnrolledCoursesPanel userId={userId} /> {/* Only render if userId exists */}
      </div>
      <div className="announcements-section">
        <Announcements />
      </div>
    </div>
  );
};

export default Dashboard;

// src/components/EnrolledCoursesPanel.js
// src/components/EnrolledCoursesPanel.tsx
import React, { useState, useEffect } from 'react';
import ProgressPanel from './ProgressPanel';
import '../styles/EnrolledCoursesPanel.css';
import { log } from 'console';

interface Course {
  id: number;
  title: string;
  description: string;
}

interface EnrolledCoursesPanelProps {
  userId: string;
}

const EnrolledCoursesPanel: React.FC<EnrolledCoursesPanelProps> = ({ userId }) => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null); // State to track selected course

  console.log(enrolledCourses);
  
  useEffect(() => {
    // Fetch enrolled courses based on the userId
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}/enrollments`)
      .then(response => response.json())
      .then(data => setEnrolledCourses(data))
      .catch(error => console.error('Error fetching enrollments:', error));
  }, [userId]);

  const handleCourseClick = (courseId: number) => {
    setSelectedCourseId(courseId); // Set selected course ID when clicked
  };

  return (
    <div className="enrolled-courses-panel">
    <h3>Your Enrolled Courses</h3>
    <div className="courses-list">
      {enrolledCourses.length > 0 ? ( // Ensure enrolledCourses is not empty
        enrolledCourses.map(course => (
          <div key={course.id} className="course-card" onClick={() => handleCourseClick(course.id)}>
            <h4>{course.title}</h4>
            
            <p>{course.description}</p>
          </div>
        ))
      ) : (
        <p>No enrolled courses found.</p>
      )}
    </div>

    {selectedCourseId && (
      <div className="progress-panel-wrapper">
        <h3>Progress for Course ID: {selectedCourseId}</h3>
        <ProgressPanel courseId={selectedCourseId} /> {/* Pass courseId to ProgressPanel */}
      </div>
    )}
  </div>
  );
};

export default EnrolledCoursesPanel;

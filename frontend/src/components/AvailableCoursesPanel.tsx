// src/components/AvailableCoursesPanel.tsx
import React, { useState, useEffect } from 'react';
import '../styles/AvailableCoursesPanel.css'; // Import CSS for AvailableCoursesPanel styling

interface Course {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
}

interface AvailableCoursesPanelProps {
  userId: string; // Pass userId as a prop
}

const AvailableCoursesPanel: React.FC<AvailableCoursesPanelProps> = ({ userId }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<{ [key: number]: boolean }>({}); // Object to track loading for each course

  // Fetch available courses from API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/courses`)
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  // Function to handle course enrollment
  const handleEnroll = async (courseId: number) => {
    console.log(userId, courseId);
    
    setLoading(prevLoading => ({ ...prevLoading, [courseId]: true })); // Set loading state for the specific course

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/enroll/${userId}?course_id=${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to enroll in course');
      }

      const data = await response.json();
      alert(`Successfully enrolled in course: ${data.enrollment.course_id}`);
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Error enrolling in course');
    } finally {
      setLoading(prevLoading => ({ ...prevLoading, [courseId]: false })); // Reset loading state for the specific course
    }
  };

  return (
    <div className="available-courses-panel">
      <h2>Available Courses</h2>
      {courses.length > 0 ? (
        courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Difficulty: {course.difficulty}</p>
            <p>Duration: {course.duration}</p>
            <button
              onClick={() => handleEnroll(course.id)}
              disabled={loading[course.id]} // Disable button while enrolling for this specific course
            >
              {loading[course.id] ? 'Enrolling...' : 'Start'}
            </button>
          </div>
        ))
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
};

export default AvailableCoursesPanel;

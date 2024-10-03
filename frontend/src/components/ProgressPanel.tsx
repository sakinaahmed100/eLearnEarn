// src/components/ProgressPanel.tsx
import React, { useEffect, useState } from 'react';
import "../styles/ProgressPanel.css"

interface ProgressPanelProps {
  courseId: number;
}

const ProgressPanel: React.FC<ProgressPanelProps> = ({ courseId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch the progress for the specific courseId
    fetch(`${process.env.REACT_APP_API_URL}/progress/${courseId}`)
      .then(response => response.json())
      .then(data => setProgress(data.progress))
      .catch(error => console.error('Error fetching progress:', error));
  }, [courseId]);

  return (
    <div className="progress-panel">
      <h4>Progress: {progress}%</h4>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressPanel;

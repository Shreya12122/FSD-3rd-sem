import React from 'react';
import ReactDOM from 'react-dom/client';

const Student = ({ name, course, marks }) => {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
};

const App = () => {
  const students = [
    { name: 'Anita Sharma', course: 'Web Development', marks: 92 },
    { name: 'Rahul Verma', course: 'Data Science', marks: 88 },
    { name: 'Priya Gupta', course: 'UI/UX Design', marks: 95 }
  ];

  return (
    <div className="app-shell">
      <div className="card-container">
        <h1>Experiment 7: React Components with Props</h1>
        <p style={{ marginBottom: '20px', color: '#5a6c7d' }}>
          Each student is rendered through the Student component with different props.
        </p>
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
};

export { Student, App };
export default App;

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

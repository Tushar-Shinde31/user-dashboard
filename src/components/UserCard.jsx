// Import core React and memo utility to prevent unnecessary re-renders
import React from 'react';
// Import icons used in the UI
import { Mail, Building } from 'lucide-react';
// Import styles scoped to this component
import '../styles/UserCard.css';

// Functional component wrapped in React.memo to improve performance
const UserCard = React.memo(({ user }) => {
  return (
    <div className="user-card">
      {/* Display the user's name */}
      <h3 className="user-name">{user.name}</h3>

      {/* Email section with icon and label */}
      <div className="user-info">
        <Mail className="user-info-icon" />
        <span className="user-info-text">
          <span className="user-info-label">Email:</span> {user.email}
        </span>
      </div>

      {/* Company section with building icon */}
      <div className="user-info">
        <Building className="user-info-icon" />
        <span className="user-info-text">
          <span className="user-info-label">Company:</span> {user.company.name}
        </span>
      </div>
    </div>
  );
});

// Exporting the memoized component for reuse across the app
export default UserCard;

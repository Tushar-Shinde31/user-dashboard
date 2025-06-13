import React from 'react';

const UserCard = React.memo(({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px' }}>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
});

export default UserCard;

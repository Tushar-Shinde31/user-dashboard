// Import React hooks and icons
import React, { useEffect, useState, useMemo } from 'react';
import { Search, Loader2, AlertCircle } from 'lucide-react';

// Import a reusable card component to display user details
import UserCard from './components/UserCard';
// Global styles for layout and theming
import './styles/App.css';

const App = () => {
  // State to hold user data, loading flag, error message, and search input
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // Fetch user data on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Memoized filter: returns users matching the search input
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // Show loading indicator
  if (loading) return (
    <div className="loading-text">
      <Loader2 className="animate-spin" size={24} />
      <p>Loading users...</p>
    </div>
  );

  // Show error message if fetch fails
  if (error) return (
    <div className="error-text">
      <AlertCircle size={24} />
      <p>Error: {error}</p>
    </div>
  );

  // Main UI layout
  return (
    <div className="app-container">
      <h1 className="app-title">User Dashboard</h1>

      {/* Search field */}
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Render filtered users */}
      <div className="users-grid">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;

import React from 'react';

const AdminPanel = () => {
  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <p>You can manage your website content from here.</p>
      <ul>
        <li><a href="/admin/posts">Manage Posts</a></li>
        <li><a href="/admin/users">Manage Users</a></li>
        <li><a href="/admin/settings">Site Settings</a></li>
      </ul>
    </div>
  );
};

export default AdminPanel;

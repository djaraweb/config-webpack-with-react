import React from "react";

export const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>
        <img
          className="img-thumbnail"
          src={user.avatar}
          style={{ width: 50 }}
          alt={user.last_name}
        />
      </td>
    </tr>
  );
};

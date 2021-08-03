import React from "react";
import { useUsers } from "@hooks/useUsers";
import { UserRow } from "@components/UserRow";

export const UsersPage = () => {
  const { users } = useUsers();
  return (
    <div className="mt-5">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <UserRow key={item.email} user={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

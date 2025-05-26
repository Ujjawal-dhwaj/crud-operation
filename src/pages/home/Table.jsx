import React, { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/");
        setUsers(response.data.reverse());
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const deleteRecord = (id) => {
    let checkpermission = window.confirm("Are you sure!!");
    if (checkpermission) {
      axios
        .delete(`http://localhost:5000/api/delete/${id}`)
        .then((res) => {
          console.log("record deleted successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log("error deleting record");
        });
    }
  };


  const handleEditClick = async (user) => {
    const newName = window.prompt("Enter new name:", user.name);
    const newEmail = window.prompt("Enter new email:", user.email);
  
    if (newName === null || newEmail === null) return;
  
    try {
      const response = await axios.put(
        `http://localhost:5000/api/update/${user._id}`,
        { name: newName, email: newEmail }
      );
        setUsers(
        users.map((u) => (u._id === user._id ? response.data : u))
      );
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  
 
  return (
    <div className="margin-100">
      
      <table className="table-container ">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id || index}>
                <td>{index + 1}</td>
                <td data-label="Full Name">{user.name}</td>
                <td data-label="Email Address">{user.email}</td>
                <td data-label="Email Address">
                  
                <i 
                    onClick={() => handleEditClick(user)} 
                    className="fa fa-edit"
                  ></i>  &nbsp; &nbsp;
                  <i
                    onClick={() => deleteRecord(user._id)}
                    className="fa fa-trash"
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

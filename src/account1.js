import React, { useState } from "react";
import Header from "../header/header";

export default function StudentManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Initialize with sample JSON data
  const [students, setStudents] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      email: "john.doe@example.com",
      grade: "A",
      address: "123 Main St",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      email: "jane.smith@example.com",
      grade: "B",
      address: "456 Oak Rd",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    grade: "",
    address: "",
  });

  const handleCreateClick = () => {
    // Clear editing state if adding a new student
    setEditingIndex(null);
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      grade: "",
      address: "",
    });
    setShowForm(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.age.toString().trim() ||
      !formData.email.trim() ||
      !formData.grade.trim() ||
      !formData.address.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingIndex !== null) {
      // Update existing student record
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = formData;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      // Add new student to the list
      setStudents([...students, formData]);
    }

    // Reset form and hide it
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      grade: "",
      address: "",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(students[index]);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      setStudents(students.filter((_, i) => i !== index));
      // If currently editing the deleted student, cancel edit mode.
      if (editingIndex === index) {
        setEditingIndex(null);
        setShowForm(false);
      }
    }
  };

  return (
    <div>
      <Header />
      <h1>Student Management</h1>
      <button onClick={handleCreateClick}>Add Student</button>

      {showForm && (
        <div>
          <h2>{editingIndex !== null ? "Edit Student Details" : "Enter Student Details"}</h2>
          <form onSubmit={handleFormSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <br />

            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <br />

            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <br />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <br />

            <label>Grade:</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              required
            />
            <br />

            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* Table to display student details */}
      {students.length > 0 && (
        <div>
          <h2>Student List</h2>
          <table border="1">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Grade</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.grade}</td>
                  <td>{student.address}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* JSON Output */}
         
        </div>
      )}
    </div>
  );
}

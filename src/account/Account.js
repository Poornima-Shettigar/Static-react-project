import React, { useState, useEffect } from "react";
import Header from "../header/header";
import axios from "axios";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function Account() {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    grade: "",
    address: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://91.203.132.60:9080/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleCreateClick = () => {
    setEditingIndex(null);
    setFormData({
      first_name: "",
      last_name: "",
      age: "",
      email: "",
      grade: "",
      address: "",
    });

    setShowForm(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.age || !formData.email || !formData.grade || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (editingIndex !== null) {
        const studentId = students[editingIndex].id;
        const response = await axios.put(`http://91.203.132.60:9080/api/students/${studentId}`, formData);
        setStudents((prevStudents) => prevStudents.map((student, index) => (index === editingIndex ? response.data : student)));
      } else {
        const response = await axios.post("http://91.203.132.60:9080/api/students", formData);
        setStudents((prevStudents) => [...prevStudents, response.data]);
      }
    } catch (error) {
      console.error("Error saving student data:", error);
    }
      fetchStudents();

    setFormData({
      first_name: "",
      last_name: "",
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

  const handleDelete = async (index) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const studentId = students[index].id;
        await axios.delete(`http://91.203.132.60:9080/api/students/${studentId}`);
        setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
      } catch (error) {
        console.error("Error deleting student:", error);
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
            <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} required />
            <br />
            <label>Last Name:</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} required />
            <br />
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
            <br />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <br />
            <label>Grade:</label>
            <input type="text" name="grade" value={formData.grade} onChange={handleInputChange} required />
            <br />
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

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
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id || index}>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.grade}</td>
                  <td>{student.address}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}><FaPencilAlt /></button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}><FaTrash /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No student records available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

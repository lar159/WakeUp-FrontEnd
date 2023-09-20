import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCreateUser = (values) => {
    axios
      .post("http://localhost:3001/api/createUser", values)
      .then((response) => {
        setUsers([...users, response.data]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:3001/api/user/${userId}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (values) => {
    axios
      .put(`http://localhost:3001/api/user/${editingUser._id}`, values)
      .then((response) => {
        const updatedUsers = users.map((user) =>
          user._id === editingUser._id ? response.data : user
        );
        setUsers(updatedUsers);
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    role: Yup.string().required("Role is required"),
    state: Yup.boolean(),
  });

  const handleShowEditModal = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleCheckboxChange = (e, userId) => {
    const updatedUsers = users.map((user) =>
      user._id === userId ? { ...user, state: e.target.checked } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="container table-responsive">
      <h1>Users</h1>
      <Button className="btn btn-primary mt-2" onClick={() => setShowModal(true)}>
        + Add User
      </Button>

      <table className="table text-center mt-4 border">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Role</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${user._id}`}
                  label=""
                  checked={user.state}
                  onChange={(e) => handleCheckboxChange(e, user._id)}
                />
              </td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleShowEditModal(user)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              email: "",
              role: "",
              state: true, // Valor predeterminado para el estado
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleCreateUser(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="User name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="User email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="role">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    isInvalid={touched.role && !!errors.role}
                  >
                    <option value="">Select role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.role}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>Status</Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch-state"
                    label={`User status: ${values.state ? "Active" : "Inactive"}`}
                    name="state"
                    checked={values.state}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add User
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Formik
              initialValues={{
                name: editingUser.name,
                email: editingUser.email,
                role: editingUser.role,
                state: editingUser.state, // Agregamos el estado actual
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleUpdateUser(values);
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="User name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="User email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      isInvalid={touched.role && !!errors.role}
                    >
                      <option value="">Select role</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.role}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="state">
                    <Form.Label>Status</Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch-state"
                      label={`User status: ${values.state ? "Active" : "Inactive"}`}
                      name="state"
                      checked={values.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              )}
            </Formik>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserTable;

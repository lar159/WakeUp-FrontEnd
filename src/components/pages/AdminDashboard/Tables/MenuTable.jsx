import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

function MenuTable() {
  const [menus, setMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/menus")
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCreateMenu = (values) => {
    axios
      .post("http://localhost:3001/api/createMenus", values)
      .then((response) => {
        setMenus([...menus, response.data]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteMenu = (menuId) => {
    axios
      .delete(`http://localhost:3001/api/menu/${menuId}`)
      .then(() => {
        const updatedMenus = menus.filter((menu) => menu._id !== menuId);
        setMenus(updatedMenus);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleUpdateMenu = (values) => {
    axios
      .put(`http://localhost:3001/api/menu/${editingMenu._id}`, values)
      .then((response) => {
        const updatedMenus = menus.map((menu) =>
          menu._id === editingMenu._id ? response.data : menu
        );
        setMenus(updatedMenus);
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
    price: Yup.number()
      .required("Price is required")
      .min(0.01, "Price must be greater than zero"),
    detail: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    category: Yup.string().required("Category is required"),
  });

  const handleShowEditModal = (menu) => {
    setEditingMenu(menu);
    setShowEditModal(true);
  };

  return (
    <div className="container table-responsive">
      <h1>Menus</h1>
      <Link className="btn btn-primary mt-2" onClick={() => setShowModal(true)}>
        + Add Product
      </Link>

      <table className="table text-center mt-4 border">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu._id}>
              <td>{menu._id}</td>
              <td>{menu.name}</td>
              <td>${menu.price}</td>
              <td>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${menu._id}`}
                  label=""
                  checked={menu.state}
                  readOnly
                />
              </td>
              <td>{menu.detail}</td>
              <td>{menu.category}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleShowEditModal(menu)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteMenu(menu._id)}
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
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              name: "",
              state: true,
              price: 0,
              detail: "",
              category: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleCreateMenu(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>Status</Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Product status"
                    name="state"
                    checked={values.state}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Product price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    isInvalid={touched.price && !!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="detail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Product description"
                    name="detail"
                    value={values.detail}
                    onChange={handleChange}
                    isInvalid={touched.detail && !!errors.detail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.detail}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product category"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    isInvalid={touched.category && !!errors.category}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.category}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingMenu && (
            <Formik
              initialValues={{
                name: editingMenu.name,
                state: editingMenu.state,
                price: editingMenu.price,
                detail: editingMenu.detail,
                category: editingMenu.category,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleUpdateMenu(values);
              }}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Product name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={touched.name && !!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="state">
                    <Form.Label>Status</Form.Label>
                    <Form.Check
                      type="switch"
                      id="custom-switch-state"
                      label={`Product status: ${
                        values.state ? "in-stock" : "out-stock"
                      }`}
                      name="state"
                      checked={values.state}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Product price"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      isInvalid={touched.price && !!errors.price}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.price}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="detail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Product description"
                      name="detail"
                      value={values.detail}
                      onChange={handleChange}
                      isInvalid={touched.detail && !!errors.detail}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.detail}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Product category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      isInvalid={touched.category && !!errors.category}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.category}
                    </Form.Control.Feedback>
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

export default MenuTable;


import "./Dashboard.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditado, setUsuarioEditado] = useState(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: '',
    correo: '',
    rol: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const obtenerUsuarios = () => {
    axios.get('/api/usuarios') // Cambia la URL a la ruta correcta de tu API
      .then((response) => {
        setUsuarios(response.data); // Actualizar el estado con los datos recibidos
      })
      .catch((error) => {
        console.error('Error al obtener datos de usuarios:', error);
      });
  };

  const agregarUsuario = () => {
    axios.post('/api/usuarios', nuevoUsuario) // Cambia la URL a la ruta correcta de tu API
      .then(() => {
        obtenerUsuarios();
        setNuevoUsuario({ nombre: '', correo: '', rol: '' });
        setShowModal(false); // Cerrar el modal después de agregar un usuario
      })
      .catch((error) => {
        console.error('Error al agregar usuario:', error);
      });
  };

  const editarUsuario = () => {
    axios.put(`/api/usuarios/${usuarioEditado.id}`, usuarioEditado) // Cambia la URL a la ruta correcta de tu API
      .then(() => {
        obtenerUsuarios();
        setUsuarioEditado(null);
      })
      .catch((error) => {
        console.error('Error al editar usuario:', error);
      });
  };

  const borrarUsuario = (id) => {
    axios.delete(`/api/usuarios/${id}`) // Cambia la URL a la ruta correcta de tu API
      .then(() => {
        obtenerUsuarios();
      })
      .catch((error) => {
        console.error('Error al borrar usuario:', error);
      });
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Agregar Usuario
      </Button>
      <table className="table table-bordered table-hover">
        {/* ... Código de la tabla existente */}
      </table>
      {usuarioEditado && (
        <div>
          {/* ... Código del modal de edición existente */}
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nuevo Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={nuevoUsuario.nombre}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="correo">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Correo Electrónico"
                value={nuevoUsuario.correo}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="rol">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rol"
                value={nuevoUsuario.rol}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarUsuario}>
            Agregar Usuario
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;

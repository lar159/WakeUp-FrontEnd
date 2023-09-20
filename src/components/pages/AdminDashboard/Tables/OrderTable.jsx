import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Llama a tu endpoint de API para obtener todas las órdenes
    axios
      .get("http://localhost:3001/api/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditStatus = (orderId, newStatus) => {
    // Llama a tu endpoint de API para actualizar el estado de la orden
    axios
      .put(`http://localhost:3001/api/orders/${orderId}`, { state: newStatus })
      .then(() => {
        // Actualiza el estado local de la orden
        const updatedOrders = orders.map((order) =>
          order._id === orderId ? { ...order, state: newStatus } : order
        );
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Orders</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Menu</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user._id}</td> {/* Suponiendo que tienes el nombre del usuario en la propiedad 'name' */}
              <td>{order.menu._id}</td> {/* Suponiendo que tienes el nombre del menú en la propiedad 'name' */}
              <td>{order.state}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleEditStatus(order._id, "completed")}
                >
                  Mark as Completed
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleEditStatus(order._id, "pending")}
                >
                  Mark as Pending
                </Button>
                {/* Puedes agregar más botones según tus necesidades para cambiar el estado */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;

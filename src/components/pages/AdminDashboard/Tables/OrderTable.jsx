import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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
              <td>{order.user._id}</td> 
              <td>{order.menu._id}</td> 
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
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;

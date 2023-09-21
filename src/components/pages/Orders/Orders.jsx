import { useState, useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrdersFromDatabase = async () => {
    try {

      const response = await fetch('URL_DE_TU_API_PARA_OBTENER_PEDIDOS');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      }
    } catch (error) {
      console.error('Error al obtener los pedidos', error);
    }
  };

  useEffect(() => {

    fetchOrdersFromDatabase();
  }, []);

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <li key={index}>
              {order.productName} - Cantidad: {order.quantity}

            </li>
          ))
        ) : (
          <li>No hay órdenes</li>
        )}
      </ul>

    </div>
  );
}

export default Orders;
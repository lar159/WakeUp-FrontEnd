import MenuTable from "../AdminDashboard/Tables/MenuTable";
import UserTable from "../AdminDashboard/Tables/UserTable";
import OrdersTable from "../AdminDashboard/Tables/OrderTable";

function Dashboard() {
  return (
    <>
      <MenuTable />
      <UserTable />
      <OrdersTable />
    </>
  )
}

export default Dashboard
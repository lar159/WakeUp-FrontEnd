import "./Dashboard.css"
import { Link } from 'react-router-dom';
import Axios from 'axios'

function Dashboard() {
  
  return (
    <div>
      <Link className="btn btn-primary mt-2" to="">+add menu</Link>
      <table className="table text-center mt-4 border">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">State</th>
            <th scope="col">Detail</th>
            <th scope="col">Category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">Change State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Coffee</th>
            <th>$13</th>
            <th>in-stock</th>
            <th>Cup of coffee</th>
            <th>cold-drink</th>
            <th>
              <Link className="btn btn-warning">Update</Link>
            </th>
            <th>
              <Link className="btn btn-danger">Delete</Link>
            </th>
            <th>
              <Link className="btn btn-success">Change</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
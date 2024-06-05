import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // Sample data for the table
  const items = [
    { id: 1, name: 'Item 1', description: 'This is the description for item 1.' },
    { id: 2, name: 'Item 2', description: 'This is the description for item 2.' },
    { id: 3, name: 'Item 3', description: 'This is the description for item 3.' },
    { id: 4, name: 'Item 4', description: 'This is the description for item 4.' },
  ];

  return (
    <div style={{ backgroundImage: "linear-gradient(to right, #00d5ff, #0095ff, rgba(93,0,255,0.555))" }} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <div className="container bg-white p-5 rounded shadow-lg" style={{ maxWidth: '80%' }}>
        <h1 className="mb-4 text-primary">Welcome to the Dashboard</h1>
        <p className="mb-4">You have successfully logged in! Here is a list of items:</p>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to='/login' className="btn btn-danger mt-4">Logout</Link>
      </div>
    </div>
  );
}

export default Home;
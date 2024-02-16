import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistrations = () => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    // Use an effect to fetch data when the component mounts
    if (res === null) {
      axios.get('http://localhost:8080/retrive', {}).then((response) => {
        setRes(response.data);
        console.log(response.data);
      });
    }
  }, [res]); // Ensure useEffect runs only once when the component mounts

  return (
    <div>
      <center>
      <h1>The Registrations Data</h1>
      <table border="1" style={{ width: '75%', alignItems: 'center' , alignContent:'center' , color:'black', background:'skyblue'}} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {res !== null ? (
            res.map((register) => (
              <tr>
                <td>{register.name}</td>
                <td>{register.email}</td>
                <td>{register.role}</td>
                <td>{register.password}</td>
                <td><button>Delete</button></td>
                <td><button>Update</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      </center>
    </div>
    
  );
};

export default FetchRegistrations;
// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChefList.css';

const ChefList = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/Chefs')
      .then(response => {
        setChefs(response.data);
      })
      .catch(error => {
        console.error('Error fetching chefs: ', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Chef Booking System</h1>
      <div className="row">
        {chefs.map(chef => (
          <div className="col-md-4" key={chef._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{chef.name}</h5>
                <p className="card-text">Specialty: {chef.specialty}</p>
                <p className="card-text">Availability: {chef.availability}</p>
                <button className="btn btn-primary">Book Chef</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefList;

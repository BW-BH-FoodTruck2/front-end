import React, { useEffect, useState } from "react";
import ATruckCard from './ATruckCard'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import login from "../components/Login"

export default function TruckList() {
    const [trucks, setTrucks] = useState([])
    useEffect(() => {
      axiosWithAuth()
          .get('https://food-truck-trackr.herokuapp.com/api/trucks')
          .then(response => {
            console.log(response.data)
            setTrucks(response.data)
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }, []);

    return (
        <section className="character-list">
          {trucks.map(truck => (
         <ATruckCard
			
         image={truck.imageURL}
         key={truck.id}
         name={truck.truckName}
         cuisine={truck.cuisineType}
          />
          ))}
        </section>
      );
    }


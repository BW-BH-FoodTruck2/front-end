import React, { useEffect, useState } from "react";
import ATruckCard from './ATruckCard'
import axios from 'axios'
export default function TruckList() {
    const [trucks, setTrucks] = useState([])
    useEffect(() => {
        axios
          .get('')
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

         key={truck.id}
         name={truck.name}
         location={truck.location}
          />
          ))}
        </section>
      );
    }
    
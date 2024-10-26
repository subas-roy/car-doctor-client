import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl text-orange-500 font-bold">Services</h3>
        <h2 className="text-5xl">Services</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          services.map(service => <ServiceCard key={service._id} service={service}/>)
        }
      </div>
    </div>
  );
};

export default Services;
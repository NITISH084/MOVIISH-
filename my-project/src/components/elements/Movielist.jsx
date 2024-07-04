import React, { useEffect } from 'react';
import Card from './Card';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Movielist = ({ title, data }) => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS to apply animations
  }, [data]); // Refresh AOS whenever `data` changes

  return (
    <div className="px-8 font-playfair aos-item"  data-aos="fade-down">
      <p className="text-3xl text-white font-semibold
       py-3">{title} Movies</p>
      <div className="flex overflow-x-auto overflow-hidden no-scrollbar cursor-pointer " >
        <div className="flex items-center space-x-4  ">
          {data && data.map((info) => (
            <Card key={info.id} data={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;

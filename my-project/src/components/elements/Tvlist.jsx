import Card from "./Card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const Tvlist = ({ title, data }) => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS to apply animations
  }, [data]); // Refresh AOS whenever `data` changes

  const isscroll = useSelector((state) => state.userfunctionalities.isscroll);
  return (
    <div className="px-8 font-playfair aos-item"  data-aos="fade-down">
      <p className="text-3xl text-white font-semibold py-3">{title} TV Series </p>
      <div className=" flex overflow-x-auto overflow-hidden scrollbar-hide  cursor-pointer ">
        <div className="flex items-center space-x-4" >
          {data &&
            data.map((info) => (
              <>
                <Card key={info.id} data={info} />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Tvlist;

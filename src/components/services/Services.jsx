import "./services.css";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import PlayStationModelContainer from "./console/PlayStationModelContainer";
import PlayStationModelContainerTwo from "./mug/PlayStationModelContainerTwo";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVeriant = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const listVeriant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Branding",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "SEO",
    counter: 46,
  },
];

const Services = () => {
  const [currentId, setCurrentId] = useState(1)
  const ref = useRef()
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h2 variants={textVeriant} initial="initial" animate={isInView ? "animate" : "initial"} className="sTitle">How do i help?</motion.h2>
        <motion.div variants={listVeriant} initial="initial" animate={isInView ? "animate" : "initial"} className="serviceList">
          {services.map((service) => (
            <div onClick={()=> setCurrentId(service.id)} key={service.id} className="service">
              <div className="serviceIcon">
                <img src={service.img} alt="not found" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Products</h3>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Project Completed" />
          <Counter from={0} to={72} text="Happy Client" />
        </div>
      </div>
      <div className="sSection right">
        {currentId === 1 ? <ComputerModelContainer /> : currentId === 2 ? <PlayStationModelContainer /> :  <PlayStationModelContainerTwo />}
      </div>
    </div>
  );
};

export default Services;

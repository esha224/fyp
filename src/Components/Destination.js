/*
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";

import "./DestinationStyles.css";*/
import DestinationData from "./DestinationData";
import Mountain2 from "../assets/8.jpg";
import Mountain1 from "../assets/7.jpg";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Product LineUp</h1>
      <p>This is my destination page </p>
      <DestinationData
        className="first-des"
        heading="Suzuki Bolan"
        text="The exterior of the Suzuki Bolan is a fairly boxy design. The flat
      front fascia features square headlights with a rectangular styled
      black grille and rectangular fog lights integrated into the black
      bumper. The rear end of the Bolan features rectangular stacked
      taillights with a black bumper. The overall exterior of the Bolan is
      very tall, square and fairly van like"
        img1={Mountain1}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Suzuki Alto"
        text="The aerodynamic design with unique lines and curves gives a young and vibrant look. while the headlamps in a bold design instantly grab your attention. The aesthetically designed door panels and irresistible stylish back accentuated the richness of the sharp design as well as give the car a lively appearance."
        img1={Mountain2}
      />
    </div>
  );
};

export default Destination;

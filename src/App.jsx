import { useState } from "react";
import { motion } from "framer-motion";


import Starfield from 'react-starfield';


const App = () => {
  return (
    <Starfield
        starCount={1000}
        starColor={[256, 256, 256]}
        speedFactor={0.05}
        backgroundColor="black"
    />
  );
};
export default App;
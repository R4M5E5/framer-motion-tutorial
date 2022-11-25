import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {

    const [xValue, setXValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);

    function onClick() {
        setXValue(Math.random()*500 - 250);
        setRotateValue(Math.random()*360);
    }

    return (
        <motion.div
            animate={{
                x: xValue,
                rotate : rotateValue,
            }}
            transition={{
                duration : 1,
                type : 'spring',
                bounce : 0.6
            }}
            onClick={onClick}
            className="square"
        />
    );
}

export default App;

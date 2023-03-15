import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;

  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShowing = () => setIsShowing((prev) => !prev);
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click me</button>
      <AnimatePresence>
        {isShowing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          ></Box>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

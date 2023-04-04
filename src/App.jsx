import React, { useState } from 'react'
import styled from 'styled-components'
import Tags from './components/tags/Tags';
import Timer from './components/tags/timer/Timer';
import Modal from './components/tags/modal/Modal';
import { FaCog } from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }
  const onOpen = () => {
    setIsOpen(true);
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Title>Pomodoro -Timer</Title>
      <Tags />
      <Timer />

      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>

    </>
  )
}

export default App;

const Title = styled.h1`
/* background-color: #fff; */
font-size: 6rem;
padding: 2rem 0;
text-align: center;
`;

const CogIcon = styled.div`
display: flex;
justify-content: center;
font-size: 4rem;
align-items: center;
`;



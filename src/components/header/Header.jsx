import React, { useContext } from "react";
import styled from "styled-components";
import OrderBusket from "./OrderBusket";
import { cartContext } from "../../store/Cart-Context";

const Header = ({onToggle}) => {
  const context= useContext(cartContext)
  
  return (
    <header style={{width:"100%"}}>
      <Container>
        <h1>ReactMeals</h1>
        <OrderBusket onToggle={onToggle}>your craft</OrderBusket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  height: 101px;
  width: 100%;
  display: flex;
  background-color: #8a2b06;
  padding: 0px 120px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 38px;
    color: #fff;
  }
`;



export default Header;

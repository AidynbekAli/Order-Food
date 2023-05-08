import React, { useContext } from "react";
import { Modal } from "../../UI/Modal";
// import { DUMMY_ITEMS } from "../../utils/constants";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import { cartContext } from "../../store/Cart-Context";

const Basket = ({ onToggle }) => {
  const context = useContext(cartContext);

  return (
    <Modal>
      <Content>
        {context.items.length ? (
          <FixedWidthContainer>
            {context.items?.map((item) => {
              if (item.amount > 0) {
                return (
                  <BasketItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                    id={item.id}
                  />
                );
              }
              return null;
            })}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount totalPrice={context.totalPrice} onClose={onToggle} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;

export default Basket;

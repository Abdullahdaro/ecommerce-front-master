import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const Bg = styled.div`
  color: #fff;
  width: 100%;
  height: 100vh; /* Make sure the Bg takes up the full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Ensure that the background image can be positioned */
  overflow: hidden; /* To avoid any overflow issues with the image */
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire container */
  z-index: -1; /* Send the image behind the content */
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({product}) {
  console.log('Featured component is called with product:', product);

  const {addProduct} = useContext(CartContext);
  
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  if (!product) {
    return <div>Loading...</div>; // You can customize this message
  }
  // Rest of your component's code

  return (
    <Bg>
      <BgImage src="background.jpg" alt="background" />
      <Center>
        <div>
          ds
        </div>
      </Center>
    </Bg>
  );
}
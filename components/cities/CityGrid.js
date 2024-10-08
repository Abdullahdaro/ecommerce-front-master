import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import CityCard from "./CityCard";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function CityGrid({products}) {
  return (
    <StyledProductsGrid>
{/*       {products?.length > 0 && products.map(product => (
        <CityCard key={product._id} {...product} />
      ))}. */}
      <CityCard />
    </StyledProductsGrid>
  );
}
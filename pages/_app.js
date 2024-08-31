import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import '@/styles/globals.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  body{
    background-color: #fff;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}

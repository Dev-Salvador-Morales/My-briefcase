import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}

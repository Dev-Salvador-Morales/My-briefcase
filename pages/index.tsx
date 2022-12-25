import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Button, Flex,Heading,Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Flex align="center"  width="100%">
          <Image
            className={styles.image}
            alt="Picture of the author"
            width={200}
            height={100}
            src="https://firebasestorage.googleapis.com/v0/b/mi-portafolio-214dc.appspot.com/o/FB_IMG_1671172499482.jpg?alt=media&token=e72de2cd-be58-4cae-85aa-a72f45245e94"
          />
          <Heading ml="2rem">Bienvenido:</Heading>
          <Text ml="2rem">Binvenido:  Me llamo  Salvador Morales Alarcon  soy Tecnico  en  informatica  y Ing. Sistemas Computacionales</Text>
        </Flex>
      </main>
    </>
  );
}

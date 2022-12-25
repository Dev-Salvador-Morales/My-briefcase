import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ButtonGroup, Button, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <Flex justifyContent="space-between" bg="#2E4053" h="50px" p="15px">
        <Link href="/">
          <Text color="#fff">Salvador Morales Alarcon</Text>
        </Link>
        <ButtonGroup>
          <Button
            color="#FFF"
            variant="link"
            onClick={() => router.push("/About")}
          >
            Acerca de mi
          </Button>
          <Button
            color="#fff"
            variant="link"
            onClick={() => router.push("/Exp")}
          >
            Experiencia
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}

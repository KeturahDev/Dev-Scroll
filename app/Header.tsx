import { Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Heading as="h1">Dev Scroll</Heading>
      <Flex gap="5">
        <Link href="/about">About</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/feedback">Feedback</Link>
      </Flex>
    </div>
  );
};

export default Header;

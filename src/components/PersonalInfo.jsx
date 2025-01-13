import {
  Avatar,
  Box,
  Divider,
  Heading,
  HStack,
  Link,
  SkipNavLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdEmail,
  MdLocationCity,
  MdLocationPin,
  MdPhone,
} from "react-icons/md";
import { NavLink } from "react-router";

const PersonalInfo = () => {
  return (
    <>
      <Box width={"400px"} border={"1px"} height={"80vh"}>
        <Stack gap={10}>
          <Avatar size={"2xl"}></Avatar>
          <Heading fontSize={"2xl"}>Pramod Thapa</Heading>
          <Text
            fontSize={"sm"}
            maxW={"100px"}
            bg={"purple.100"}
            paddingY={2}
            fontFamily={"sans-serif"}
          >
            Web developer
          </Text>
          <Divider color={"purple.900"} width={"200px"} />
          <Stack>
            <MdEmail color="teal" />
            <NavLink to={"/"}> thapapramod821@gmail.com</NavLink>
            <MdPhone color="teal" />
            <MdCalendarMonth color="teal" />
            <MdLocationPin color="teal" />
          </Stack>
          <HStack fontSize={"24px"}>
            <FaGithub color="teal" style={{ "hover ": { color: "purple" } }} />
            <FaInstagram color="teal" />
            <FaLinkedin color="teal" />
            <FaInstagram color="teal" />
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default PersonalInfo;

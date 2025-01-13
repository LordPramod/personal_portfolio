import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MainSection = () => {
  return (
    <>
      <Box as={"div"} maxWidth={"820px"}>
        <Tabs fontFamily={"serif"}>
          <TabList fontFamily={"cursive"}>
            <Tab fontSize={"2xl"} _hover={{ color: "teal" }}>
              About
            </Tab>
            <Tab fontSize={"2xl"} _hover={{ color: "teal" }}>
              Resume
            </Tab>
            <Tab fontSize={"2xl"} _hover={{ color: "teal" }}>
              Portfolio
            </Tab>
            <Tab fontSize={"2xl"} _hover={{ color: "teal" }}>
              Contact
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack>
                <Heading>About Me</Heading>
                <Text fontSize={"x-large"} textAlign={"justify"}>
                  I am a Frontend Developer based in Kathmandu, Nepal, with a
                  foundational understanding of backend technologies. I am
                  continuously expanding my knowledge in this area to enhance my
                  skill set.
                </Text>
                <Text fontSize={"x-large"} textAlign={"justify"}>
                  My technical toolkit includes React.js for building dynamic
                  user interfaces, PHP for backend development, and currently
                  overseeing Python while learning it. I have extensive
                  experience in developing RESTful APIs and implementing modern
                  UI frameworks like Chakra UI. My approach combines clean code
                  practices with responsive design principles to create
                  applications that are not only functionally powerful but also
                  aesthetically pleasing and intuitive to use.
                </Text>
              </Stack>
            </TabPanel>
            <TabPanel>This is Resume </TabPanel>
            <TabPanel>This is Portfolio </TabPanel>
            <TabPanel>This is Contact </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default MainSection;

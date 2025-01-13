import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import MainSection from "./components/MainSection";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateColumns={"repeat(6, 1fr)"} gap={6}>
        <GridItem colSpan={2}>
          <PersonalInfo />
        </GridItem>
        <GridItem colSpan={4}>
          <MainSection />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

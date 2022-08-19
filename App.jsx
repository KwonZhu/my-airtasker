import React from "react";
import HomePageBanner from "./app/HomePageBanner";
import PageHeader from "./app/PageHeader";
import { UserProvider } from "./app/UserContext";

const App = () => (
  <UserProvider>
    {" "}
    {/* UserProvider has provided user and handleUserChange, so that every child can access them */}
    <PageHeader />
    <HomePageBanner />
  </UserProvider>
);

export default App;

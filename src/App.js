import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";


import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Pages/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Pages/Dashboard";
import Materials from "./Components/Pages/Materials";
import NewMaterial from "./Components/NewMaterial";
import MyMaterials from "./Components/Pages/MyMaterials";

const App = ({ signOut }) => {


  return (
    <View className="App">
     <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* Private Routes */}
        <Route>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path={`${id}/your-materials`} element={<MyMaterials />} /> */}
          <Route path="newmaterial" element={<NewMaterial />} />
          <Route path="materials" element={<Materials />} />
        </Route>
      </Route>
    </Routes>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
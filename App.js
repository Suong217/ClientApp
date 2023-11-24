import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";

import AppNav from "./src/navigation/AppNav";
import { AuthProvider } from "./src/context/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>

      <AppNav/>
    </AuthProvider>
    <ExpoStatusBar style="auto"/>
    </>

  );
}

export default App;

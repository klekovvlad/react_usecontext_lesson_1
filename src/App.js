import React from "react";
import Main from "./Main";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";


export default function App() {



  return (
    <AlertProvider>
        <div className="container">
            <Alert />
            <Main />
        </div>
    </AlertProvider>
  )
}
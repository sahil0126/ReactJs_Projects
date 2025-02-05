import React from "react";
import "./style.css";
import Formvalidation from "./Formvalidation";
import Form2 from "./Form2";
import Dynamicnavb from "./Dynamicnavb";


const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline bg-yellow-300" >    Hello world!  </h1> */}
      {/* <Formvalidation /> */}
      {/* <Form2/> */}
      {/* <DynamicNavbar  /> */}
      <Dynamicnavb arr={["About","Products","Contact us","Account"]} />
    </div>
  );
};

export default App;

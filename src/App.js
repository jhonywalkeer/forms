import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";

function App() {
  function handleSubmit(data) {
    const { cep = "", phone = "" } = data;
    console.table(data);
    console.log(cep.replace(/\D+/g, ""));
    console.log(phone.replace(/\D+/g, ""));
  }

  return (
    <div className="App">
      <Layout />
      <GlobalStyles />
    </div>
  );
}

export default App;

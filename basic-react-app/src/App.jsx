import "./App.css";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";
import ProductTab from "./components/ProductTab.jsx";

function App() {

  return (
    <div className="app">
      <h2>Blockbuster Ipads | Shop Now</h2>
      <ProductTab/>
      <Button/>
      <Form/>
    </div>
  )
}

export default App

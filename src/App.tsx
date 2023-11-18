import { useState } from "react";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

function App() {
  const [message, setMessage] = useState("Let's learn about testing in React");
  const [disabled, setDisalbed] = useState(false);

  const newMessage = () => {
    if (message === "Let's learn about testing in React") {
      setMessage("We are learning and evolving");
      setDisalbed(true);
    } else {
      setMessage("Let's learn about testing in React");
      setDisalbed(false);
    }
  };

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button disabled={disabled} onClick={() => newMessage()}>
        Change message
      </Button>

      <Tasks />
    </div>
  );
}

export default App;

import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Calculater</h1>
        <div className="calculator">
          <form action="">
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="button" value={"AC"} />
              <input type="button" value={"DE"} />
              <input type="button" value={"."} />
              <input type="button" value={"/"} />
            </div>
            <div>
              <input type="button" value={"7"} />
              <input type="button" value={"8"} />
              <input type="button" value={"9"} />
              <input type="button" value={"/"} />
            </div>
            <div>
              <input type="button" value={"4"} />
              <input type="button" value={"5"} />
              <input type="button" value={"6"} />
              <input type="button" value={"+"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

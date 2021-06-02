import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
  const [tinput, setTinput] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const update = (e) => setTinput(e.target.value);
  const post = () => {
    dispatch({ type: "POST", payload: tinput });
    setTinput("");
  };

  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      <h1 className="p-2 text-warning">Send Messages</h1>
      <div className="d-flex p-2">
        <input
          type="text"
          value={tinput}
          onChange={(e) => update(e)}
          className="form-control w-75 p-2"
          placeholder="Type Something"
        />
        <input
          type="button"
          onClick={() => post()}
          value="Send"
          className="w-15 btn btn-dark"
        />
      </div>

      <div className="mx-4 mt-4 p-2 fs-1">
        {state.list.map((item, index) => (
          <h4 key={index} className="text-light">
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}

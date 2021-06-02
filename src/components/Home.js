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
    <div>
      <div className="d-flex mt-2 mx-4">
        <input
          type="text"
          value={tinput}
          onChange={(e) => update(e)}
          className="form-control w-75"
          placeholder="Type Something"
        />
        <input
          type="button"
          onClick={() => post()}
          value="Send"
          className="w-15 btn btn-secondary"
        />
      </div>

      <div className="mx-4 mt-4">
        {state.list.map((item, index) => (
          <h4 key={index} className="text-secondary">
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}

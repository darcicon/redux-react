import { useDispatch, useSelector } from "react-redux";

export function Counter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const inc = () => dispatch({ type: "INC" });

  return (
    <div className="mx-4 ">
      <div className="alert alert-danger mt-2 text-left">
        Likes {state.counter}
      </div>

      <input
        type="button"
        value="Like"
        onClick={() => inc()}
        className="btn btn-dark btn-lg w-15"
      />
    </div>
  );
}

import { useSelector } from "react-redux";

export function Display() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-secondary text-light" style={{ height: "100vh" }}>
      <h1>Displaying All Outputs</h1>

      <h2>Likes : {state.counter} </h2>

      <h2>Displaying Texts</h2>
      {state.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

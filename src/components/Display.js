import { useSelector } from "react-redux";

export function Display() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <h1>Displaying All Outputs</h1>

      <h2>{state.message} </h2>

      <h2>Displaying Texts</h2>
      {state.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

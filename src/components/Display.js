import { useSelector } from "react-redux";

export function Display() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-secondary text-light" style={{ height: "100vh" }}>
      <h1>Displaying All Outputs</h1>
      <br />

      <h2>Likes : {state.counter} </h2>
      <br />

      <h2>Displaying Texts</h2>
      {state.list.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

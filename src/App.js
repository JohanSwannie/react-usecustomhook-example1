import useLocalStorage from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}

export default App;

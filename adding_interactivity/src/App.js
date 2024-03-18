import RespondingToEvents from "./components/RespondingToEvents";


function App() {
  return (
    <div>
      <h1>Hello Ambika</h1>
      <RespondingToEvents
        onClickHandler = {()=> alert("clicked")}
        onPlayHandler = {()=> alert("Played")}
      />
    </div>
  );
}

export default App;

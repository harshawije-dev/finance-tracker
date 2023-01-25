import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex mx-4 py-5">
      <div className="w-4/5 flex-shrink">
        <Header />
        <Container />
      </div>
      <div className="flex flex-grow w-8/12 bg-slate-100">
        <div className="flex-1">
          <h2>hello world</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            delectus ullam, tempore quasi similique facilis laudantium in quos
            ipsa error sunt doloribus fuga quisquam nisi, vel eum vitae,
            consectetur sapiente!
          </p>
        </div>
        {/* flex-1 */}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="flex mx-4 py-5">
      <div className="w-4/5 flex-shrink">
        <div className="">
          <h2 className=" text-black text-3xl font-bold">Welcome Back </h2>
          <button
            type="button"
            className="bg-btnPrimary w-auto text-white capitalize font-semibold rounded text-base px-4 py-1"
          >
            Add New{" "}
          </button>
          <button type="button">View Charts </button>
        </div>
      </div>
      <div className="flex-grow w-8/12">
        <h2>hello world</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          delectus ullam, tempore quasi similique facilis laudantium in quos
          ipsa error sunt doloribus fuga quisquam nisi, vel eum vitae,
          consectetur sapiente!
        </p>
      </div>
    </div>
  );
}

export default App;

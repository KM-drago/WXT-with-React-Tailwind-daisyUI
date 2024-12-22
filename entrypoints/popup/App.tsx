import "./App.css";

function App() {
  return (
    <div className="w-96 h-96 flex flex-col justify-center space-y-12">
      <h1 className="text-center text-xl font-bold mt-3">WXT with React + Tailwind + daisyUI</h1>
      <div className="self-center w-screen flex flex-row justify-around">
        <div>
          <a className="font-semibold text-lg" href="https://wxt.dev/">
            WXT
          </a>
        </div>
        <div>
          <a className="font-semibold text-lg" href="https://tailwindcss.com/">
            Tailwind
          </a>
        </div>
        <div>
          <a className="font-semibold text-lg" href="https://daisyui.com/">
            daisyUI
          </a>
        </div>
      </div>

      <div className="card bg-primary text-primary-content w-80 self-center">
        <div className="card-body">
          <h2 className="card-title">It Works!</h2>
          <p>Just a random example from daisyUI.</p>
          <div className="card-actions justify-end">
            <button className="btn">Sup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

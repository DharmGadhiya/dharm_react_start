import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // 👉 reference for input field
  const passwordRef = useRef(null);

  // Generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~`!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Run generator when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Copy password using ref
  const copyPassword = useCallback(() => {
    if (!passwordRef.current) return;

    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 999); // for mobile

    window.navigator.clipboard.writeText(passwordRef.current.value);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-xl shadow-2xl p-6">

        <h1 className="text-2xl font-semibold text-center mb-6 text-orange-400">
          🔐 Password Generator
        </h1>

        <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden mb-5">
          <input
            ref={passwordRef}   // 👈 ref attached here
            type="text"
            value={password}
            className="w-full bg-transparent px-4 py-2 outline-none text-lg"
            placeholder="Generated password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className={`px-4 py-2 text-sm font-medium transition
              ${copied ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-2/3 accent-orange-400"
              onChange={(e) => setLenght(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
                className="accent-orange-400"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="accent-orange-400"
              />
              Symbols
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

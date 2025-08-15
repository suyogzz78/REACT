import { useState, useCallback, useEffect,useRef } from 'react';
import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [numall, setnumall] = useState(false);
  const [charall, setcharall] = useState(false);
  const [password, setpass] = useState('');

  const passRef=useRef(null)
  const passgen = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numall) str += '0123456789';
    if (charall) str += '~!@#$%^&*()_+-={}|[]\\:;';

    
    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpass(pass);
  }, [length, numall, charall]);

    const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])       


  useEffect(()=>{{passgen()}},[length,numall,charall,passgen])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gradient-to-r from-purple-700 to-blue-700 text-white-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={10}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numall}
              id="numberInput"
              onChange={() => {
                setnumall((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charall}
              id="characterInput"
              onChange={() => {
                setcharall((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

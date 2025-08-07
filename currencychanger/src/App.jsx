import React ,{ useState } from 'react'
import './App.css'
import Input from './components/Input.jsx'
import useCurrencyInfo from './hook/useCurrencyInfo.js'

function App() {
                
  const [amount,setamount] = useState("");
  const [from,setfrom] = useState("usd");
  const [to,setto] = useState("inr");
  const [convertedamount,setconvertedamount] = useState(0);

  const currencyinfo = useCurrencyInfo(from);
  const options=Object.keys(currencyinfo)

  const swap= () => {
    setfrom(to);
    setto(from);
  }
  const convert = () =>{
    setconvertedamount(amount * currencyinfo[to]);
  }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/259103/pexels-photo-259103.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                selectedcurrency={from}
                                oncurrencychange={(currency) =>setfrom(currency) }
                                onamountchange={(amount) => setamount(amount)}
                                className="mb-4"
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedamount}
                                currencyoptions={options}
                                selectedcurrency={to}
                                oncurrencychange={(currency) =>setto(currency)   }
                                onamountchange={(amount)=>setconvertedamount(amount)}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

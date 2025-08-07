import React,{useId} from 'react'
//we u
function Input({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions = [],
    selectedcurrency = "usd",
    
    className = "",
}) {
   const amountid = useId();

    return ( //here className is used to add custom styles
        // This component renders an input field for currency amount and a dropdown for currency type
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        
            <div className="w-1/2">
                <label htmlFor={amountid} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountid} 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedcurrency}
                    onChange={(e)=>oncurrencychange && oncurrencychange(e.target.value)}
                    
                >
                    
                     {currencyoptions.map((option) => (
                        <option key={option} value={option}>
                            {option.toUpperCase()}
                        </option>
                     ))}
                
                </select>
            </div>
        </div>
    );
}

export default Input;

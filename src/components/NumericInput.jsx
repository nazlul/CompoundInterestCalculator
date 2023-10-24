import React from 'react'

export default function NumericInput(props) {
    const {title, symbol, value, setValue} = props
    return (
        <div className="flex flex-col gap-1">
            <h3>{title} ({symbol})</h3>
            <input type="number" className="outline-none focus:outline-none
            bg-slate-400 text-white text-xs sm:text-sm duration-300 
            border border-transparent border-solid bg-slate-950 
            p-2 rounded hover:bg-slate-800 hover:border-blue-700
            focus:border-blue-500" value={value} onChange={(e)=> {
                setValue(e.target.value)
            }} />
        </div>
    )
}



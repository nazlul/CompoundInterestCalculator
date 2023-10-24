import React from 'react'

export default function CalculateButton(props) {
    const { evaluate } = props
    return (
        <button onClick={evaluate} className="flex items-center
        justify-center gap-4 py-3 bg-blue-500 group rounded
         hover:bg-blue-800 duration-200">
            <h4>How Rich will you be?</h4>
            <i class="fa-solid fa-calculator 
            group-hover:animate-spin"></i>
        </button>
    )
}


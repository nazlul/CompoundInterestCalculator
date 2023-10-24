import React from 'react'

export default function CalculatedAmounts(props) {
    const { value, year } = props
    if (!value) { return null}
    return (
        <div className="px-10 py-5 text-center justify-center ">You will have ${value} in {year} years</div>
    )
}



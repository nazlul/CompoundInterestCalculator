import React from 'react'

export default function Layout(props) {
    const { children, reset } = props
    return (
        <div className='min-h-screen bg-slate-900
        text-white flex-col gap-10 p-4'>
            <header className='flex flex-col gap-2 
            items-center justify-center max-w-[800px] 
            pt-16 sm:pt-20 w-full mx-auto'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>Compund Interest Calculator</h1>
                <div className="flex items-center gap-2
                sm:text-lg">
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i> 
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <i className="fa-solid fa-money-bill-wave"></i> 
                </div>
            </header>
                <main className="flex-1 flex-col gap-4 max-w-[600px]
                w-full mx-auto">
                    {children}
                    <button className="flex text-center px-3 py-1 font-semibold
                mx-auto border-2 border-solid border-white rounded 
                hover:bg-slate-600 text-center" onClick= {reset}>Reset</button> 
                </main>   
        </div>
    )
}
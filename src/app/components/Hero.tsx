'use client'
import React, { useState } from 'react';
export default function Hero() {
    const [text, settext] = useState(' ');

    const handleChange = (e: any) => {
        settext(e.target.value)
    }
    return (
        <>
            <div className="container mx-auto border-2 border-red-600 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
                <div className='bg-slate-600'>Edit
                    <div className="">
                        <input type="text" name="addtext" id="addtext"
                            placeholder='add text'
                            onChange={handleChange}
                            className="w-auto" />
                        <button type="submit" className='bg-blue-200 px-2 rounded-md'>Enter</button>
                    </div>

                    <div className="">

                    </div>
                </div>

                <div className='bg-slate-600'>
                    <div
                        className="">
                        preview
                        <p>
                            {text}
                        </p>

                    </div>
                </div>
            </div >
        </>
    )
}

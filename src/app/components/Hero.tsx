'use client'
import React, { useState } from 'react';

import Draggable from 'react-draggable';
export default function Hero() {
    const [text, settext] = useState(' ');

    const handleChange = (e: any) => {
        settext(e.target.value)
    }
    return (
        <>
            <div className="container mx-auto border-2 border-red-600 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
                <div className='bg-slate-400'>Edit
                    <div className="">
                        <input type="text" name="addtext" id="addtext"
                            placeholder='add text'
                            onChange={handleChange}
                            className="w-auto" />
                        <button type="submit" className='bg-blue-200 px-2 rounded-md'>Enter</button>
                    </div>

                    <div className="">
                        <div>
                            <div className="">Seleect font</div>
                            <select name="Font" id="font">
                                <option value="">-- Select Font --</option>
                                <option value="Arial, sans-serif">Arial</option>
                                <option value="Verdana, sans-serif">Verdana</option>
                                <option value="Georgia, serif">Georgia</option>
                                <option value="Times New Roman, serif">Times New Roman</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2'>

                            <div>
                                <div className="">Seleect Color</div>
                                <input type="color" name="color" id="color" />
                                {/* <select name="colors" id="colors">
                                    <option value="">-- Select Color --</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select> */}
                            </div>
                            <div>
                                <div> Font Size</div>
                                <input type="number" name="size" id="size" min={1} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-400'>
                    <div
                        className="">
                        preview
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2136d82892035.5d2c3c96035b9.jpg" alt="image" />
                       
                        <Draggable >
                        <p>
                            {text}
                        </p>
</Draggable>
                    </div>
                </div>
            </div >
        </>
    )
}

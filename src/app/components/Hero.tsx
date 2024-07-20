'use client';

import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Fontselect from './Fontselect';

export default function Hero() {
    const [text, setText] = useState('');
    const [selectedFont, setSelectedFont] = useState('--font-roboto');
    const [fontSize, setFontSize] = useState(16);
    const [fontColor, setFontColor] = useState('#000000'); // Initial color

    const handleFontChange = (font:any) => {
        setSelectedFont(font);
    };

    const handleChange = (e:any) => {
        setText(e.target.value);
    };

    const handleFontSizeChange = (e:any) => {
        setFontSize(e.target.value);
    };

    const handleFontColorChange = (e:any) => {
        setFontColor(e.target.value);
    };

    const img = 'https://img.freepik.com/premium-photo/elegant-greeting-card-invitation-isolated-empty-space-beautified-with-ribbon-flower-decoration_634731-6287.jpg?w=360';
    const styling = {
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    };

    return (
        <>
            <div className="container mx-auto min-h-96 border-2 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
                {/* Edit */}
                <div className='p-4 bg-white shadow-lg rounded-lg'>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="addtext"
                            id="addtext"
                            style={{ fontFamily: `var(${selectedFont})`, fontSize: `${fontSize}px`, color: fontColor }}
                            placeholder='Add text'
                            onChange={handleChange}
                            className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition'
                        >
                            Enter
                        </button>
                    </div>

                    <div className="bg-slate-200 p-4 rounded-lg">
                        <div className='grid grid-cols-3 gap-4'>
                            <div className="col-span-1 flex items-center">
                                <span className="font-medium">Select font</span>
                            </div>
                            <div className="col-span-2">
                                <Fontselect onFontChange={setSelectedFont} />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            {/* Font Color Picker */}
                            <div className="flex flex-col">
                                <label htmlFor="color" className="font-medium mb-1">Select Color</label>
                                <input
                                    type="color"
                                    name="color"
                                    id="color"
                                    value={fontColor}
                                    onChange={handleFontColorChange}
                                    className="border-2 border-gray-300 rounded-md p-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="size" className="font-medium mb-1">Font Size</label>
                                <input
                                    type="number"
                                    name="size"
                                    id="size"
                                    min={1}
                                    value={fontSize}
                                    onChange={handleFontSizeChange}
                                    className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div style={styling} className='flex justify-center items-center p-4'>
                    <div>
                        <Draggable>
                            <p style={{ fontFamily: `var(${selectedFont})`, fontSize: `${fontSize}px`, color: fontColor }} className="text-lg">
                                {text}
                            </p>
                        </Draggable>
                    </div>
                </div>
            </div>
        </>
    );
}

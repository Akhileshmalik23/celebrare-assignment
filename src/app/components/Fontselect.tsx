import { useState } from 'react';

const fonts = [
    { name: 'Roboto', variable: '--font-roboto' },
    { name: 'Lobster', variable: '--font-lobster' },
    { name: 'Pacifico', variable: '--font-pacifico' },
    { name: 'Oswald', variable: '--font-oswald' },
    { name: 'Dancing Script', variable: '--font-dancing-script' },
    { name: 'Raleway', variable: '--font-raleway' },
    { name: 'Bebas Neue', variable: '--font-bebas-neue' },
    { name: 'Playfair Display', variable: '--font-playfair-display' },
    { name: 'Amatic SC', variable: '--font-amatic-sc' },
    { name: 'Abril Fatface', variable: '--font-abril-fatface' },
    { name: 'Montserrat', variable: '--font-montserrat' },
    { name: 'Great Vibes', variable: '--font-great-vibes' },
    { name: 'Cinzel', variable: '--font-cinzel' },
    { name: 'Fredoka One', variable: '--font-fredoka-one' },
    { name: 'Zilla Slab', variable: '--font-zilla-slab' },
    { name: 'Merriweather', variable: '--font-merriweather' },
    { name: 'Varela Round', variable: '--font-varela-round' },
    { name: 'Bitter', variable: '--font-bitter' },
    { name: 'Shadows Into Light', variable: '--font-shadows-into-light' },
    { name: 'Quicksand', variable: '--font-quicksand' },
];


export default function Fontselect({ onFontChange }) {
    const [selectedFont, setSelectedFont] = useState(fonts[0].variable);

    const handleFontChange = (e:any) => {
        const selectedFont = e.target.value;
        setSelectedFont(selectedFont);
        onFontChange(selectedFont);
    };

    return (
        <select onChange={handleFontChange} value={selectedFont} className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            {fonts.map((font) => (
                <option key={font.name} value={font.variable}>
                    {font.name}
                </option>
            ))}
        </select>
    );
}

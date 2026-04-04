'use client';

import { useState } from 'react';

const mapUrl = `https://maps.google.com/maps?q=Avda+Jane+Bowles+17+Málaga+España&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Avda+Jane+Bowles+17,Málaga,España&zoom=15&size=800x400&markers=color:red%7CAvda+Jane+Bowles+17,Málaga,España&style=feature:all|saturation:-20&key=`;

export function MapFacade() {
    const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de STIMULOS Centro Infantil"
                className="w-full h-full"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={() => setLoaded(true)}
            className="w-full h-full relative flex flex-col items-center justify-center gap-3 bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer group"
            aria-label="Cargar mapa interactivo de Google Maps"
        >
            {/* Static grid background to simulate map tiles */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(100,100,100,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,100,100,0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />
            {/* Roads decoration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-2 bg-gray-400 absolute" />
                <div className="h-full w-2 bg-gray-400 absolute" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 bg-white rounded-2xl px-6 py-5 shadow-lg group-hover:shadow-xl transition-shadow">
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p className="font-semibold text-gray-800 text-base">Abrir mapa</p>
            </div>
        </button>
    );
}

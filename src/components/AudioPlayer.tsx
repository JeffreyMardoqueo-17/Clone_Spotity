"use client";

import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function AudioPlayer() {
    return (
        <div className='bg-black w-full flex items-center space-x-2 p-2 rounded-lg shadow-md'>
            {/* Imagen de la canción */}
            <img
                src="https://i.scdn.co/image/ab67616d0000b27317875a0610c23d8946454583"
                alt="The Night We Met - Lord Huron"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-md object-cover shadow-md"
            />

            {/* Información de la canción */}
            <div className="flex-1 text-left">
                <h2 className="text-white text-sm lg:text-base font-semibold truncate">The Night We Met</h2>
                <p className="text-gray-400 text-xs lg:text-sm">Lord Huron</p>
            </div>

            {/* Contenedor de los controles del audio */}
            <div className="w-48 lg:w-[400px]">
                <ReactAudioPlayer
                    src="/TheNigthWeMeet.mp3"
                    controls
                    className='custom-audio-player'
                    style={{
                        backgroundColor: 'transparent',
                        height: '35px',
                        width: '100%',
                    }}
                />
            </div>

        </div>
    );
}

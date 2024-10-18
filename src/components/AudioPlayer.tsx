"use client";

import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function AudioPlayer() {
    return (
        <div>
            <ReactAudioPlayer
                src="/TheNigthWeMeet.mp3"  // Ruta directa al archivo dentro de public
                controls
            />
        </div>
    );
}

"use client";
import React, { useState } from "react";

// Interfaz para los datos de las canciones
interface Song {
    id: string;
    title: string;
    artist: string;
    albumCover: string;
    album: string;
    addedDate: string;
    duration: string;
}

export default function LordHuronPage() {
    // Imagen predeterminada para el cover de los álbumes
    const defaultAlbumCover =
        "https://png.pngtree.com/png-clipart/20231123/original/pngtree-shiny-orange-audio-circle-icon-displayed-on-a-picture-image_13280798.png";

    // Lista de canciones de Lord Huron
    const [songs] = useState<Song[]>([
        {
            id: "1",
            title: "The Night We Met",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "15 dic 2021",
            duration: "3:28",
        },
        {
            id: "2",
            title: "Meet Me in the Woods",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "10 sep 2020",
            duration: "4:22",
        },
        {
            id: "3",
            title: "Love Like Ghosts",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "1 nov 2019",
            duration: "3:45",
        },
        {
            id: "4",
            title: "Fool for Love",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "15 ene 2020",
            duration: "4:34",
        },
        {
            id: "5",
            title: "Ends of the Earth",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "12 mar 2020",
            duration: "4:44",
        },
        {
            id: "6",
            title: "She Lit a Fire",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "5 abr 2020",
            duration: "4:27",
        },
    ]);

    return (
        <div className="p-4 md:p-10">
            {/* Cabecera de la Playlist */}
            <div className="bg-gradient-to-b from-purple-800 to-purple-900 p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center">
                <img
                    src={defaultAlbumCover}
                    alt="Playlist"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Playlist: Lord Huron</h1>
                    <p className="text-gray-300">Jeffrey Mardoqueo • {songs.length} canciones</p>
                </div>
            </div>

            {/* Lista de canciones */}
            <div className="bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="table-auto w-full text-left text-white">
                    <thead className="border-b border-gray-700">
                        <tr>
                            <th className="py-3">#</th>
                            <th className="py-3">Título</th>
                            <th className="py-3 hidden md:table-cell">Álbum</th>
                            <th className="py-3 hidden md:table-cell">Fecha en que se agregó</th>
                            <th className="py-3 text-right">Duración</th>
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">
                        {songs.map((song, index) => (
                            <tr key={song.id} className="hover:bg-neutral-800">
                                <td className="py-3">{index + 1}</td>
                                <td className="py-3 flex items-center">
                                    <img
                                        src={song.albumCover}
                                        alt={song.title}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg mr-4"
                                    />
                                    <div>
                                        <p className="text-white font-semibold truncate">{song.title}</p>
                                        <p className="text-gray-400 truncate">{song.artist}</p>
                                    </div>
                                </td>
                                <td className="py-3 text-gray-400 hidden md:table-cell truncate">
                                    {song.album}
                                </td>
                                <td className="py-3 text-gray-400 hidden md:table-cell">
                                    {song.addedDate}
                                </td>
                                <td className="py-3 text-right text-gray-400">{song.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

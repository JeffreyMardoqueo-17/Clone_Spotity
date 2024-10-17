"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface Song {
    id: string;
    title: string;
    artist: string;
    albumCover: string;
    album: string;
    addedDate: string;
    duration: string;
}

export default function FavoritesPage() {
    // Imagen predeterminada para el cover de los álbumes
    const defaultAlbumCover =
        "https://png.pngtree.com/png-clipart/20231123/original/pngtree-shiny-orange-audio-circle-icon-displayed-on-a-picture-image_13280798.png";

    // Lista de canciones instrumentales y artistas seleccionados
    const [songs] = useState<Song[]>([
        {
            id: "1",
            title: "Abrazado a Ti",
            artist: "Kevin Kaarl",
            albumCover: defaultAlbumCover,
            album: "San Lucas",
            addedDate: "19 ago 2022",
            duration: "3:35",
        },
        {
            id: "2",
            title: "Dos Almas",
            artist: "Kevin Kaarl",
            albumCover: defaultAlbumCover,
            album: "Hasta el Fin Del Mundo",
            addedDate: "10 ago 2022",
            duration: "4:24",
        },
        {
            id: "3",
            title: "The Night We Met",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "15 dic 2021",
            duration: "3:28",
        },
        {
            id: "4",
            title: "Yellow",
            artist: "Coldplay",
            albumCover: defaultAlbumCover,
            album: "Parachutes",
            addedDate: "11 nov 2021",
            duration: "4:26",
        },
        {
            id: "5",
            title: "Postcards from Far Away",
            artist: "Coldplay (Instrumental)",
            albumCover: defaultAlbumCover,
            album: "Prospekt's March",
            addedDate: "22 mar 2020",
            duration: "0:48",
        },
        {
            id: "6",
            title: "Nuvole Bianche",
            artist: "Ludovico Einaudi (Instrumental)",
            albumCover: defaultAlbumCover,
            album: "Una Mattina",
            addedDate: "5 mar 2020",
            duration: "6:05",
        },
    ]);

    return (
        <div className="p-4 md:p-10">
            {/* Cabecera de la Playlist */}
            <div className="bg-[#f88254] p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center">
                <img
                    src={defaultAlbumCover}
                    alt="Playlist"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Tus Me Gustas</h1>
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
                            <motion.tr
                                key={song.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Retraso progresivo para las filas
                                className="hover:bg-neutral-800">
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
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

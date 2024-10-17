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

export default function KheaDukiPage() {
    // Imagen predeterminada para el cover de los álbumes
    const defaultAlbumCover =
        "https://lh3.googleusercontent.com/proxy/XNvHJsOh9JJiN9K1xN8clMBz4Ee8yaWstVRbrEJ2n2P8ZhL0wGxFT3XYMj-bJvKEXl6_bVui5oElK8A1R4aS7Q4WS6axL7aBbKK66weyjQ";

    // Lista de canciones de Duki y Khea
    const [songs] = useState<Song[]>([
        {
            id: "1",
            title: "Goteo",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Goteo (Single)",
            addedDate: "10 ago 2022",
            duration: "2:49",
        },
        {
            id: "2",
            title: "Hitboy",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "20 sep 2021",
            duration: "3:12",
        },
        {
            id: "3",
            title: "Si Me Sobrara el Tiempo",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "15 dic 2021",
            duration: "3:38",
        },
        {
            id: "4",
            title: "Loca",
            artist: "Khea, Duki, Cazzu",
            albumCover: defaultAlbumCover,
            album: "Loca (Single)",
            addedDate: "5 mar 2020",
            duration: "4:02",
        },
        {
            id: "5",
            title: "H.I.E.L.O",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:27",
        },
        {
            id: "6",
            title: "She Don't Give a FO",
            artist: "Duki, Khea",
            albumCover: defaultAlbumCover,
            album: "She Don't Give a FO (Single)",
            addedDate: "11 abr 2019",
            duration: "3:16",
        },
        {
            id: "7",
            title: "Hello Cotto",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "She Don't Give a FO (Single)",
            addedDate: "11 abr 2019",
            duration: "3:16",
        },
    ]);

    return (
        <div className="p-4 md:p-10">
            {/* Cabecera de la Playlist */}
            <div className="bg-[#ff3434] p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center">
                <img
                    src={defaultAlbumCover}
                    alt="Playlist"
                    className="w-20 h-20 md:w-28 md:h-28 rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Playlist: Duki & Khea
                    </h1>
                    <p className="text-gray-300">Jeffrey Mardoqueo • {songs.length} canciones</p>
                </div>
            </div>

            {/* Lista de canciones */}
            <div className="bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="table-auto w-full text-left text-white">
                    <thead className="border-b border-gray-700">
                        <tr>
                            <th className="py-2 md:py-3">#</th>
                            <th className="py-2 md:py-3">Título</th>
                            <th className="hidden md:table-cell py-2 md:py-3">Álbum</th>
                            <th className="hidden md:table-cell py-2 md:py-3">Fecha en que se agregó</th>
                            <th className="py-2 md:py-3 text-right">Duración</th>
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">
                        {songs.map((song, index) => (
                            <motion.tr
                                key={song.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Retraso progresivo para las filas
                                className="hover:bg-neutral-800"
                            >
                                <td className="py-3">{index + 1}</td>
                                <td className="py-3 flex items-center break-words">
                                    <img
                                        src={song.albumCover}
                                        alt={song.title}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-white font-semibold truncate">{song.title}</p>
                                        <p className="text-gray-400">{song.artist}</p>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell py-3 text-gray-400 truncate">{song.album}</td>
                                <td className="hidden md:table-cell py-3 text-gray-400">{song.addedDate}</td>
                                <td className="py-3 text-right text-gray-400">{song.duration}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

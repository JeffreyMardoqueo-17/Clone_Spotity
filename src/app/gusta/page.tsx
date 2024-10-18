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
            title: "The Night We Met",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "12 feb 2023",
            duration: "3:28",
        },
        {
            id: "2",
            title: "Blinding Lights",
            artist: "The Weeknd",
            albumCover: defaultAlbumCover,
            album: "After Hours",
            addedDate: "20 abr 2020",
            duration: "3:20",
        },
        {
            id: "3",
            title: "Levitating",
            artist: "Dua Lipa",
            albumCover: defaultAlbumCover,
            album: "Future Nostalgia",
            addedDate: "15 jun 2021",
            duration: "3:23",
        },
        {
            id: "4",
            title: "Watermelon Sugar",
            artist: "Harry Styles",
            albumCover: defaultAlbumCover,
            album: "Fine Line",
            addedDate: "05 ago 2020",
            duration: "2:54",
        },
        {
            id: "5",
            title: "drivers license",
            artist: "Olivia Rodrigo",
            albumCover: defaultAlbumCover,
            album: "SOUR",
            addedDate: "10 ene 2021",
            duration: "4:02",
        },
    ]);

    // Estado para la búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Función para filtrar las canciones en base al término de búsqueda
    const filteredSongs = songs.filter(
        (song) =>
            song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <p className="text-gray-300">Jeffrey Mardoqueo • {filteredSongs.length} canciones</p>
                </div>
            </div>

            {/* Input para búsqueda */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar canciones o artistas..."
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
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
                        {filteredSongs.map((song, index) => (
                            <motion.tr
                                key={song.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
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

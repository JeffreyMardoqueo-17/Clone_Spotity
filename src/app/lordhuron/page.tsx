"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
        "https://i.scdn.co/image/ab6761610000e5eb1d4e4e7e3c5d8fa494fc5f10";

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
        {
            id: "7",
            title: "The Ghost on the Shore",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "10 may 2020",
            duration: "4:38",
        },
        {
            id: "8",
            title: "I Will Be Back One Day",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "20 jun 2020",
            duration: "3:21",
        },
        {
            id: "9",
            title: "La Belle Fleur Sauvage",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "15 jul 2020",
            duration: "5:42",
        },
        {
            id: "10",
            title: "Brother",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "1 ago 2020",
            duration: "4:00",
        },
        {
            id: "11",
            title: "The Stranger",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "25 ago 2020",
            duration: "4:13",
        },
        {
            id: "12",
            title: "Way Out There",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "1 sep 2020",
            duration: "4:08",
        },
        {
            id: "13",
            title: "Lonesome Dreams",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "10 sep 2020",
            duration: "4:16",
        },
        {
            id: "14",
            title: "Hurricane (Johnnie’s Theme)",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "15 nov 2020",
            duration: "3:53",
        },
        {
            id: "15",
            title: "Ancient Names, Pt. I",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "25 nov 2020",
            duration: "4:08",
        },
        {
            id: "16",
            title: "Ancient Names, Pt. II",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "30 nov 2020",
            duration: "5:34",
        },
        {
            id: "17",
            title: "Wait by the River",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "10 dic 2020",
            duration: "3:10",
        },
        {
            id: "18",
            title: "When the Night Is Over",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "25 dic 2020",
            duration: "3:57",
        },
        {
            id: "19",
            title: "Moonbeam",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "5 ene 2021",
            duration: "3:49",
        },
        {
            id: "20",
            title: "Vide Noir",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "10 feb 2021",
            duration: "4:59",
        },
        {
            id: "21",
            title: "The Balancer’s Eye",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "25 feb 2021",
            duration: "4:34",
        },
        {
            id: "22",
            title: "Secret of Life",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "15 mar 2021",
            duration: "5:13",
        },
        {
            id: "23",
            title: "Never Ever",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "30 mar 2021",
            duration: "3:56",
        },
        {
            id: "24",
            title: "Emerald Star",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Vide Noir",
            addedDate: "10 abr 2021",
            duration: "5:39",
        },
        {
            id: "25",
            title: "Mine Forever",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "25 abr 2021",
            duration: "4:04",
        },
        {
            id: "26",
            title: "Not Dead Yet",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "1 may 2021",
            duration: "3:50",
        },
        {
            id: "27",
            title: "Long Lost",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "15 may 2021",
            duration: "5:16",
        },
        {
            id: "28",
            title: "Twenty Long Years",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "1 jun 2021",
            duration: "3:10",
        },
        {
            id: "29",
            title: "I Lied (feat. Allison Ponthier)",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "15 jun 2021",
            duration: "3:54",
        },
        {
            id: "30",
            title: "Drops in the Lake",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "30 jun 2021",
            duration: "4:15",
        },
        {
            id: "31",
            title: "Where Did the Time Go",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "10 jul 2021",
            duration: "3:22",
        },
        {
            id: "32",
            title: "What Do It Mean",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "20 jul 2021",
            duration: "3:45",
        },
        {
            id: "33",
            title: "Time’s Blur",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Long Lost",
            addedDate: "5 ago 2021",
            duration: "14:38",
        },
        {
            id: "34",
            title: "The World Ender",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "10 ago 2021",
            duration: "4:31",
        },
        {
            id: "35",
            title: "Frozen Pines",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "25 ago 2021",
            duration: "4:10",
        },
        {
            id: "36",
            title: "Louisa",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "10 sep 2021",
            duration: "4:00",
        },
        {
            id: "37",
            title: "The Yawning Grave",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "20 sep 2021",
            duration: "3:18",
        },
        {
            id: "38",
            title: "Dead Man’s Hand",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "30 sep 2021",
            duration: "4:21",
        },
        {
            id: "39",
            title: "Cursed",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Strange Trails",
            addedDate: "5 oct 2021",
            duration: "4:02",
        },
        {
            id: "40",
            title: "Way Out There",
            artist: "Lord Huron",
            albumCover: defaultAlbumCover,
            album: "Lonesome Dreams",
            addedDate: "20 oct 2021",
            duration: "4:08",
        },
    ]);

    // Estado para la busqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Función para filtrar las canciones en base al teermino de búsqueda
    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );


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
                                    <Image
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

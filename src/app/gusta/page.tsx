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
            album: "Hello Cotto (Single)",
            addedDate: "15 mar 2019",
            duration: "3:14",
        },
        {
            id: "8",
            title: "B.U.H.O",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "24",
            addedDate: "3 jun 2021",
            duration: "3:30",
        },
        {
            id: "9",
            title: "Rockstar",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Rockstar (Single)",
            addedDate: "5 ene 2020",
            duration: "3:20",
        },
        {
            id: "10",
            title: "Ropa Cara",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Ropa Cara (Single)",
            addedDate: "12 nov 2021",
            duration: "3:45",
        },
        {
            id: "11",
            title: "Verte",
            artist: "Duki, Khea",
            albumCover: defaultAlbumCover,
            album: "Verte (Single)",
            addedDate: "18 feb 2020",
            duration: "4:01",
        },
        {
            id: "12",
            title: "Trap N' Export",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "3 may 2020",
            duration: "3:30",
        },
        {
            id: "13",
            title: "Freestyle Session",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Freestyle Sessions (Vol. 2)",
            addedDate: "18 oct 2019",
            duration: "2:35",
        },
        {
            id: "14",
            title: "Te Necesito",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "15 dic 2021",
            duration: "3:55",
        },
        {
            id: "15",
            title: "Como le digo",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "5 nov 2018",
            duration: "2:45",
        },
        {
            id: "16",
            title: "Pintao",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:25",
        },
        {
            id: "17",
            title: "Sola",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "12 ene 2019",
            duration: "3:10",
        },
        {
            id: "18",
            title: "Eclipse",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "30 mar 2021",
            duration: "3:55",
        },
        {
            id: "19",
            title: "Bailando",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "1 may 2018",
            duration: "3:35",
        },
        {
            id: "20",
            title: "Acapella",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "7 nov 2021",
            duration: "2:58",
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

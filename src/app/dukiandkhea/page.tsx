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
            id: "21",
            title: "Drip",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trap N' Export",
            addedDate: "21 jun 2020",
            duration: "3:44",
        },
        {
            id: "22",
            title: "Fvck Luv",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "12 dic 2021",
            duration: "3:29",
        },
        {
            id: "23",
            title: "Medusa",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "14 sep 2019",
            duration: "3:32",
        },
        {
            id: "24",
            title: "Dolce",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "4 ago 2019",
            duration: "2:48",
        },
        {
            id: "25",
            title: "Otra Botella",
            artist: "Khea, Duki",
            albumCover: defaultAlbumCover,
            album: "Otra Botella (Single)",
            addedDate: "18 nov 2020",
            duration: "3:30",
        },
        {
            id: "26",
            title: "Pegamos La Vuelta",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "12 oct 2021",
            duration: "3:44",
        },
        {
            id: "27",
            title: "No Lo Entiendo",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "10 feb 2020",
            duration: "3:28",
        },
        {
            id: "28",
            title: "Te Extraño",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "2 nov 2021",
            duration: "3:12",
        },
        {
            id: "29",
            title: "Sorry",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trap N' Export",
            addedDate: "7 sep 2020",
            duration: "2:50",
        },
        {
            id: "30",
            title: "Xenon",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:27",
        },
        {
            id: "31",
            title: "Codeína",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:14",
        },
        {
            id: "32",
            title: "Loba",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "12 jun 2018",
            duration: "3:20",
        },
        {
            id: "33",
            title: "Elevate",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "3 ene 2022",
            duration: "3:32",
        },
        {
            id: "34",
            title: "Flex",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "15 jul 2019",
            duration: "3:25",
        },
        {
            id: "35",
            title: "Nivel Dios",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "1 oct 2019",
            duration: "3:12",
        },
        {
            id: "36",
            title: "High",
            artist: "Duki, Khea",
            albumCover: defaultAlbumCover,
            album: "High (Single)",
            addedDate: "20 dic 2020",
            duration: "3:48",
        },
        {
            id: "37",
            title: "Rechula",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "17 feb 2021",
            duration: "3:15",
        },
        {
            id: "38",
            title: "Turro",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "2 feb 2022",
            duration: "3:14",
        },
        {
            id: "39",
            title: "Fin del Mundo",
            artist: "Khea, Duki",
            albumCover: defaultAlbumCover,
            album: "Fin del Mundo (Single)",
            addedDate: "4 abr 2022",
            duration: "3:50",
        },
        {
            id: "40",
            title: "Otra Vez",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "13 ene 2022",
            duration: "3:55",
        },
        {
            id: "41",
            title: "No Te Da",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trap N' Export",
            addedDate: "5 jun 2021",
            duration: "3:40",
        },
        {
            id: "42",
            title: "Oro Negro",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:58",
        },
        {
            id: "43",
            title: "B.U.H.O (Remix)",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "1 ago 2022",
            duration: "4:15",
        },
        {
            id: "44",
            title: "Zorra",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "15 feb 2020",
            duration: "3:21",
        },
        {
            id: "45",
            title: "Hechizo",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "4:20",
        },
        {
            id: "46",
            title: "Luz Verde",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trap N' Export",
            addedDate: "12 jul 2021",
            duration: "2:54",
        },
        {
            id: "47",
            title: "Kawaii",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Desde el Fin del Mundo",
            addedDate: "30 mar 2022",
            duration: "3:10",
        },
        {
            id: "48",
            title: "Rocket",
            artist: "Duki, Khea",
            albumCover: defaultAlbumCover,
            album: "Rocket (Single)",
            addedDate: "5 jun 2021",
            duration: "3:16",
        },
        {
            id: "49",
            title: "Tumbando el Club",
            artist: "Khea",
            albumCover: defaultAlbumCover,
            album: "Trapicheo",
            addedDate: "12 nov 2020",
            duration: "3:45",
        },
        {
            id: "50",
            title: "Parece Mentira",
            artist: "Duki",
            albumCover: defaultAlbumCover,
            album: "Super Sangre Joven",
            addedDate: "22 nov 2019",
            duration: "3:22",
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

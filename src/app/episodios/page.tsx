"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Interfaz para los datos de los episodios/podcasts
interface Podcast {
    id: string;
    title: string;
    speaker: string;
    podcastCover: string;
    series: string;
    releaseDate: string;
    duration: string;
}

export default function PodcastPage() {
    // Imagen predeterminada para el cover de los podcasts
    const defaultPodcastCover =
        "https://png.pngtree.com/png-clipart/20230813/original/pngtree-microphone-circle-orange-flat-icon-audio-shadow-speech-vector-picture-image_10585734.png";

    // Lista de episodios de podcast sobre superación personal (incluyendo el Seminario Fénix)
    const [podcasts] = useState<Podcast[]>([
        {
            id: "1",
            title: "El poder de la mente positiva",
            speaker: "Luis López",
            podcastCover: defaultPodcastCover,
            series: "Supera tus Límites",
            releaseDate: "12 feb 2022",
            duration: "45:00",
        },
        {
            id: "2",
            title: "Cómo construir hábitos exitosos",
            speaker: "Ana García",
            podcastCover: defaultPodcastCover,
            series: "Desarrolla tu Mejor Versión",
            releaseDate: "3 ene 2022",
            duration: "38:22",
        },
        {
            id: "3",
            title: "La clave para la productividad",
            speaker: "Carlos Pérez",
            podcastCover: defaultPodcastCover,
            series: "Productividad Sin Límites",
            releaseDate: "5 mar 2022",
            duration: "1:02:13",
        },
        {
            id: "4",
            title: "Mindfulness para el día a día",
            speaker: "Laura Martínez",
            podcastCover: defaultPodcastCover,
            series: "Bienestar Integral",
            releaseDate: "20 feb 2022",
            duration: "30:45",
        },
        {
            id: "5",
            title: "Supera el miedo al fracaso",
            speaker: "Juan Morales",
            podcastCover: defaultPodcastCover,
            series: "Mentalidad de Éxito",
            releaseDate: "15 dic 2021",
            duration: "52:20",
        },
        {
            id: "6",
            title: "La importancia del autocuidado",
            speaker: "María Torres",
            podcastCover: defaultPodcastCover,
            series: "Bienestar y Equilibrio",
            releaseDate: "22 ago 2021",
            duration: "27:13",
        },
        {
            id: "7",
            title: "Seminario Fénix: Renacer personal",
            speaker: "Mario Alonso Puig",
            podcastCover: defaultPodcastCover,
            series: "Seminario Fénix",
            releaseDate: "10 jul 2021",
            duration: "1:20:00",
        },
        {
            id: "8",
            title: "Seminario Fénix: Transformación Mental",
            speaker: "Mario Alonso Puig",
            podcastCover: defaultPodcastCover,
            series: "Seminario Fénix",
            releaseDate: "2 dic 2021",
            duration: "1:15:45",
        },
        {
            id: "9",
            title: "El Arte de Vivir el Presente",
            speaker: "Eckhart Tolle",
            podcastCover: defaultPodcastCover,
            series: "Despertar Interior",
            releaseDate: "28 sep 2021",
            duration: "1:05:13",
        },
        {
            id: "10",
            title: "Seminario Fénix: Crea tu Futuro",
            speaker: "Mario Alonso Puig",
            podcastCover: defaultPodcastCover,
            series: "Seminario Fénix",
            releaseDate: "15 ene 2022",
            duration: "1:30:20",
        },
    ]);

    // Estado para la búsqueda
    const [searchTerm, setSearchTerm] = useState("");

    // Función para filtrar los episodios en base al término de búsqueda
    const filteredPodcasts = podcasts.filter((podcast) =>
        podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        podcast.speaker.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-10">
            {/* Cabecera de la Lista de Podcasts */}
            <div className="bg-[#470bf4] p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center">
                <img
                    src={defaultPodcastCover}
                    alt="Podcast Cover"
                    className="w-20 h-20 md:w-28 md:h-28 rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Episodios de Superación Personal
                    </h1>
                    <p className="text-gray-300">
                        Jeffrey Mardoqueo • {filteredPodcasts.length} episodios
                    </p>
                </div>
            </div>

            {/* Input para búsqueda */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar episodios o conferencistas..."
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Lista de episodios de podcasts */}
            <div className="bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="table-auto w-full text-left text-white">
                    <thead className="border-b border-gray-700">
                        <tr>
                            <th className="py-2 md:py-3">#</th>
                            <th className="py-2 md:py-3">Título</th>
                            <th className="hidden md:table-cell py-2 md:py-3">Serie</th>
                            <th className="hidden md:table-cell py-2 md:py-3">Fecha de Lanzamiento</th>
                            <th className="py-2 md:py-3 text-right">Duración</th>
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">
                        {filteredPodcasts.map((podcast, index) => (
                            <motion.tr
                                key={podcast.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Retraso progresivo para las filas
                                className="hover:bg-neutral-800">
                                <td className="py-3">{index + 1}</td>
                                <td className="py-3 flex items-center break-words">
                                    <Image
                                        src={podcast.podcastCover}
                                        alt={podcast.title}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg mr-4"
                                    />
                                    <div>
                                        <p className="text-white font-semibold truncate">
                                            {podcast.title}
                                        </p>
                                        <p className="text-gray-400">{podcast.speaker}</p>
                                    </div>
                                </td>
                                <td className="hidden md:table-cell py-3 text-gray-400 truncate">
                                    {podcast.series}
                                </td>
                                <td className="hidden md:table-cell py-3 text-gray-400">
                                    {podcast.releaseDate}
                                </td>
                                <td className="py-3 text-right text-gray-400">{podcast.duration}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

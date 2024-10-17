import React from "react";
import { IoPlayCircle } from "react-icons/io5";

// Definición de la interfaz
interface IEstaciones {
    img: string;
    titulo: string;
    descripcion: string;
}

export default function Estaciones({ img, titulo, descripcion }: IEstaciones) {
    return (
        <div className="group relative bg-neutral-800 rounded-lg p-4 w-48">
            {/* Imagen y contenido de la tarjeta */}
            <div className="relative">
                <img
                    src={img}
                    alt={titulo}
                    className="rounded-lg"
                />
                <div className="mt-2">
                    <h3 className="text-white text-lg font-semibold">{titulo}</h3>
                    <p className="text-sm text-gray-400">{descripcion}</p>
                </div>
            </div>

            {/* Botón de play que aparece al hacer hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <IoPlayCircle size={50} className="text-[#f77441]" />
            </div>
        </div>
    );
}

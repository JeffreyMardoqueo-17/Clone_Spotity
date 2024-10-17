import React from 'react';
import { IconType } from 'react-icons'; // Importamos el tipo de ícono de react-icons

interface GeneroMusicalProps {
    icon: IconType;
    nombre: string;
}

const GeneroMusical: React.FC<GeneroMusicalProps> = ({ icon: Icon, nombre }) => {
    return (
        <div className="bg-gradient-to-br from-[#f77441] to-[#ff8b61] p-4 rounded-lg text-white flex flex-col items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <Icon className="text-3xl" />
            <span>{nombre}</span>
        </div>
    );
};

export default GeneroMusical;

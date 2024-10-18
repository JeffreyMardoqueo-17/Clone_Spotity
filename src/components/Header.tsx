import { IoList, IoChevronDown } from "react-icons/io5"; // Importamos IoChevronDown para la flecha
import { useState } from "react";
import Image from "next/image";

export default function Header({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false); // Estado para controlar el menú de perfil

    return (
        <header className="flex justify-between items-center p-4 bg-neutral-900">
            <div className="text-xl font-bold">Kodigo Music</div>

            {/* Botón de menú (hamburguesa) que abre el sidebar, visible solo en móviles */}
            <button
                className="lg:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(true)} // Abrir el sidebar
            >
                <IoList size={25} />
            </button>

            {/* Sección de perfil */}
            <div className="hidden lg:flex items-center space-x-3">
                {/* Imagen de perfil */}
                <Image
                    src="https://via.placeholder.com/40" // Placeholder para la imagen de perfil, puedes reemplazarla con la URL real
                    alt="Foto de perfil"
                    className="w-10 h-10 rounded-full"
                />

                {/* Nombre del usuario */}
                <span className="text-white font-medium">Jeffrey Mardoqueo</span>

                {/* Ícono de flecha para opciones */}
                <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)} // Abrir/Cerrar el menú de perfil
                    className="text-white hover:text-gray-400"
                >
                    <IoChevronDown size={20} />
                </button>

                {/* Menú de perfil (opcional, dependiendo si está abierto o cerrado) */}
                {profileMenuOpen && (
                    <div className="absolute right-0 mt-12 w-48 bg-neutral-800 text-white rounded-lg shadow-lg p-4">
                        <ul className="space-y-2">
                            <li className="hover:text-gray-400 cursor-pointer">Mi Perfil</li>
                            <li className="hover:text-gray-400 cursor-pointer">Configuración</li>
                            <li className="hover:text-gray-400 cursor-pointer">Cerrar sesión</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

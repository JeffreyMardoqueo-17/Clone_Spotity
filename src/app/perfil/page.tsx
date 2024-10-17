"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import fotoPerfil from "@/assets/foto.jpg"; // Reemplaza con la imagen real


// Interfaz para los datos del usuario
interface UserProfile {
    name: string;
    occupation: string;
    description: string;
}

export default function ProfilePage() {
    // Información del usuario
    const userProfile: UserProfile = {
        name: "Jeffrey Mardoqueo",
        occupation: "Trader, Programador, Amante de la naturaleza",
        description:
            "Soy un estudiante de Desarrollo de Software, ademas soy trader, me encanta aprender sobre analisis tecnico, aprender los puntos de interes en el mercado, asi como tambien me encanta el area de desarrollo de software.",
    };

    return (
        <div className="p-8">
            {/* Cabecera del perfil */}
            <div className="bg-[#f88254] p-6 rounded-lg mb-8 flex items-center flex-col md:flex-row">
                <Image
                    src={fotoPerfil}
                    alt="Perfil"
                    className="w-28 h-28 rounded-full mb-4 md:mb-0 md:mr-6 border-4 border-[#f77441]"
                    width={150}
                    height={150}
                />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-white">{userProfile.name}</h1>
                    <p className="text-gray-300 mt-2">{userProfile.occupation}</p>
                </div>
            </div>

            {/* Información del perfil */}
            <div className="bg-neutral-900 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold text-[#f77441] mb-4">Sobre mí</h2>
                <p className="text-gray-300 leading-relaxed">{userProfile.description}</p>

                {/* Sección de intereses o habilidades */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#f77441] mb-4">Habilidades</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Desarrollo de software con React, Next.js y Node.js, .NET developer</li>
                        <li>Trading, mercados financieros</li>
                        <li>Amante de la naturaleza y defensor de la sostenibilidad</li>
                        <li>Gestión eficiente del tiempo y trabajo bajo presión</li>
                    </ul>
                </div>

                {/* Sección de redes sociales */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#f77441] mb-4">Conéctate conmigo</h2>
                    <div className="flex space-x-6">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/50369842090"
                            target="_blank"
                            className="text-white hover:text-[#f77441] transition-colors duration-300"
                        >
                            <FaWhatsapp size={28} />
                        </a>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/jeffrey-mardoqueo/"
                            target="_blank"
                            className="text-white hover:text-[#f77441] transition-colors duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        {/* GitHub */}
                        <a
                            href="https://github.com/JeffreyMardoqueo-17"
                            target="_blank"
                            className="text-white hover:text-[#f77441] transition-colors duration-300"
                        >
                            <FaGithub size={28} />
                        </a>
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100041510871037&mibextid=ZbWKwL"
                            target="_blank"
                            className="text-white hover:text-[#f77441] transition-colors duration-300"
                        >
                            <FaFacebook size={28} />
                        </a>
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/jeffreymardoqueo/profilecard/?igsh=cnl1ZHFoZHE5NDE3"
                            target="_blank"
                            className="text-white hover:text-[#f77441] transition-colors duration-300"
                        >
                            <FaInstagram size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

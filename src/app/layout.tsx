"use client";
import { useState, useEffect, useRef } from "react";
import { IoAdd, IoSearch, IoList, IoClose, IoChevronDown } from "react-icons/io5";
import PlaylistItem from "@/components/PlaylistItem";
import Image from "next/image";
import fotoPerfil from "@/assets/foto.jpg";
import iconoKodigo from "@/assets/Icono.svg";
import "./globals.css";
import { useRouter, usePathname } from "next/navigation"; // Para manejar la navegación
import BuyPlan from "@/components/BuyPlan";
import AudioPlayer from "@/components/AudioPlayer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // useRouter para la navegación
  const pathname = usePathname(); // Obtener la ruta actual

  const playlists = [
    { id: "gusta", imageSrc: "https://png.pngtree.com/png-clipart/20231016/original/pngtree-orange-heart-in-circle-button-png-image_13319362.png", title: "Tus me gusta", subtitle: "Playlist • 500 canciones" },
    { id: "episodios", imageSrc: "https://png.pngtree.com/png-clipart/20230813/original/pngtree-microphone-circle-orange-flat-icon-audio-shadow-speech-vector-picture-image_10585734.png", title: "Tus Episodios", subtitle: "Podcast guardados y descargados" },
    { id: "dukiandkhea", imageSrc: "https://lh3.googleusercontent.com/proxy/XNvHJsOh9JJiN9K1xN8clMBz4Ee8yaWstVRbrEJ2n2P8ZhL0wGxFT3XYMj-bJvKEXl6_bVui5oElK8A1R4aS7Q4WS6axL7aBbKK66weyjQ", title: "Khea & Duki", subtitle: "Playlist • Jeffrey Mardoqueo" },
    { id: "lordhuron", imageSrc: "https://i.scdn.co/image/ab6761610000e5eb1d4e4e7e3c5d8fa494fc5f10", title: "Lord Huron", subtitle: "Álbum • Lord Huron" },
  ];

  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goHome = () => {
    router.push('/'); // Redirigir a la página de inicio
  };

  const handlePlaylistClick = (id: string) => {
    router.push(`/${id}`); // Navegar a la ruta específica

    // Verificamos si la pantalla es pequeña (ancho menor a 768px)
    if (window.innerWidth < 768) {
      setSidebarOpen(false); // Cerrar el sidebar solo en pantallas pequeñas
    }
  };

  // Función para cerrar el menú de perfil cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false); // Cerrar el menú si se hace clic fuera de él
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <div className="flex flex-col h-screen"> {/* Configuración de flex para toda la pantalla */}
          <header className="flex items-center p-4 bg-black fixed w-full z-40">
            <div className="flex items-center space-x-4">
              {/* Botón de menú (hamburguesa) que abre el sidebar, visible solo en móviles */}
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setSidebarOpen(true)} // Abrir el sidebar
              >
                <IoList size={25} />
              </button>

              {/* Logo de la app */}
              <div className="flex items-center">
                <Image
                  src={iconoKodigo}
                  alt="Ícono de Kodigo"
                  width={30}
                  height={30}
                />
                <div className="ml-2 text-xl font-bold">Kodigo Music</div>
              </div>
            </div>

            {/* Sección de perfil (visible en todas las pantallas) */}
            <div className="flex items-center space-x-3 ml-auto">
              {/* Imagen de perfil usando Next.js Image */}
              <Image
                src={fotoPerfil}
                alt="Foto de perfil"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)} // Abrir/Cerrar el menú de perfil
              />

              {/* Nombre del usuario (solo en pantallas grandes) */}
              <span className="hidden lg:block text-white font-medium">Jeffrey Mardoqueo</span>

              {/* Ícono de flecha solo en pantallas grandes */}
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)} // Abrir/Cerrar el menú de perfil
                className="hidden lg:block text-white hover:text-gray-400"
              >
                <IoChevronDown size={20} />
              </button>

              {/* Menú de perfil (se muestra cuando profileMenuOpen es true) */}
              {profileMenuOpen && (
                <div className="absolute z-50 right-0 mt-12 w-48 bg-neutral-800 text-white rounded-lg shadow-lg p-4 backdrop-blur-md" ref={profileMenuRef}>
                  <ul className="space-y-2">
                    <li className="hover:text-gray-400 cursor-pointer"><a href="perfil">Mi Perfil</a></li>
                    <li className="hover:text-gray-400 cursor-pointer">Configuración</li>
                    <li className="hover:text-gray-400 cursor-pointer">Cerrar sesión</li>
                  </ul>
                </div>
              )}
            </div>
          </header>

          <div className="flex-1 overflow-y-auto mt-10">
            <div className="flex h-full">
              {/* Barra lateral izquierda - visible en pantallas grandes */}
              <aside
                className={`rounded-tr-lg rounded-br-lg ${sidebarOpen ? "block" : "hidden"
                  } lg:flex lg:w-3/12 bg-black text-gray-300 p-5 fixed lg:static z-40 inset-0 lg:inset-auto lg:relative lg:z-auto transition-transform lg:transform-none transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
              >
                <div className="flex flex-col space-y-5 w-full">
                  {/* Botón de cerrar (X) solo en móviles */}
                  <button
                    className="lg:hidden self-end text-gray-300 hover:text-white"
                    onClick={() => setSidebarOpen(false)} // Cerrar el sidebar
                  >
                    <IoClose size={25} />
                  </button>

                  {/* Encabezado de la biblioteca */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">Tu biblioteca</div>
                    <IoAdd size={20} className="text-gray-300 hover:text-white cursor-pointer" />
                  </div>

                  {/* Mostrar el botón "Regresar al Home" solo si NO estamos en "/" */}
                  {pathname !== "/" && (
                    <button
                      onClick={goHome}
                      className="flex items-center gap-2 px-6 py-3 bg-[#f77441] text-white font-medium rounded-full text-sm md:text-base lg:text-lg shadow-lg hover:bg-[#ff8b61] transition-all duration-300 relative group text-center justify-center"
                      type="button"
                    >
                      Regresar al Home
                      <span className="absolute inset-0 bg-white rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
                    </button>
                  )}

                  {/* Barra de búsqueda */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-neutral-800 rounded-full px-3 py-1 w-full">
                      <IoSearch size={18} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar álbum o playlist"
                        className="bg-transparent text-white ml-2 focus:outline-none text-sm h-7 p-1 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Listado de playlists o álbumes filtrados */}
                  <div className="flex flex-col space-y-4 mt-4">
                    {filteredPlaylists.length > 0 ? (
                      filteredPlaylists.map((playlist, index) => (
                        <div
                          key={index}
                          onClick={() => handlePlaylistClick(playlist.id)} // Redirigir a la ruta correcta
                        >
                          <PlaylistItem
                            imageSrc={playlist.imageSrc}
                            title={playlist.title}
                            subtitle={playlist.subtitle}
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400">No se encontraron resultados</p>
                    )}
                  </div>
                  <BuyPlan />
                </div>
              </aside>

              {/* Contenido principal */}
              <main className="flex-1 bg-neutral-900 overflow-y-auto p-1 md:p-4 mb-8">
                {children}
              </main>
              <footer className="bg-black text-white pb-3 fixed bottom-0 w-full z-50 border-t-2 border-neutral-950 h-[60px]">
                <AudioPlayer />
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

"use client";
import { useState } from "react";
import { IoAdd, IoSearch, IoList, IoClose } from "react-icons/io5";
import PlaylistItem from "@/components/PlaylistItem";
import "./globals.css";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // Usamos usePathname para detectar la ruta actual

  const playlists = [
    { imageSrc: "https://via.placeholder.com/50", title: "Tus me gusta", subtitle: "Playlist • 6 canciones" },
    { imageSrc: "https://via.placeholder.com/50", title: "Paris Texas", subtitle: "Álbum • Kevin Kaarl" },
    { imageSrc: "https://via.placeholder.com/50", title: "Khea", subtitle: "Playlist • Jeffrey Mardoqueo" },
    { imageSrc: "https://via.placeholder.com/50", title: "Entrenamiento", subtitle: "Playlist • Jeffrey Mardoqueo" },
    { imageSrc: "https://via.placeholder.com/50", title: "Mis favoritos noche", subtitle: "Playlist • Jeffrey Mardoqueo" },
  ];


  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goHome = () => {
    router.push('/'); // Redirigir a la página de inicio
  };

  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <div className="flex flex-col h-screen">
          {/* Header con botón de menú */}
          <header className="flex justify-between items-center p-4 bg-neutral-900">
            <div className="text-xl font-bold">Kodigo Music</div>
            {/* Botón de menú (hamburguesa) que abre el sidebar */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setSidebarOpen(true)} // Abrir el sidebar
            >
              <IoList size={25} />
            </button>
          </header>

          <div className="flex h-full">
            {/* Barra lateral izquierda - visible en pantallas grandes */}
            <aside
              className={`${sidebarOpen ? "block" : "hidden"
                } lg:flex lg:w-64 bg-black text-gray-300 p-5 fixed lg:static z-40 inset-0 lg:inset-auto lg:relative lg:z-auto transition-transform lg:transform-none transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                    onClick={goHome} // Manejador del evento click
                    className="flex items-center gap-2 px-6 py-3 bg-[#f77441] text-white font-medium rounded-full text-sm md:text-base lg:text-lg shadow-lg hover:bg-[#ff8b61] transition-all duration-300 relative group"
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
                      <PlaylistItem
                        key={index}
                        imageSrc={playlist.imageSrc}
                        title={playlist.title}
                        subtitle={playlist.subtitle}
                      />
                    ))
                  ) : (
                    <p className="text-gray-400">No se encontraron resultados</p>
                  )}
                </div>
              </div>
            </aside>

            {/* Contenido principal */}
            <main className="flex-1 bg-neutral-900 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

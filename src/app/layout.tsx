import type { Metadata } from "next";
import "./globals.css"; import { IoPlaySkipBack, IoPlaySkipForward, IoPause, IoShuffle, IoRepeat } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoAdd, IoSearch, IoList } from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <div className="flex h-screen">
          {/* Barra lateral izquierda */}
          <aside className="w-64 bg-black text-gray-300 p-5">
            <div className="flex flex-col space-y-5">
              {/* Encabezado de la biblioteca */}
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Tu biblioteca</div>
                <IoAdd size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              </div>

              {/* Navegación por categorías */}
              <nav className="flex space-x-2">
                <button className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm focus:outline-none">
                  Playlists
                </button>
                <button className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm focus:outline-none">
                  Artistas
                </button>
                <button className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm focus:outline-none">
                  Álbumes
                </button>
              </nav>

              {/* Barra de búsqueda y recientes */}
              <div className="flex items-center justify-between">
                <div className="flex items-center bg-neutral-800 rounded-full px-3 py-1">
                  <IoSearch size={18} className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="bg-transparent text-white ml-2 focus:outline-none text-sm"
                  />
                </div>
                <IoList size={20} className="text-gray-300 hover:text-white cursor-pointer" />
              </div>

              {/* Listado de playlists o álbumes */}
              <div className="flex flex-col space-y-4 mt-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Tus me gusta"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="text-white font-semibold">Tus me gusta</div>
                    <div className="text-sm text-gray-400">Playlist • 6 canciones</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Paris Texas"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="text-white font-semibold">Paris Texas</div>
                    <div className="text-sm text-gray-400">Álbum • Kevin Kaarl</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Khea"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="text-white font-semibold">Khea</div>
                    <div className="text-sm text-gray-400">Playlist • Jeffrey Mardoqueo</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Entrenamiento"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="text-white font-semibold">Entrenamiento</div>
                    <div className="text-sm text-gray-400">Playlist • Jeffrey Mardoqueo</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Mis favoritos noche"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <div className="text-white font-semibold">Mis favoritos noche</div>
                    <div className="text-sm text-gray-400">Playlist • Jeffrey Mardoqueo</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1 bg-neutral-900 p-8 overflow-y-auto">
            {/* aqui se renderizara tdias las vistas */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

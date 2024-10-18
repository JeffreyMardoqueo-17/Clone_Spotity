import Estaciones from "@/components/Estaciones";
import BuyPlan from "@/components/BuyPlan";
import { FaGuitar, FaRegHeart, FaMusic, FaHeadphones } from "react-icons/fa";
import GeneroMusical from "@/components/GeneroMusical";

export default function Home() {
    return (
        <section className="mt-[6%] h-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
                <input
                    type="text"
                    placeholder="¿Qué quieres reproducir?"
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
                />
                {/* Botón de compra */}

            </div>

            {/* Sección Estaciones populares */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Estaciones populares</h2>
                <div className="flex gap-5 overflow-x-auto scrollbar-hide px-2"> {/* Aumentamos el gap entre las tarjetas */}
                    <Estaciones
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LyiPYazT44dBDSZ83oTQsT_iRP2Bw4W4sw&s"
                        titulo="Los Temerarios"
                        descripcion="Con Los Bukis, Los Yonic's, Los Rehenes..."
                    />
                    <Estaciones
                        img="https://www.hola.com/horizon/landscape/701889d25af9-shakira-z.jpg"
                        titulo="Shakira"
                        descripcion="Con Karol G, Juanes, Julieta Venegas..."
                    />
                    <Estaciones
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9PMvIeeHAVXm52DNCVVhJ5eYwRIOcNktbg&s"
                        titulo="Maná"
                        descripcion="Con Bacilos, Caifanes, Sin Bandera..."
                    />
                    <Estaciones
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LyiPYazT44dBDSZ83oTQsT_iRP2Bw4W4sw&s"
                        titulo="Los Temerarios"
                        descripcion="Con Los Bukis, Los Yonic's, Los Rehenes..."
                    />
                    <Estaciones
                        img="https://i.ytimg.com/vi/td_CYmQujd0/maxresdefault.jpg"
                        titulo="Lord Huron"
                        descripcion="The Night We Met - The night we met"
                    />
                    <Estaciones
                        img="https://fotografias.lasexta.com/clipping/cmsimages02/2024/06/09/4ACAC3F2-2CFE-4A63-9C0E-1DA32F5F670C/cantante-argentino-duki-actuacion-estadio-santiago-bernabeu-8-junio-2024-madrid-espana_104.jpg?crop=1280,1280,x302,y0&width=1200&height=1200&optimize=low&format=webply"
                        titulo="Duki"
                        descripcion="Con Khea, Cazzu, Bizarrap..."
                    />
                    <Estaciones
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtxfas-mWE07AZNvFvdfa1TNJ-x9OAExpIA&s"
                        titulo="Khea"
                        descripcion="Con Duki, Cazzu, Paulo Londra..."
                    />
                    <Estaciones
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5jzpDWv_5nbGb2lgtLf4xropMEGeC5CJdw&s"
                        titulo="Coldplay"
                        descripcion="Con Travis, Imagine Dragons, U2..."
                    />
                    <Estaciones
                        img="https://cdns-images.dzcdn.net/images/cover/6e83577ae867131fca74b9f77a30f161/1900x1900-000000-80-0-0.jpg"
                        titulo="Morat"
                        descripcion="Con Sebastián Yatra, Camilo, Reik..."
                    />
                </div>
            </section>
            {/* Sección de Géneros Musicales */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4 text-white">Géneros Musicales</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <GeneroMusical icon={FaGuitar} nombre="Rock" />
                    <GeneroMusical icon={FaRegHeart} nombre="Pop" />
                    <GeneroMusical icon={FaMusic} nombre="Jazz" />
                    <GeneroMusical icon={FaHeadphones} nombre="Electrónica" />
                    <GeneroMusical icon={FaMusic} nombre="Reggaetón" />
                    <GeneroMusical icon={FaGuitar} nombre="Instrumental" />

                </div>
            </section>
        </section>
    );
}

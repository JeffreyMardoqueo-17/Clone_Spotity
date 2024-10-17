import Estaciones from "@/components/Estaciones";
import BuyPlan from "@/components/BuyPlan";
import { FaGuitar, FaRegHeart, FaMusic, FaHeadphones } from "react-icons/fa";
import GeneroMusical from "@/components/GeneroMusical";

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-3">
                <input
                    type="text"
                    placeholder="¿Qué quieres reproducir?"
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
                />
                {/* Botón de compra */}
                <BuyPlan />
            </div>

            {/* Sección Estaciones populares */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Estaciones populares</h2>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
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
                        titulo="Lornd Huron"
                        descripcion="the nigth we meet - the night we met"
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
                    <GeneroMusical icon={FaGuitar} nombre="Rock Clásico" />
                    <GeneroMusical icon={FaRegHeart} nombre="instrumental" />
                    <GeneroMusical icon={FaMusic} nombre="Rap" />
                </div>
            </section>
        </>
    );
}

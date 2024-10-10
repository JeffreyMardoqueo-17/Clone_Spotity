import Estaciones from "./components/Estaciones";

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <input
                    type="text"
                    placeholder="¿Qué quieres reproducir?"
                    className="w-full p-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
                />
                <button className="ml-4 bg-blue-600 px-4 py-2 rounded-lg">Explorar Premium</button>
            </div>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Estaciones populares</h2>
                <div className="flex gap-3">
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
                        img="https://www.hola.com/horizon/landscape/701889d25af9-shakira-z.jpg"
                        titulo="Shakira"
                        descripcion="Con Karol G, Juanes, Julieta Venegas..."
                    />
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Artistas populares</h2>
                <div className="grid grid-cols-6 gap-4">
                    <div className="bg-neutral-800 p-4 rounded-lg">Karol G</div>
                    <div className="bg-neutral-800 p-4 rounded-lg">Grupo Frontera</div>
                    <div className="bg-neutral-800 p-4 rounded-lg">Feid</div>
                    <div className="bg-neutral-800 p-4 rounded-lg">Rauw Alejandro</div>
                    <div className="bg-neutral-800 p-4 rounded-lg">Maluma</div>
                    <div className="bg-neutral-800 p-4 rounded-lg">Daddy Yankee</div>
                </div>
            </section>


        </>
    );
}

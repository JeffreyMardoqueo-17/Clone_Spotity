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
                <div className="grid grid-cols-6 gap-4">
                    <Estaciones />

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

"use client";

import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function BuyPlan() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/plan'); // Redirigimos a la ruta /plan
    };

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={handleClick} // Manejador del evento click
                className="flex items-center gap-2 px-6 py-3 bg-[#f77441] text-white font-medium rounded-full text-sm md:text-base lg:text-lg shadow-lg hover:bg-[#ff8b61] transition-all duration-300 relative group"
                type="button"
            >
                Obtener Plan
                <IoMdArrowForward
                    className="w-5 h-5 transition-transform duration-300 ease-linear transform group-hover:translate-x-1"
                />
                <span className="absolute inset-0 bg-white rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20"></span>
            </button>
        </div>
    );
}

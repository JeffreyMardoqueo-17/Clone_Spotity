import React from 'react';
import PlanCard from '@/components/PlanCard';

export default function PlanPage() {
    return (
        <div className="min-h-full bg-neutral-900 py-12 px-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#f77441]">Nuestros Planes</h1>
            <p className="text-center text-lg text-gray-400 mb-12">
                Elige el plan que mejor se ajuste a tus necesidades. Ofrecemos planes flexibles para todos nuestros usuarios.
            </p>

            {/* Contenedor responsive para las tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <PlanCard
                    name="Plan Básico"
                    description="Perfecto para quienes empiezan a descubrir nuestras funciones."
                    price="$9.99/mes"
                    features={['Acceso limitado', 'Soporte 24/7', 'Actualizaciones automáticas']}
                />
                <PlanCard
                    name="Plan Estándar"
                    description="El plan más popular, con todas las funciones esenciales."
                    price="$19.99/mes"
                    features={['Acceso ilimitado', 'Soporte prioritario', 'Acceso a nuevas funciones']}
                />
                <PlanCard
                    name="Plan Premium"
                    description="Lo mejor de lo mejor, para quienes buscan una experiencia premium."
                    price="$29.99/mes"
                    features={['Todo en el Plan Estándar', 'Consultoría dedicada', 'Actualizaciones exclusivas']}
                />
            </div>
        </div>
    );
}

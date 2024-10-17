"use client";
import { motion } from "framer-motion";
import React from "react";

interface TableProps<T> {
    columns: { header: string; key: keyof T }[];
    data: T[];
    renderRow?: (item: T) => React.ReactNode; // Permite personalizar la renderización de las filas
}

export default function AnimatedTable<T extends { id: string | number }>({
    columns,
    data,
    renderRow,
}: TableProps<T>) {
    return (
        <div className="p-4 md:p-10">
            <div className="bg-neutral-900 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
                <table className="table-auto w-full text-left text-white">
                    <thead className="border-b border-gray-700">
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key as string} className="py-3">
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="cursor-pointer">
                        {data.map((item, index) => (
                            <motion.tr
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }} // Retraso progresivo para las filas
                                className="hover:bg-neutral-800"
                            >
                                {/* Renderizar la fila utilizando renderRow si está definida */}
                                {renderRow
                                    ? renderRow(item)
                                    : columns.map((column) => (
                                        <td key={column.key as string} className="py-3 text-gray-400">
                                            {String(item[column.key])}
                                        </td>
                                    ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

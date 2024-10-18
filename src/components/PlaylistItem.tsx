import Image from "next/image";
interface PlaylistItemProps {
    imageSrc: string;
    title: string;
    subtitle: string;
}

export default function PlaylistItem({ imageSrc, title, subtitle }: PlaylistItemProps) {
    return (
        <div className="flex items-center space-x-3 hover:bg-neutral-950 cursor-pointer p-1 rounded-sm">
            <Image src={imageSrc} alt={title} className="w-12 h-12 rounded" />
            <div>
                <div className="text-white font-semibold">{title}</div>
                <div className="text-sm text-gray-400">{subtitle}</div>
            </div>
        </div>
    );
}

import Image from "next/image";
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types";

import { cn } from "@/lib/utils";


interface GalleryTabProps {
    image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image 
                        fill
                        alt=""
                        src={image.url}
                        className="object-cover object-center"/>
                    </span>
                    <span className={cn(
                        "absolute rounded-md inset-0 ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent")}/>
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;
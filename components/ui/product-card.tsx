"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${data?.id}`);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition w-full px-6 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/*  Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    );
}

export default ProductCard;
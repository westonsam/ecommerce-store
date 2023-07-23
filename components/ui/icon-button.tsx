import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string
;}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    className
}) => {
    return (
        <div>

            <button
                onClick={onClick}
                className={cn(
                    `flex 
            items-center 
            justify-center 
            rounded-full 
            bg-white border 
            shadow-md 
            p-2 
            hover:scale-110 
            transition-color`,
            className
                )}>
                {icon}
            </button>
        </div>
    );
}

export default IconButton;
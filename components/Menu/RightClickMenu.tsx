import { FC, MouseEvent } from "react";
import PositionInterface from "./Interface/PositionInterface";
import {menuItems} from "./Constants/MenuItems";
import ItemInterface from "../DragAndDrop/Interface/ItemInterface";
import { UniqueIdentifier } from "@dnd-kit/core";

type EventItems = {
    position? : PositionInterface,
    setMenu? : () => void,
    handleFileDelete? : () => void,
    handleFileRename? : (action : boolean) => void
}

const RightClickMenu : FC<EventItems> = ({
        position, 
        setMenu, 
        handleFileDelete,
        handleFileRename
}) => {

    const adjustedPosition = (): { top: string; left: string } => {
        const menuWidth = 224; // w-56 = 14rem = 224px
        const menuHeight = menuItems.length * 40 + 16; // Approximate height per item + padding
        
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const adjustedX = Math.min(position?.x ?? 0 , viewportWidth - menuWidth);
        const adjustedY = Math.min(position?.y ?? 0, viewportHeight - menuHeight);

        return {
            top: `${adjustedY}px`,
            left: `${adjustedX}px`
        };
    };

    const handleContextMenu = (e : MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setMenu && setMenu();
    }

    const handleMenuItemClick = (item : MenuItemInterface) => {
        switch (item.id) {
            case 1 :
                handleFileRename && handleFileRename(true);
                break;
            case 3 :
                handleFileDelete && handleFileDelete();
                break;
            default : ;
        } 
    }
    

    return (
        <div>
            <div 
                className="fixed z-50 w-56 bg-[#1d232a] rounded-lg shadow-lg border border-gray-500"
                style={adjustedPosition()}
                onContextMenu={handleContextMenu}
            >
            <ul className="py-2">
                {menuItems.map((item) => (
                    <li 
                        key={item.id}
                        onClick={() => handleMenuItemClick(item)}
                        className="px-4 py-2 hover:bg-gray-400 cursor-pointer flex items-center space-x-2"
                    >
                        <span className={`w-4 h-4 ${item.color} rounded-full`}></span>
                        <span>{item.label}</span>
                    </li>
                ))}
                <li className="border-t border-gray-200">
                <button 
                    onClick={setMenu}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                >
                    Close Menu
                </button>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default RightClickMenu;
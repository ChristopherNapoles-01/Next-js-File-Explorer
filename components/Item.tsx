import { FC } from "react"
import ItemPropsInterface from "@/Interfaces/ItemPropsInterface";
import { UniqueIdentifier } from "@dnd-kit/core";


const Item : FC<ItemPropsInterface>= ({data, refetch}) => {

    const handleDoubleClick = (id : UniqueIdentifier) => {
        refetch(id as string)
    }

    return (
        <div className="flex flex-col items-center">
            {
                data.mimeType.includes('folder') ?
                    <div>
                        <img 
                            src="/open-folder.png" alt="folder" className="w-16 h-16" 
                            onDoubleClick={() => handleDoubleClick(data.id)}
                        />
                        
                    </div>
                :
                    <div>
                        <img 
                            src="/document.png" alt="folder" className="w-16 h-16"
                        />
                    </div>
            }
            <div>{data.name}</div>
        </div>
    )
}

export default Item;
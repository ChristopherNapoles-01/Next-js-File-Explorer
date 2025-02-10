import { FC } from "react"
import ItemInterface from "./DragAndDrop/Interface/ItemInterface"

const Item : FC<{data : ItemInterface}>= ({data}) => {
    return (
        <div className="flex flex-col items-center">
            {
                data.type == 'file' ?
                    <div>
                        <img src="/document.png" alt="folder" className="w-16 h-16" />
                    </div>
                :
                    <div>
                        <img src="/open-folder.png" alt="folder" className="w-16 h-16" />
                    </div>
            }
            <div>{data.name}</div>
        </div>
    )
}

export default Item;
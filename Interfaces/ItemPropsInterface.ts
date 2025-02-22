import ItemInterface from "./ItemInterface";

interface ItemPropsInterface {
    data : ItemInterface,
    
    refetch : (folderId? : string) => Promise<void>
}

export default ItemPropsInterface
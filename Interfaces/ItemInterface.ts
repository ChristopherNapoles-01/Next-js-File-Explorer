import { UniqueIdentifier } from "@dnd-kit/core";

interface ItemInterface {
    id : UniqueIdentifier,
    mimeType : string,
    name : string
}

export default ItemInterface;
import { UniqueIdentifier } from "@dnd-kit/core";

interface ItemInterface {
    id : UniqueIdentifier,
    type : string,
    name : string
}

export default ItemInterface;
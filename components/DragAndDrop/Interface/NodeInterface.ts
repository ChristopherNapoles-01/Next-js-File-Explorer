import { UniqueIdentifier } from "@dnd-kit/core";
import { ReactNode } from "react";

interface NodeInterface {
    id? : UniqueIdentifier
    children : ReactNode,
}

export default NodeInterface;
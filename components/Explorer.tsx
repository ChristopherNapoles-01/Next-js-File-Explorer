'use client'
import { 
    DndContext, 
    useSensors, 
    PointerSensor, 
    useSensor,
} from "@dnd-kit/core";
import Droppable from "./DragAndDrop/Droppable";
import Nodes from "./Nodes";
import { FC } from "react";

const Explorer : FC = () => {

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    return (
        <div 
            className=""
        >
             <DndContext
                sensors={sensors}
             >
                <Droppable>
                    <Nodes/>
                </Droppable>
            </DndContext>
        </div>
       
    )
}

export default Explorer;
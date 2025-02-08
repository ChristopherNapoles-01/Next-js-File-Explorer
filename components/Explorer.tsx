'use client'
import { 
    DndContext, 
    useSensors, 
    PointerSensor, 
    useSensor,
    DragEndEvent,
    DragStartEvent,
    UniqueIdentifier
} from "@dnd-kit/core";
import Droppable from "./DragAndDrop/Droppable";
import Nodes from "./Nodes";
import { FC, useState } from "react";

const Explorer : FC = () => {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragEnd = (e : DragEndEvent) => {

    }

    const handleDragStart = (e : DragStartEvent) => {
        
    }


    return (
        <div className="">
             <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
             >
                <Droppable>
                    <Nodes/>
                </Droppable>
            </DndContext>
        </div>
       
    )
}

export default Explorer;
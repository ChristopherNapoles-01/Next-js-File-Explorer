'use client'
import React, { FC, ReactNode, useState } from 'react';
import {UniqueIdentifier, useDraggable} from '@dnd-kit/core';

type DraggableTypes = {
    children : ReactNode,
    id : UniqueIdentifier
}

type itemPostion = {
    x : number,
    y : number
}


const Draggable : FC<DraggableTypes> = ({children,id}) => {
    const [positon, setPosition] = useState<itemPostion>({x : 100, y : 100});
    
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id as UniqueIdentifier,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        color:'white',
        left : "100px",
        right : "100px"
    } : undefined;
    
      
      return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {children}
        </div>
      );
}

export default Draggable
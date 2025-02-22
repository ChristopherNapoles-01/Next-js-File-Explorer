import React, { FC } from 'react';
import {useDroppable} from '@dnd-kit/core';
import NodeInterface from '../../Interfaces/NodeInterface';

const Droppable : FC<NodeInterface> = (props) => {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    // color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable;
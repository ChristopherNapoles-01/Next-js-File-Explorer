'use client';
import Draggable from "./DragAndDrop/Draggable";
import Item from './Item';
import PositionInterface from './Menu/Interface/PositionInterface';
import {MouseEvent, useEffect, useState } from 'react';
import RightClickMenu from "./Menu/RightClickMenu";
import ItemInterface from "./DragAndDrop/Interface/ItemInterface";
import RenameModal from "./Menu/RenameModal";

const Nodes = () => {

    const [showRightClickMenu, setShowRightClickMenu] = useState<boolean>(false);
    const [showRenameModal, setShowRenameModal] = useState<boolean>(false);
    const [position, setPosition] = useState<PositionInterface>();
    const [itemData, setItemData] = useState<ItemInterface | null>();
    const [data,setData] = useState<ItemInterface[]>([
        {
            id : 1,
            name : "test1",
            type : "file"
    
        },
        {
            id : 2,
            name : "test2",
            type: "folder"
        }
    ]);

    const handleContextMenu = (e: MouseEvent<HTMLDivElement>, type : string, data? : ItemInterface) => {
        e.preventDefault();
        setPosition({ x: e.pageX, y: e.pageY },)
        setShowRightClickMenu(!showRightClickMenu);
        setItemData(data);
    }

    const setMenu = () => {
        setShowRightClickMenu(false);
        setItemData(null);
    }

    const handleFileRename = (action : boolean) => {
        setShowRenameModal(action);
    }

    const handleFileDelete = () => {
        setData(data.filter((d) => d.id != itemData?.id));
        setShowRightClickMenu(false);
    }

    const renameFile = (name : string) => {
        setData(data.map((d) => {
            if (d.id == itemData?.id) {
                d.name = name;
            }
            return d;
        }));

        setShowRightClickMenu(false);
    }

    useEffect(() => {
        !showRightClickMenu && setItemData(null);
    }, [showRightClickMenu]);

    return (
        <div 
            className="h-full flex"
        >
            {
                data.map((d : ItemInterface) => (
                    <div
                        key={d.id}
                        className="m-4"
                        onContextMenu={(e) => handleContextMenu(e,'item',d)}
                    >
                        <Draggable id={d.id}>
                           <Item data={d}/>
                        </Draggable>
                    </div>
                ))
            }
            {
                showRightClickMenu &&
                <div>
                    <RightClickMenu
                        position = {position}
                        setMenu = {setMenu}
                        handleFileDelete = {handleFileDelete}
                        handleFileRename = {handleFileRename}
                    />
                </div>
            }
            {
                showRenameModal &&
                    <div>
                        <RenameModal 
                            fileName = {itemData?.name}
                            handleFileRename = {handleFileRename}
                            renameFile = {renameFile}
                        />
                    </div>
            }
        </div>
    );
}


export default Nodes;
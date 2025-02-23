'use client';
import Draggable from "./DragAndDrop/Draggable";
import Item from './Item';
import PositionInterface from '../Interfaces/PositionInterface';
import {MouseEvent, useEffect, useState } from 'react';
import RightClickMenu from "./Menu/RightClickMenu";
import ItemInterface from "../Interfaces/ItemInterface";
import RenameModal from "./Menu/RenameModal";
import useFetchFiles from "@/hooks/GoogleApiHooks/useFetchFiles";
import useDeleteFiles from "@/hooks/GoogleApiHooks/useDeleteFiles";
import useUpdateFiles from "@/hooks/GoogleApiHooks/useUpdateFile";


const Nodes = () => {
    const {
        isLoading,
        data,
        error,
        refetch
    } = useFetchFiles();
    
    const [showRightClickMenu, setShowRightClickMenu] = useState<boolean>(false);
    const [showRenameModal, setShowRenameModal] = useState<boolean>(false);
    const [position, setPosition] = useState<PositionInterface>();
    const [itemData, setItemData] = useState<ItemInterface | null>();

    const { deleteFile } = useDeleteFiles(); 
    const { updateFile, isUpdating } = useUpdateFiles();

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
        deleteFile(itemData?.id as string)
        refetch();
        setShowRightClickMenu(false);
    }

    const renameFile = async (name : string) => {
        setShowRightClickMenu(false);
        await updateFile(itemData?.id as string, name);
        refetch();
    }

    useEffect(() => {
        !showRightClickMenu && setItemData(null);
    }, [showRightClickMenu]);


    return (
        <div 
            className="h-full flex"
        >
            {
                (isUpdating || isLoading) && 
                    <div>
                        Loading ...
                    </div>
            }
            {
                (!isUpdating && !isLoading) && data?.map((d : ItemInterface) => (
                    <div
                        key={d.id}
                        className="m-4"
                        onContextMenu={(e) => handleContextMenu(e,'item',d)}
                    >
                        <Draggable id={d.id}>
                           <Item 
                                data={d}
                                refetch={refetch}
                            />
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
            {
                error && 
                    <div>
                        An Error Occurred
                    </div>
            }
        </div>
    );
}


export default Nodes;
'use client'
import { 
    DndContext, 
    useSensors, 
    PointerSensor, 
    useSensor,
} from "@dnd-kit/core";
import Droppable from "./DragAndDrop/Droppable";
import Nodes from "./Nodes";
import React, {FC, useEffect } from "react";
import useUploadFile from "@/hooks/GoogleApiHooks/useUploadFile";
import { toastSuccess, toastError } from "@/Toasts/ToastNotification";

const Explorer : FC = () => {

    const {isUploading, uploadFile} = useUploadFile();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>, folderId : string) => {
        const targetFile = e.dataTransfer.files;
        const {message, isSuccess} = await uploadFile(targetFile[0], folderId);
        isSuccess ? toastSuccess(message) : toastError(message);   
    }

    useEffect(() => {
        // Function to prevent default behavior
        const preventDefaults = (e: DragEvent) => {
          e.preventDefault();
          e.stopPropagation();
        };

        // Add event listeners to the document
        const events : string[] = ['dragenter', 'dragover', 'dragleave', 'drop'];
        
        events.forEach(eventName => {
          document.addEventListener(eventName, preventDefaults, false);
        });
    
        // Cleanup function to remove event listeners when component unmounts
        return () => {
          events.forEach(eventName => {
            document.removeEventListener(eventName, preventDefaults, false);
          });
        };
      }, []);

    return (
        <div 
            onDrop={(e) => handleDrop(e,  localStorage.getItem('currentFolder') ?? '')}
        >
             <DndContext
                sensors={sensors}
             >
                <Droppable>
                    {
                        isUploading ?
                            <div>
                                Loading...
                            </div>
                        :
                            <Nodes/>
                    }
                </Droppable>
            </DndContext>
        </div>
       
    )
}

export default Explorer;
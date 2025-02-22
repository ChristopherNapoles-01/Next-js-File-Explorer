'use client';

import { gdriveFolderId } from "@/config/googleConfig";
import ItemInterface from "@/Interfaces/ItemInterface";
import axios from "axios"
import { useCallback, useEffect, useState } from "react";

const useFetchFiles = () => {
    const [data, setData] = useState<ItemInterface[]>([])
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getFilesAndFolders = useCallback(
        async (folderId? : string) => {
            try {
                setIsLoading(true);
            
                if (!folderId) {
                    folderId = localStorage.getItem('currentFolder') ?? gdriveFolderId;
                }
                 
                localStorage.setItem('currentFolder', folderId);

                const response = await axios.get('api/list', {
                    params : {
                        folder_id : folderId
                    }
                });
    
                setData(response?.data?.data);
                setIsLoading(false);
            }
            catch (error) {
                console.log((error as Error).message);
                setError((error as Error).message);
                setIsLoading(false);
            }
        }, [])

    useEffect(()=> {
        getFilesAndFolders();
    },[getFilesAndFolders])

    return {
        data,
        isLoading,
        error,
        refetch : getFilesAndFolders
    }
}

export default useFetchFiles;
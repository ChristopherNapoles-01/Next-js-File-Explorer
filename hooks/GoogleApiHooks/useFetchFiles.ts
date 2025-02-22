'use client';

import ItemInterface from "@/Interfaces/ItemInterface";
import axios from "axios"
import { useEffect, useState } from "react";

const useFetchFiles = () => {
    const [data, setData] = useState<ItemInterface[]>([])
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=> {
        getFilesAndFolders();
    },[])

    const getFilesAndFolders = async () => {
        try {
            const response = await axios.get('api/list');
            setData(response?.data?.data);
            setIsLoading(false);
        }
        catch (error) {
            console.log((error as Error).message);
            setError((error as Error).message);
            setIsLoading(false);
        }
    }

    return {
        data,
        isLoading,
        error
    }
}

export default useFetchFiles;
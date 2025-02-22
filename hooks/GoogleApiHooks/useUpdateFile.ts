'use client'

import { useCallback, useState } from "react";
import axios from "axios";

const useUpdateFiles = () => {
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const updateFile = async (fileId: string, newName : string) : Promise<boolean> => {
        try {
            setIsUpdating(true);
            const response = await axios.put(`/api/update/${fileId}`, {
               new_name : newName
            });
            setIsUpdating(false);
            return true

        } catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }

    return { isUpdating, updateFile };
};

export default useUpdateFiles;
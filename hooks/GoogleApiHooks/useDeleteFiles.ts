'use client'

import { useCallback, useState } from "react";
import axios from "axios";

const useDeleteFiles = () => {
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    

    const deleteFile = async (fileId: string) => {
        try {
            const response = await axios.delete(`/api/delete/${fileId}`);

            setIsDeleted(response.status == 200)

        } catch (error) {
            console.error('Error deleting file:', error);
            throw error;
        }
    }

    return { isDeleted, deleteFile };
};

export default useDeleteFiles;
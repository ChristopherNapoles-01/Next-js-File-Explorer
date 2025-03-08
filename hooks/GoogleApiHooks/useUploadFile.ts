'use client';
interface uploadFileResponse {
    message : string,
    isSuccess : boolean
}

import axios, { AxiosError } from "axios";
import { useState } from "react";

const  useUploadFile = () => {
    const [isUploading, setIsUploading] = useState<boolean>(false);
    
    const uploadFile = async (file : File, folderId : string) : Promise<uploadFileResponse>  => {
        try {
            if (!folderId) {
                throw new Error('Folder id is required.')
            }

            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folderId', folderId);

            const response = await axios.post('/api/upload', formData);

            setIsUploading(false)

            return {
                message : response.data.message,
                isSuccess : true
            };
        }
        catch(error) {
            setIsUploading(false);
            if (error instanceof AxiosError) {
                const axiosError = error as AxiosError;
                return {
                    message : axiosError.message,
                    isSuccess : false
                }
            }

            return {
                message : (error as Error).message,
                isSuccess : false
            };
        }
    }

    return {
        uploadFile,
        isUploading,
    }

}

export default useUploadFile;




import { serviceCredentials } from '../../config/googleConfig';
import { google } from 'googleapis';
import { ALL_SCOPES } from '@/Constants/GoogleApiConstants';

const initializeDrive = () => {
    try {
        if (!serviceCredentials) {
            return null
        }

        const credentials = JSON.parse(serviceCredentials);

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes : ALL_SCOPES
        });

        const drive = google.drive({ version: "v3", auth });

        return drive;
        
    }
    catch (error) {
        console.log((error as Error).message);
    }
}

export default initializeDrive;
import initializeDrive from "@/hooks/GoogleApiHooks/initializeDrive"
import { gdriveFolderId } from "@/config/googleConfig";


const GET = async () => {
    try {
        const drive = initializeDrive();
        const folderId = gdriveFolderId; 

        if (!drive) {
            throw new Error("Drive failed to initialize");
        }

        const data = await drive.files.list({
            q: `'${folderId}' in parents`,
            fields: "files(id, name, mimeType)",
        });

        const files = data?.data?.files ?? [];

        return Response.json({
            data: files
        });

    } 
    catch(error) {
        return Response.json( 
            { error: (error as Error).message, code: 400 },
            { status: 400 }
        );
    }
}

export { GET }
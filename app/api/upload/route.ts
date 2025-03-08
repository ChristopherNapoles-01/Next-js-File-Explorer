import { InvalidFileTypeException } from "@/Exceptions/InvalidFileType";
import initializeDrive from "@/hooks/GoogleApiHooks/initializeDrive"

const POST = async (req : Request) => {

    try {
        const drive = initializeDrive();
        const formData = await req.formData();
        // If you need the regular form fields (not files)
        const fields: Record<string, any> = {};
        
        // Extract all non-file fields
        for (const [key, value] of formData.entries()) {
            fields[key] = value;
        }

        if (!fields.file.type.includes('text')) {
            throw new InvalidFileTypeException
        }

        return Response.json({ message: "File uploaded successfully." });
    }
    catch (error) {
        console.log((error as Error).message);  
        return Response.json(
            { error: (error as Error).message },
            { status: 400 }
        );
       
    }
   
    
}

export { POST }
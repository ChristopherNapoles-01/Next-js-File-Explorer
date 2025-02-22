import initializeDrive from "@/hooks/GoogleApiHooks/initializeDrive";

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const drive = initializeDrive();
        const parameters = await params;
        const fileId = parameters.id;
        const { new_name } = await req.json();

        if (!drive) {
            throw new Error("Drive failed to initialize");
        }
        console.log(new_name);
        await drive.files.update({
            fileId: fileId,
            requestBody : {
                name : new_name
            }
        });

        return Response.json({ message: "File updated successfully." });
    } 
    catch (error) {
        return Response.json(
            { error: (error as Error).message },
            { status: 400 }
        );
    }
}
import initializeDrive from "@/hooks/GoogleApiHooks/initializeDrive";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const drive = initializeDrive();
        const parameters = await params;
        const fileId = parameters.id;

        if (!drive) {
            throw new Error("Drive failed to initialize");
        }

        await drive.files.delete({
            fileId: fileId
        });

        return Response.json({ message: "File deleted successfully" });
    } 
    catch (error) {
        return Response.json(
            { error: (error as Error).message },
            { status: 400 }
        );
    }
}
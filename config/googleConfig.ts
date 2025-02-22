

const serviceCredentials : string = process.env.SERVICE_CREDENTIALS ?? '';

const gdriveFolderId : string = process.env.NEXT_PUBLIC_FOLDER_ID ?? '';

export {
    serviceCredentials,
    gdriveFolderId
}


const serviceCredentials : string = process.env.SERVICE_CREDENTIALS ?? '';

const gdriveFolderId : string = process.env.FOLDER_ID ?? '';

export {
    serviceCredentials,
    gdriveFolderId
}

export class InvalidFileTypeException extends Error
{
    statusCode : number
    constructor(statusCode: number = 400) {
        const message = 'Invalid file type.'
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        
        // This is necessary for proper stack trace in TypeScript
        Object.setPrototypeOf(this, InvalidFileTypeException.prototype);
      }
}
import { AppError } from './app-error';
import { AppErrorHandler } from './app-error-handler';

export class BadRequestError extends AppError implements AppErrorHandler {
    handleError(error: any): void {
        throw new Error(error);
    }
    constructor() {
        super('Bad Request Error has occurred!');
    }
}

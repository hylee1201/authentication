import { AppError } from './app-error';
import { AppErrorHandler } from './app-error-handler';

export class NotFoundError extends AppError implements AppErrorHandler {
    handleError(error: any): void {
        throw new Error(error);
    }
    constructor() {
        super('Not Found Error has occurred!');
    }
}

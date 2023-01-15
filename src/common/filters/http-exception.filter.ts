import { Logger, HttpStatus, Catch, ExceptionFilter, ArgumentsHost, HttpException } from "@nestjs/common";

@Catch()
export class AllExceptionFilters implements ExceptionFilter {

    private readonly logger = new Logger(AllExceptionFilters.name)

    catch(exception: unknown, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const request = context.getRequest()
        const response = context.getResponse()

        const instanceOfHttpException = exception instanceof HttpException;
        const statusCode = instanceOfHttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
        const message = instanceOfHttpException ? exception.getResponse() : exception;

        this.logger.error(`Http Status: ${statusCode} :: Error Message: ${JSON.stringify(message)}`)

        response.status(statusCode).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message
        })
    }

}

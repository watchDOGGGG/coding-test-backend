"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = void 0;
const throw_error_1 = require("./throw-error");
class BuildResponse {
    sendSuccessRes({ res, data, message, statusCode = 200 }) {
        return res.status(statusCode).json({
            message,
            data,
            success: true,
        });
    }
    sendErrorRes({ errors = {}, message, statusCode = 400 }) {
        (0, throw_error_1.throwError)(statusCode, {
            message,
            errors,
        });
    }
    catchErrors({ errors, message, statusCode = 400 }) {
        return {
            errors,
            message,
            statusCode,
        };
    }
}
exports.buildResponse = new BuildResponse();

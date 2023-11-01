"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, _, res, next) => {
    let finalMessage = error.message;
    let duplicateError = undefined;
    if (error.code === 11000) {
        finalMessage = `${Object.keys(error.keyValue)} already exists`;
        duplicateError = [
            {
                msg: `${Object.keys(error.keyValue)} already exists`,
                field: Object.keys(error.keyValue)[0],
            },
        ];
    }
    res.status(error.status || 500).json({
        message: finalMessage,
        data: undefined,
        success: false,
        errors: (error === null || error === void 0 ? void 0 : error.errors) || duplicateError || {},
    });
    next();
};
exports.errorHandler = errorHandler;

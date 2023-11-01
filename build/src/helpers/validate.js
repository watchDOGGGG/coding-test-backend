"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const throw_error_1 = require("./throw-error");
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => {
        extractedErrors.push({ msg: err.msg, field: '' });
    });
    (0, throw_error_1.throwError)(422, {
        message: 'Error processing request',
        errors: extractedErrors,
    });
};
exports.validate = validate;

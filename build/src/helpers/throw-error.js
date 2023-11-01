"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_errors_1 = __importDefault(require("http-errors"));
const throwError = (status, error) => {
    throw (0, http_errors_1.default)(status, error);
};
exports.throwError = throwError;

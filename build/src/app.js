"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const error_handler_1 = require("./helpers/error-handler");
const test_route_v1_1 = __importDefault(require("./domain/test/route/test.route.v1"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('welcome to coding test');
});
// route registration
app.use('/api/v1/book', test_route_v1_1.default);
app.use(error_handler_1.errorHandler);
app.use((req, res, next) => {
    if (res.headersSent) {
        return next();
    }
    res.status(404).json({
        message: 'Route not found',
        error: { message: 'Route not found' },
        data: undefined,
        success: false,
    });
});
exports.default = app;

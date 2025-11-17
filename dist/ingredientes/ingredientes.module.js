"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesModule = void 0;
const common_1 = require("@nestjs/common");
const ingredientes_service_1 = require("./ingredientes.service");
const ingredientes_controller_1 = require("./ingredientes.controller");
const prisma_service_1 = require("../common/prisma.service");
let IngredientesModule = class IngredientesModule {
};
exports.IngredientesModule = IngredientesModule;
exports.IngredientesModule = IngredientesModule = __decorate([
    (0, common_1.Module)({
        controllers: [ingredientes_controller_1.IngredientesController],
        providers: [ingredientes_service_1.IngredientesService, prisma_service_1.PrismaService],
        exports: [ingredientes_service_1.IngredientesService],
    })
], IngredientesModule);
//# sourceMappingURL=ingredientes.module.js.map
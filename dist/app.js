"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.addTodo = exports.addUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addUser(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
        return user;
    });
}
exports.addUser = addUser;
function addTodo(title, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title, userId
            }
        });
        console.log(todo);
        return todo;
    });
}
exports.addTodo = addTodo;
//read
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId
            }
        });
        return todos;
    });
}
exports.getTodo = getTodo;
function updateTodo(id, title) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.update({
            where: {
                id
            },
            data: {
                title
            }
        });
        return todo;
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.delete({
            where: { id }
        });
        return todo;
    });
}
exports.deleteTodo = deleteTodo;

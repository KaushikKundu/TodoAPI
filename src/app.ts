import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function addUser(name:string, email:string, password:string) {
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return user;
}
export async function addTodo(title:string,userId:number) {
    const todo = await prisma.todo.create({
        data:{
            title, userId
        }
    })
    console.log(todo)
    return todo;
}
//read
export async function getTodo(userId:number) {
    const todos = await prisma.todo.findMany({
        where:{
            userId
        }
    })
    return todos;
}
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
export async function updateTodo(id:number,title:string) {
    const todo = await prisma.todo.update({
        where:{
            id
        },
        data:{
            title
        }
    })
    return todo;

}
export async function deleteTodo(id:number) {
    const todo = await prisma.todo.delete({
        where:{id}
    })
    return todo
}
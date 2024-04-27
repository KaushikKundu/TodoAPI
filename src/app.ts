import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function addUser(name:string, email:string, password:string) {
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password
        }
    })
    console.log(user)
}

module.exports = {
    addUser
}
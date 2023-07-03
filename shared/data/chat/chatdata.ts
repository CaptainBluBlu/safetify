// get the data from prisma databases
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
//
// export default async function handler(req, res) {
//   const result = await prisma.user.findMany()
//   res.json(result)
// }


// Create a message interface

interface IMessage  {
    id: number;
    user: string;
    message: string;
}


const Messages : IMessage[] = [{
    id: 1,
    user: "jane doe",
    message: "hello world"
}, 
{
    id: 2,
    user: "john doe",
    message: "hello world"
},
{
    id: 3,
    user : "jane doe",
    message: "Hey john <3"
},
{
    id: 4,
    user: "john doe",
    message: "Hey jane <3"
}]

export default Messages
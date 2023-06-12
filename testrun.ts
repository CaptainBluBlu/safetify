// import prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//define main function
async function main() {
    const allUser = await prisma.user.findMany();
    console.log(allUser);
}

main()
    .catch(e => {
    throw e
    })
    .finally(async () => {
    await prisma.$disconnect()
})  
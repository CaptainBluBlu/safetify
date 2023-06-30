import { Gender, Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      gender: Gender.FEMALE,
      icNumber: '123456789012',
      authUserId: 'f2b51319-a7b5-48e6-8c36-34458a3e08f6',
      username: 'alice',
      supportPost: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
        },
      },
    },
    
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      id: '0d361dd4-111f-11ee-be56-0242ac120002',
      email: 'bob@prisma.io',
      name: 'Bob',
      gender: Gender.MALE,
      icNumber: '123456789012',
      authUserId: '8474a2cd-603b-4f44-ac69-2d1950a65a61',
      username: 'bob',
      supportPost: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
          },
        ],
      },
      ChatRooms: {
        create: {
          chatRoomName: 'Girl1 & Guy1',
          description: 'Girl1 & Guy1',
          memeberCount: 2,
          Creator: {
            connect: {
              id: '0d361dd4-111f-11ee-be56-0242ac120002'
            }
          }
        }
      }
    },
  })

  


  let chatRoom : Prisma.ChatRoomsCreateInput[] 

  chatRoom = [{
    chatRoomName: 'Girl1 & Guy1',
    description: 'Girl1 & Guy1',
    memeberCount: 2,
    Creator: {
      connect: {
        id: '0d361dd4-111f-11ee-be56-0242ac120002'
      }
    }
  }]




  console.log({ alice, bob })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
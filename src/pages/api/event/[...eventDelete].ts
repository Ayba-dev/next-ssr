import {prisma} from "@/server/db";

export const deleteEvent = async (id: number) => {
    try {
        await prisma.event.delete({
            where: {
                id: id,
            },
        })
    } catch (error: any) {
        console.log(error.message)
    }
}
import { prisma } from "../db";
import { isAuth, procedure, router } from "../trpc";
import { z } from "zod";
import {CreateEventSchema} from "@/shared/api";

export const deleteRouter = router({
    // Новый метод для удаления события
    delete: procedure
        .input(z.object({ id: z.number() })) // Ожидаем объект с `id` события
        .use(isAuth)
        .mutation(async ({ input, ctx: { user } }) => {
            // Проверяем, что событие существует и пользователь является его автором
            const event = await prisma.event.findUnique({
                where: { id: input.id },
            });

            if (!event) {
                throw new Error("Event not found");
            }

            if (event.authorId !== user.id) {
                throw new Error("You do not have permission to delete this event");
            }

            // Удаляем событие
            await prisma.event.delete({
                where: { id: input.id },
            });

            return { message: "Event deleted successfully" };
        }),
});
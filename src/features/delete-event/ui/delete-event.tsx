"use client"
import {prisma} from "@/server/db";
import {deleteEvent} from "@/pages/api/event/[...eventDelete]";

type DeleteEventButtonProps = {
    eventId: number;
};

export const DeleteEvent = ({eventId}: DeleteEventButtonProps) => {
    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
        >
            Покинуть
        </button>
    );
};

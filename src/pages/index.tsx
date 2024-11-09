import {EventCard} from "@/entities/event";
import {JoinEventButton} from "@/features/join-event";
import {prisma} from "@/server/db";
import {trpc} from "@/shared/api";
import {DeleteEventItem} from "@/features/delete-event";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()
    const {data, refetch} = trpc.event.findMany.useQuery();

    const {mutate} = trpc.remove.delete.useMutation({
        onSuccess: () => {
            router.push('/')
            console.log("Successfully removed participation from the event.");
        },
        onError: (error) => {
            console.error("Error quitting event:", error);
        },
    });

    const handleDelete = (id: number) => {
        mutate({id}); // Передаем объект с id
    };


    return (
        <ul>
            {data?.map((event) => (
                <li key={event.id} className="mb-6">
                    <EventCard
                        {...event}
                        action={
                            !event.isJoined ? (
                                    <JoinEventButton eventId={event.id} onSuccess={refetch}/>
                                ) :
                                <DeleteEventItem handleDelete={handleDelete}  eventId={event.id}/>
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

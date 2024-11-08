import {EventCard} from "@/entities/event";
import {JoinEventButton} from "@/features/join-event";
import {prisma} from "@/server/db";
import {trpc} from "@/shared/api";
import {DeleteEvent} from "@/features/delete-event";

export default function Home() {
    const {data, refetch} = trpc.event.findMany.useQuery();

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
                                <DeleteEvent eventId={event.id}/>
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

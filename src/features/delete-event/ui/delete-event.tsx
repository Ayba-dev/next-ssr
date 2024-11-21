
type DeleteEventButtonProps = {
    eventId: number;
    handleDelete: (id: number) => void
};


export const DeleteEventItem = ({eventId, handleDelete}: DeleteEventButtonProps) => {

    return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
            onClick={() => handleDelete(eventId)}
        >
            Покинуть
        </button>
    );
};

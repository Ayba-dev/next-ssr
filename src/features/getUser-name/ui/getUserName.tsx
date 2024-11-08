import { useSession } from "next-auth/react"
import Link from "next/link";
import {useRouter} from "next/router";

export default function GetUserName() {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "authenticated") {
        return (
            <div className={'flex items-center gap-8'}>
                <p>{session?.user.name}</p>
                <button className={'bg-green-500 py-2 px-3 rounded-[10px] text-white font-bold'} onClick={() => router.push('events/create')}>Создать события</button>
            </div>
        )
    }

    return <Link href="/api/auth/signin">Sign in</Link>
}
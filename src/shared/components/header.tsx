import React from 'react';
import logo from '../../../public/next.svg'
import Image from "next/image";
import {useRouter} from "next/router";
import {prisma} from "@/server/db";
import GetUserName from "@/features/getUser-name/ui/getUserName";
import Link from "next/link";

const Header = () => {

    const router = useRouter()
    return (
        <div className={'flex justify-between my-10 '}>
            <div>
                <Link href={'/'}>
                    <Image width={150} src={logo} alt={'logo'}/>
                </Link>
            </div>
            <GetUserName/>
        </div>
    );
};

export default Header;


// <button onClick={() => router.push('api/auth/signin')}>Войти</button>
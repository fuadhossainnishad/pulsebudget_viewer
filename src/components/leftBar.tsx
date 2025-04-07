'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function LeftBar() {
    const [navs, setNavs] = useState<{ name: string, path: string }[]>(NavsInfo)
    useEffect(() => {
        const login = localStorage.getItem("loggedin")
        if (login === "true") {
            setNavs((pre) => [
                ...pre,
                { name: "Transaction", path: "/transaction" }
            ])
        }
    }, [])
    return (
        <main className=' mt-5 flex justify-center'>
            {/* <section>
                <h1 className='text-lg text-black text-center font-semibold'>PulseBudget</h1>
            </section> */}
            <section className='flex gap-6 text-black text-sm bg-amber-50 h-full w-fit px-10 py-4  rounded-3xl '>
                {navs.map((nav, i) => (
                    <Link key={i} href={nav.path} className=''>{nav.name}</Link>
                ))}
            </section>
            {/* <section className='flex flex-col text-black gap-3 '>
                <h1 className="text-sm text-blue-400 text-center mt-10">Developed By Fuad Hossain</h1>
            </section> */}
        </main>
    )
}

export const NavsInfo = [
    { name: "Dashboard", path: "/" },
    { name: "Filter", path: "/filter" },
    { name: "Login", path: "/login" },
    { name: "Settings", path: "/settings" },
]
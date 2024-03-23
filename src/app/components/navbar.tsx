'use client'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {classNames} from "@/app/utils/classnames";
import Image from "next/image";
import {createContext, useContext, useState} from 'react';
import Link from "next/link";

const navigation = [
    {name: 'Gutter Guards', href: '/Gutter-Guards', current: false},
    {name: 'Gutters', href: '/Gutters', current: false},
    {name: 'Gutter Cleaning', href: '/Gutter-Cleaning', current: false},
]

const NavbarContext = createContext({
    home: true, setHome: () => {
    }, guards: false, setGuards: () => {
    }, gutters: false, setGutters: () => {
    }, cleaning: false, setCleaning: () => {
    }
});

export default function Navbar() {
    let {home, setHome, guards, setGuards, gutters, setGutters, cleaning, setCleaning} = useContext(NavbarContext);
    return (
        <Disclosure as="nav" className="bg-brand-blue z-0">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-32 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-orange">
                                        <span className="absolute -inset-0.5"/>
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <Image
                                            className="h-8 w-auto"
                                            src="/img/HighViewWhiteIconws.png"
                                            alt="High View's Seamless Gutters"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:hidden lg:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-brand-orange hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex  items-center">
                                <div className=" md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    <div className="flex-shrink-0">
                                        <a href="https://login.coloradogutter.com">

                                            <button
                                                type="button"
                                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-light-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-brand-dark-orange"
                                            >
                                                Customer <br/>Log In
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 ">
                            {navigation.map((item) => (
                                <Link href={item.href} key={item.name} className="">
                                    <Disclosure.Button
                                        key={item.name}
                                        className={classNames(
                                            item.current ? 'bg-brand-light-orange text-white' : 'text-white hover:bg-brand-light-orange hover:text-gray-500 focus:bg-brand-light-orange focus:text-gray-500',
                                            'block  px-3 py-6 text-base font-bold text-center w-full'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

'use client'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {classNames} from "@/app/utils/classnames";
import Image from "next/image";

const navigation = [
    {name: 'Home', href: '/', current: true},
    {name: 'Gutter Guards', href: '/Gutter-Guards', current: false},
    {name: 'Gutters', href: '/Gutters', current: false},
    {name: 'Gutter Cleaning', href: '/Gutter-Cleaning', current: false},
]


export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-brand-blue">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
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
                                    <Image
                                        className="h-8 w-auto"
                                        src="/img/HighViewWhiteIconws.png"
                                        alt="High View's Seamless Gutters"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-brand-orange hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">

                                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    <div className="flex-shrink-0 pr-5">
                                        <a className="h-6 w-6" aria-hidden="true">

                                            <button
                                                type="button"
                                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-light-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-brand-dark-orange"
                                            >
                                                <span className="sr-only">sales@coloradogutter.com</span>
                                                sales@coloradogutter.com
                                            </button>
                                        </a>
                                    </div>

                                    <div className="flex-shrink-0">
                                        <a href="https://highviewsseamlessgutters.hbportal.co/app/login">

                                            <button
                                                type="button"
                                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-brand-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-light-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-brand-dark-orange"
                                            >
                                                Customer Log In
                                            </button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}

                            <button
                                type="button"
                                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">Company Phone Number</span>
                                <a className="h-6 w-6" aria-hidden="true">
                                    Call
                                </a>
                            </button>
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">sales@coloradogutter.com</span>
                                <a className="h-6 w-6" aria-hidden="true">
                                    Email
                                </a>
                            </button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

'use client'
import {useState} from 'react'
import Image from "next/image";

export default function Cta1() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div
            className="relative isolate overflow-hidden  ring-brand-orange ring-8 rounded-3xl md:ml-2 md:mr-2 lg:ml-6 lg:mr-6">
            <Image
                src="/img/High-Views-Seamless-Gutters-Denver-CO-Leafs-on-Gutters-1920x1280.png"
                alt="High View Seamless Gutters Denver CO Leafs on Gutters"
                height={3840}
                width={2160}
                className="absolute inset-0 -z-10 h-full w-full object-cover "
            />
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 bg-brand-light-blue/70"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#114467] to-[#F5490D] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
                <div className=" p-8">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-brand-orange/40 hover:ring-brand-blue bg-brand-light-orange/45">
                            Protect Your Home Effortlessly{' '}
                            <a href="#" className="font-semibold text-white">
                                <span className="absolute inset-0" aria-hidden="true"/>
                                Email for free estimate <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center backdrop-blur-sm rounded-3xl pt-6 pb-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Colorado's Leaf-Free Gutter Solution
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white ">
                            Say goodbye to clogged gutters! High View's Seamless Gutters in Denver offers expert gutter
                            guard installations. Enjoy a cleaner home with our free estimate.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="tel:720-325-9473"
                                className="rounded-md bg-brand-dark-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light-orange"
                            >
                                Call for a free estimate
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] bg-brand-light-blue/40 "
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#114467] to-[#F5490D] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}

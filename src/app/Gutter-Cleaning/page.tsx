'use client'

import Image from "next/image";

const features = [
    {name: 'Test', description: 'Lorem Ipsum '},
    {name: 'Test', description: 'Lorem Ipsum '},
    {name: 'Test', description: 'Lorem Ipsum '},
    {name: 'Test', description: 'Lorem Ipsum '},
    {name: 'Test', description: 'Lorem Ipsum '},
    {name: 'Test', description: 'Lorem Ipsum '},

]
export default function GutterCleaningPage() {

    return (
        <div className="bg-white rounded-3xl">
            <div className="bg-white">
                <div aria-hidden="true" className="relative">
                    <Image
                        src="/img/house4k.png"
                        alt=""
                        className="h-96 w-full object-cover object-center"
                        height={384}
                        width={768}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white"/>
                </div>

                <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Test</h2>
                        <p className="mt-4 text-gray-500">
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </p>
                    </div>

                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Test Title</h2>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <Image
                        src="/img/house4k.png"
                        alt=""
                        className="rounded-lg bg-gray-100"
                        height={1920}
                        width={1080}
                    />
                    <Image
                        src="/img/house4k.png"
                        alt=""
                        className="rounded-lg bg-gray-100"
                        height={1920}
                        width={1080}
                    />
                    <Image
                        src="/img/house4k.png"
                        alt=""
                        className="rounded-lg bg-gray-100"
                        height={1920}
                        width={1080}
                    />
                    <Image
                        src="/img/house4k.png"
                        alt=""
                        className="rounded-lg bg-gray-100"
                        height={1920}
                        width={1080}
                    />
                </div>
            </div>
        </div>
    )
}

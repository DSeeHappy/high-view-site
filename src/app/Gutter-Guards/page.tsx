'use client'

import Image from "next/image";

const features = [
    {
        name: 'test',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'test',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'test',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        name: 'test',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]


export default function GutterGuardsPage() {

    return (
        <div className="bg-white rounded-3xl">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="font-semibold text-gray-500">test</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">test title</p>
                        <p className="mt-4 text-gray-500">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        </p>
                    </div>

                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                            >
                                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                </div>
                                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                        {/*<img src={feature.imageSrc} alt={feature.imageAlt}*/}
                                        {/*     className="object-cover object-center"/>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section aria-labelledby="features-heading" className="relative">
                <div
                    className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                    <Image
                        src="/img/house4k.png"
                        alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        height={500}
                        width={500}
                    />
                </div>

                <div
                    className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                    <div className="lg:col-start-2">
                        <h2 id="features-heading" className="font-medium text-gray-500">
                            Test
                        </h2>
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Test Title</p>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies
                        </p>

                        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}

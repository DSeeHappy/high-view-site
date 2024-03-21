'use client'

import Image from "next/image";

const features = [
    {
        name: 'test',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

]
export default function GuttersPage() {

    return (
        <div className="bg-white rounded-3xl">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <div className="border-b border-gray-200 pb-10">
                            <h2 className="font-medium text-gray-500">5&quot; & 6&quot; Seamless Gutter
                                Installation</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Test
                                Title</p>
                        </div>

                        <dl className="mt-10 space-y-10">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div>
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src="/img/house4k.png"
                                alt=""
                                className="h-full w-full object-cover object-center"
                                height={500}
                                width={500}
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                    src="/img/house4k.png"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                                <Image
                                    src="/img/house4k.png"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                    height={500}
                                    width={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

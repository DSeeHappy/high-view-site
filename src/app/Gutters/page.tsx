'use client'

import Image from "next/image";

const features = [
    {
        name: 'test',
        description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

]

const stats = [
    { id: 1, name: 'test', value: '0' },
    { id: 2, name: 'test', value: '0' },
    { id: 3, name: 'teste', value: '0' },
    { id: 4, name: 'tests', value: '0' },
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
            <div className="relative bg-white">
                <Image
                    className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
                    src="/img/house4k.png"
                    alt=""
                    height={500}
                    width={500}
                />
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
                    <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-8 text-indigo-600">Test</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                               Test
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies
                            </p>
                            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                                {stats.map((stat) => (
                                    <div key={stat.id}
                                         className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                                        <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

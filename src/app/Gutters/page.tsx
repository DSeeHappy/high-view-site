'use client'

import Image from "next/image";

const features = [
    {
        name: 'Custom Solutions for Colorado Homes',
        description:
            'Discover the perfect blend of elegance and durability with High View\'s 5 and 6 inch gutter installations, tailored for Colorado\'s landscapes. From mountain retreats to upscale neighborhoods, our gutters provide superior protection and style. Benefit from our precision installation and elevate your home\'s aesthetics and resilience. Choose excellence, choose High View.',
    },

]

const stats = [
    {
        id: 1,
        name: 'Trust in our 5-year warranty covering your gutter system against leaks, ensuring lasting performance and homeowner satisfaction. It\'s not just a promise; it\'s our commitment to you.',
        value: '5-Year Peace of Mind'
    },
    {
        id: 2,
        name: 'Prevent costly foundation damage caused by improper water drainage. Our gutters are designed to steer water away from your home\'s foundation, protecting its structural health.',
        value: 'Rotting Foundation Prevention'
    },
    {
        id: 3,
        name: 'Elevate your property\'s appeal and market value with our premium gutter installations. A well-protected home is a sought-after home, making your investment now, pay off later.',
        value: 'Increased Home Value'
    },
    {
        id: 4,
        name: 'Engineered to withstand Colorado\'s diverse climates, from heavy snowfalls to summer rains. Our gutter systems ensure your home is prepared for every season, year after year.',
        value: 'Ready for All Weather'
    },
]
export default function GuttersPage() {

    return (
        <div className="bg-white rounded-3xl">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <div className="border-b border-gray-200 pb-10">
                            <h2 className="font-medium text-brand-orange">Elevate Your Home&apos;s Protection and
                                Style</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">Premium 5
                                & 6 Inch Gutter Installations</p>
                        </div>

                        <dl className="mt-10 space-y-10">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="text-lg font-medium text-brand-blue">{feature.name}</dt>
                                    <dd className="mt-3 text-lg text-brand-light-blue">{feature.description}</dd>
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
                            <h2 className="text-base font-semibold leading-8 text-brand-orange">Safeguard Your Home,
                                Season After Season</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                                Beyond Gutter Installation: Total Home Protection
                            </p>
                            <p className="mt-6 text-lg leading-8 text-brand-blue">
                                With High View&apos;s Seamless Gutters, you&apos;re not just installing gutters;
                                you&apos;re investing
                                in your home&apos;s future. Our comprehensive 5-year warranty and expertly designed
                                systems
                                ensure your home is protected from the elements, enhancing its value and structural
                                integrity. Experience peace of mind with gutters made to withstand Colorado&apos;s
                                unique
                                weather conditions.
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

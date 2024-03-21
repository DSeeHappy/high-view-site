'use client'
import Image from "next/image";

const services = [
    {
        id: 1,
        title: 'Gutter Guards',
        href: '/Gutter-Guards',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/High-Views-Seamless-Gutters-LeafBlaster-Gutter-Guard-270x304.png',
        date: '',
        datetime: '',
        author: {
            name: "High View's Seamless Gutters",
            imageUrl:
                '/img/HighViewWhiteIconws.png',
        },
    },
    {
        id: 2,
        title: 'Gutter Cleaning',
        href: '/Gutter-Cleaning',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-1920x1080.png',
        date: '',
        datetime: '',
        author: {
            name: "High View's Seamless Gutters",
            imageUrl:
                '/img/HighViewWhiteIconws.png',
        },
    },
    {
        id: 3,
        title: 'Gutter Installation',
        href: '/Gutters',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/house.png',
        date: '',
        datetime: '',
        author: {
            name: "High View's Seamless Gutters",
            imageUrl:
                '/img/HighViewWhiteIconws.png',
        },
    },
]

const timeline = [
    {
        id: 1,
        name: 'Request your free quote',
        description:
            'Kick off your journey to efficient, hassle-free gutters. Reach out for a detailed assessment and personalized advice, ensuring your home\'s protection is in expert hands.',
        date: 'Today',
        dateTime: '2021-08',
    },
    {
        id: 2,
        name: 'Schedule your service',
        description:
            'After receiving your quote, we’ll find a convenient time for your installation. Our flexible scheduling promises a smooth process tailored to your busy life.',
        date: 'Soonest available',
        dateTime: '2021-12',
    },
    {
        id: 3,
        name: 'Installation day',
        description:
            'Our team arrives ready for a quick and clean installation. Experience the High View difference as we upgrade your home with minimal disruption.',
        date: 'Everything is ready for you',
        dateTime: '2022-02',
    },
    {
        id: 4,
        name: 'Enjoy your new gutters',
        description:
            'Your new gutters aren\'t just installed; they\'re guaranteed. Enjoy the peace of mind that comes with our 5-year leak warranty, ensuring your home stays protected, rain or shine',
        date: 'All done!',
        dateTime: '2022-12',
    },
]

const stats = [
    {
        id: 1,
        label: 'High View\'s Seamless Gutters offers unmatched durability and efficiency in keeping leaves and debris out. Our custom-fit design ensures your gutters remain free-flowing, backed by a 5-year leak warranty.',
        subtitle: 'The Pinnacle of Gutter Protection',
        value: 'High View’s Gutter Guards'
    },
    {
        id: 2,
        label: 'While LeafGuard is a well-known brand, customers often report dissatisfaction with the one-size-fits-all approach, leading to suboptimal performance in diverse weather conditions. Additionally, their higher price point does not always guarantee superior quality or service.',
        subtitle: 'Compromises Await',
        value: 'LeafGuard'
    },
    {
        id: 3,
        label: 'GutterHelmet promises much but sometimes falls short, especially in areas with heavy leaf fall and severe weather. Customers have raised concerns about water overshooting and the system\'s ability to handle downpours, questioning the value for their investment.',
        subtitle: 'Expectations vs. Reality',
        value: 'GutterHelmet'
    },
    {
        id: 4,
        label: 'LeafFilter garners attention with aggressive marketing, yet reviews frequently point to issues like clogging, difficult maintenance, and unexpected costs for repairs. The mesh filter, while effective initially, often requires more upkeep than anticipated, diminishing its long-term value.',
        subtitle: 'The Fine Print Matters',
        value: 'LeafFilter'
    },
]

export default function Cta2() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Seamless Gutter Solutions: From Quote to Installation
                    </p>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {timeline.map((item) => (
                                <div key={item.name}>
                                    <time
                                        dateTime={item.dateTime}
                                        className="flex items-center text-sm font-semibold leading-6 text-brand-orange"
                                    >
                                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                            <circle cx={2} cy={2} r={2} fill="currentColor"/>
                                        </svg>
                                        {item.date}
                                        <div
                                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            aria-hidden="true"
                                        />
                                    </time>
                                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.href}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 ring-8 ring-brand-orange"
                        >
                            <Image src={service.imageUrl} alt="" height={1920} width={1080}
                                   className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

                            <div
                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1}/>
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <Image src={service.author.imageUrl} alt="" height={500} width={500}
                                               className="h-6 w-6 flex-none rounded-full bg-brand-light-blue/40 object-cover "/>
                                        {service.author.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={service.href}>
                                    <span className="absolute inset-0"/>
                                    {service.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
            <div className="bg-brand-blue py-24 sm:py-32 mt-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Discover the Best
                                Gutter Guards on the Market</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Why High View&apos;s Seamless Gutters Outperform the Competition
                            </p>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col bg-white/5 pt-12 pb-10 pl-2 pr-2">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300"/>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white px-2 text-sm text-gray-500">
                                                                                    <dd className="order-first text-lg font-semibold tracking-tight text-brand-orange">{stat.subtitle}</dd>

                                            </span>
                                        </div>
                                    </div>
                                    <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.label}</dt>

                                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

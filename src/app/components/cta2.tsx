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
    {
        id: 4,
        title: 'Hot Edge Ice Melt Systems',
        href: '/Hot-Edge-Ice-Melt-Systems',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/HighViewCoHotEdge.jpg',
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
        name: 'Request your free quote',
        description:
            'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
        date: 'Today',
        dateTime: '2021-08',
    },
    {
        name: 'Schedule your service',
        description:
            'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
        date: 'Soonest available',
        dateTime: '2021-12',
    },
    {
        name: 'Installation day',
        description:
            'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
        date: 'Everything is ready for you',
        dateTime: '2022-02',
    },
    {
        name: 'Enjoy your new gutters',
        description:
            'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
        date: 'All done!',
        dateTime: '2022-12',
    },
]

const stats = [
    {id: 1, label: 'subtitle subtitle subtitle', value: 'test'},
    {id: 2, label: 'subtitle subtitle subtitle', value: 'test'},
    {id: 3, label: 'subtitle subtitle subtitle', value: 'test'},
    {id: 4, label: 'subtitle subtitle subtitle', value: 'test'},
]

export default function Cta2() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
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
                    className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.id}
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
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Test Title</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Lorem ipsum dolor sit amet consect adipisicing possimus.
                            </p>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
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

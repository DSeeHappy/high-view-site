'use client'
import Image from "next/image";

const services = [
    {
        id: 1,
        title: 'Gutter Guards',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-1920x1080.png',
        date: '',
        datetime: '',
        author: {
            name: 'High Views Seamless Gutters',
            imageUrl:
                'public/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-1920x1080.png',
        },
    },
    {
        id: 1,
        title: 'Gutter Cleaning',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-1920x1080.png',
        date: '',
        datetime: '',
        author: {
            name: 'High Views Seamless Gutters',
            imageUrl:
                'public/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Cleaning-1920x1080.png',
        },
    },
    // More posts...
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
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <Image src={service.imageUrl} alt="" height={1920} width={1080} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={service.datetime} className="mr-8">
                                    {service.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <img src={service.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                        {service.author.name}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={service.href}>
                                    <span className="absolute inset-0" />
                                    {service.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

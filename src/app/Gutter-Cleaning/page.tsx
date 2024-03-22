'use client'

import Image from "next/image";

const features = [
    {
        id: 1,
        name: 'Comprehensive Cleaning',
        description: 'From leaves and debris to nests and blockages, our comprehensive cleaning service ensures your gutters are free-flowing and efficient. Experience the peace of mind that comes with pristine gutters. '
    },
    {
        id: 2,
        name: 'Weather Readiness',
        description: 'Prepare your home for any season with our gutter cleaning services. We ensure your gutters can handle the rain, snow, and leaves Colorado throws at them, protecting your home from water-related issues.'
    },
    {
        id: 3,
        name: 'Preventative Maintenance',
        description: 'Regular gutter cleaning is key to preventing costly repairs. Our service helps avoid issues like foundation damage, landscaping erosion, and exterior stains, saving you money in the long run.'
    },
    {
        id: 4,
        name: 'Fast & Reliable Service',
        description: 'We value your time. Our team works efficiently to minimize disruption, providing fast yet thorough gutter cleaning that fits into your busy schedule. Expect reliability and professionalism with every visit.'
    },
    {
        id: 5,
        name: 'Decade of Experience',
        description: 'Leverage our decade of expertise in gutter cleaning. Our knowledge of Colorado’s homes and weather conditions ensures we provide the best solutions for your gutter needs.'
    },
    {
        id: 6,
        name: 'Local Dedication',
        description: 'As a local business, we’re committed to the community we serve. Choose High View\'s Seamless Gutters for personalized care and attention that only a local company can offer. We’re not just service providers; we’re your neighbors.'
    },


]
const services = [
    {
        id: 1,
        name: 'Preventing Fascia Rot',
        description: 'Fascia rot occurs when water overflows and consistently dampens the fascia boards. Our cleaning service ensures gutters are clear, preventing water from spilling over and protecting the wooden structures from rot.'
    },
    {
        id: 2,
        name: 'Avoiding Foundation Damage',
        description: 'Improper water flow can lead to foundation issues, as excess water pooling around your home weakens the foundation. Regular gutter cleaning directs water away safely, preserving your home\'s structural integrity.'
    },
    {
        id: 3,
        name: 'Stopping Landscape Erosion',
        description: 'Water spillage from clogged gutters can erode your landscaping, damaging plants and gardens. Our services ensure that water is channeled correctly, safeguarding your outdoor spaces.'
    },
    {
        id: 4,
        name: 'Eliminating Pest Breeding Grounds',
        description: 'Standing water in gutters can become a breeding ground for pests like mosquitoes. By keeping gutters clean, we eliminate these potential habitats, contributing to a healthier home environment.'
    },
    {
        id: 5,
        name: 'Preventing Ice Dams',
        description: 'In winter, clogged gutters can lead to the formation of ice dams that damage roofs and gutters. Our cleaning service helps prevent this, ensuring your gutters perform well in all seasons.'
    },
    {
        id: 6,
        name: 'Reducing Siding Damage',
        description: 'Overflowing gutters can cause water to run down siding, leading to potential water damage and staining. With clean gutters, water is efficiently diverted, keeping your siding pristine.'
    },


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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Expert Gutter
                            Cleaning for Colorado Homes</h2>
                        <p className="mt-4 text-gray-500">
                            Ensure your home’s longevity and appearance with High View&apos;s Seamless Gutters. Our
                            professional team, boasting a decade of local experience, provides fast, thorough, and
                            quality gutter cleaning services tailored for Colorado’s unique climate. Unlike national
                            brands, we care deeply about our community and the homes we service, offering personalized
                            solutions that protect and enhance your property all year round. Trust us to keep your
                            gutters clean and functional, safeguarding your home against water damage and maintaining
                            its curb appeal.
                        </p>
                    </div>

                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="border-t border-gray-200 pt-4">
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protecting Your Home
                        with Precision Gutter Cleaning</h2>
                    <p className="mt-4 text-gray-500">
                        High View’s Seamless Gutters doesn&apos;t just clean your gutters; we safeguard your home against a
                        myriad of potential issues caused by clogged or poorly maintained gutters. From preventing
                        fascia rot to ensuring proper water diversion, our meticulous cleaning services are designed to
                        address and mitigate risks, maintaining your home’s integrity and value. Trust us to protect
                        your most valuable asset against the elements, with expert care and attention to every detail.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {services.map((service) => (
                            <div key={service.id} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{service.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{service.description}</dd>
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

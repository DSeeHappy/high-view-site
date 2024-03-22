'use client'

import Image from "next/image";

const features = [
    {
        name: 'Direct Installation by Experts',
        description: 'Our team comprises seasoned professionals who handle every project with the utmost care and precision, ensuring your gutter guards are installed perfectly the first time.',
    },
    {
        name: 'Local Knowledge and Commitment',
        description: 'Rooted in our community, we understand the specific challenges of Colorado\'s weather. Our local presence means we\'re always here when you need us, providing tailored solutions that national brands can\'t match.',
    },
    {
        name: 'Superior Quality Materials',
        description: 'We use only the highest quality materials for our gutter guards, ensuring long-lasting protection against debris and water damage. Our selection outperforms the competition, offering unparalleled durability.',
    },
    {
        name: 'Satisfaction Guaranteed with 5-Year Warranty',
        description: 'Confidence in our gutter guards is backed by a comprehensive 5-year warranty, covering performance and satisfaction. Your investment is protected with High View\'s promise of quality.',
    },
]

const competition = [
    {
        name: 'Roofing Companies & Subcontracting',
        subtitle: 'Hidden Costs, Questionable Quality"',
        description: 'Many roofing companies don\'t specialize in gutters, opting to subcontract this work. This often leads to increased costs for you and a lack of accountability in the quality of installation. With High View, you’re choosing specialists committed to excellence and transparency, ensuring a higher standard of gutter guard installation without the markup.',
    },
    {
        name: 'LeafGuard',
        subtitle: 'One Size Doesn\'t Fit All',
        description: 'LeafGuard\'s approach can miss the mark in homes requiring custom solutions. Their model, while attractive in simplicity, fails to address the diverse needs of different homes, leading to performance issues such as improper fit and water overflow, especially in heavy Colorado snow and rain.',
    },
    {
        name: 'GutterHelmet',
        subtitle: 'Performance in Question',
        description: 'Customers have voiced concerns about GutterHelmet\'s efficiency, particularly with its design that can lead to water overshooting in heavy rainfalls and debris buildup. Such design flaws question the value of the investment, as they compromise the very protection your home needs.',
    },
    {
        name: 'LeafFilter',
        subtitle: 'Maintenance Headaches',
        description: 'Despite its promises of low maintenance, LeafFilter users report frequent clogging and the need for regular cleaning, essentially negating the purpose of having gutter guards. The mesh design, while fine in theory, struggles with the dense foliage and pine needles common in many Colorado neighborhoods.',
    },
]


export default function GutterGuardsPage() {

    return (
        <div className="bg-white rounded-3xl">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="font-semibold text-gray-500">Superior Gutter Protection Starts Here</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discover the
                            High View Difference in Gutter Guard Excellence</p>
                        <p className="mt-4 text-gray-500">
                            Elevate your home&apos;s protection with High View&apos;s Seamless Gutters, where quality
                            and
                            reliability meet local expertise. Unlike roofing companies that rely on subcontractors,
                            we&apos;re your dedicated specialists in gutter guard solutions. Our direct approach ensures
                            personalized service, precision installation, and a 5-year warranty for peace of mind.
                            Choose the professionals who care about your home as much as you do.
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
                            The Clear Choice for Gutter Protection
                        </h2>
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Why High View&apos;s Gutter
                            Guards Outshine the Competition</p>
                        <p className="mt-4 text-gray-500">
                            In a market flooded with promises, High View’s Seamless Gutters delivers where others fall
                            short. Our dedication to quality installation and superior customer service sets us apart,
                            ensuring your home is protected with gutter guards that truly perform. Backed by a
                            comprehensive 5-year warranty, we not only promise excellence—we guarantee it. Let’s take a
                            closer look at why High View is the preferred choice over well-known brands,
                        </p>
                        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                            {competition.map((item) => (
                                <div key={item.name}>
                                    <dt className="font-medium text-gray-900">{item.name}</dt>
                                    <dt className="font-medium text-brand-orange">{item.subtitle}</dt>
                                    <dd className="mt-2 text-gray-500">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}

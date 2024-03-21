'use client'
import {
    ArrowPathIcon,
    ShieldCheckIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import Image from "next/image";
import {
    CalendarIcon,
    CurrencyDollarIcon,
    HeartIcon,
    PhoneIcon,
    QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Why Choose Our Gutter Guards?',
        description: 'Our gutter guards are engineered for maximum efficiency, preventing leaves and debris from clogging your gutters. This means less cleaning, more protection against water damage, and a healthier home environment. Discover the difference with our custom-fit solutions.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Quick and Efficient Installation Process',
        description: 'Experience seamless service from start to finish. Our team conducts fast, non-intrusive installations at your convenience, ensuring your new gutter guards are up and protecting your home in no time. Schedule your hassle-free installation today.',
        icon: CalendarIcon,
    },
    {
        name: 'Cost-Effective Gutter Solutions',
        description: 'Protect your home without breaking the bank. Our gutter guards offer a cost-effective solution to prevent expensive water damage repairs. With competitive pricing and a 5-year leak warranty, investing in your home’s future has never been smarter',
        icon: HeartIcon,
    },
    {
        name: 'Enhance Your Home’s Value and Appeal',
        description: 'Boost your home\'s curb appeal and value with our aesthetically pleasing gutter guards. Not only do they protect your home, but they also enhance its overall look, contributing to a beautiful and well-maintained appearance that lasts.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Frequently Asked Questions',
        description: 'Have questions about gutter guards? From maintenance to material, find all the answers in our comprehensive FAQ section. We’re here to provide you with the knowledge you need to make an informed decision.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Get Your Free Estimate Today',
        description: 'Ready to take the next step? Contact us now for a free, no-obligation estimate on our gutter guard installations. Our team is on standby to help you begin your journey to a safer, cleaner, and more efficient home. ',
        icon: PhoneIcon,
    },
]

export default function Cta3() {
    return (
        <div className="bg-white py-24 sm:py-32 rounded-b-3xl ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-dark-orange">Enhancing Your Home&apos;s
                        Health with Precision and Care</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark-blue sm:text-4xl">High
                        View&apos;s Seamless Gutters: Expert Solutions for a Healthy, Happy Home
                        Test</p>
                    <p className="mt-6 text-lg leading-8 text-brand-dark-orange">
                        High View’s Seamless Gutters is at the forefront of creating healthier living spaces through
                        expert gutter solutions.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-brand-dark-blue">

                        Improperly installed gutters can lead to significant issues, including rainwater accumulating in
                        undesirable areas around your home. This not only risks water damage but can also cause more
                        severe problems such as mold growth, cracked foundations, and damaged landscaping. At High
                        View’s Seamless Gutters, we're experts at preventing these issues. Our precision in installation
                        ensures that water is directed away from your home, protecting its structural integrity and
                        preventing any health hazards associated with water damage.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-brand-dark-blue">
                        With personalized consultations and a dedicated approach, our
                        team ensures that your home benefits from the best in gutter technology, all while enhancing its
                        aesthetic appeal. Trust in our proven track record, supported by our robust 5-year leak
                        warranty, to maintain your home’s health and your family’s comfort.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-brand-dark-blue">
                        Choose High View’s Seamless
                        Gutters for a partnership that prioritizes your home’s longevity and your peace of mind, with
                        every detail managed with utmost precision and care.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Image
                        src="/img/High-Views-Seamless-Gutters-Denver-CO-Gutter-Guard-Installation.jpg"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"/>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-brand-dark-blue">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-brand-dark-orange"
                                              aria-hidden="true"/>
                                {feature.name}
                            </dt>
                            {' '}
                            <dd className="inline text-brand-light-blue">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

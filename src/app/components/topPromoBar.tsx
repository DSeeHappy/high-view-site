'use client'
import {XMarkIcon} from '@heroicons/react/20/solid'

export default function TopPromoBar() {
    return (
        <div
            className="relative isolate flex items-center gap-x-6 overflow-hidden bg-brand-orange px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                aria-hidden="true"
            >
            </div>
            <div
                className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                aria-hidden="true"
            >
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm leading-6 text-white">
                    <strong className="font-semibold">Call for our gutter guard promotion</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1}/>
                    </svg>
                    Lowest price all season
                </p>
                <a
                    href="tel:720-325-9473"
                    className="flex-none rounded-full bg-brand-blue px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    720-325-9473
                </a>
            </div>
            <div className="flex flex-1 ">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">sales@coloradogutter.com</span>
                    <a href="mailTo:sales@coloradogutter.com" className="h-5 w-5 text-white"
                       aria-hidden="true">sales@coloradogutter.com</a>
                </button>
            </div>
        </div>
    )
}

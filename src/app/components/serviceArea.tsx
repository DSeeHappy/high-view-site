'use client'
import Image from "next/image";

export default function ServiceArea() {
    return (
        <div className="bg-brand-blue py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white">Service Area</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue.
                        </p>
                        <div className="mt-8 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-brand-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Call us
                            </a>
                            <a href="#" className="text-sm font-semibold text-white">
                                Read More <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={105}
                            height={48}
                        />
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={104}
                            height={48}
                        />
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={140}
                            height={48}
                        />
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={136}
                            height={48}
                        />
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={158}
                            height={48}
                        />
                        <Image
                            className="max-h-12 w-full object-contain object-left"
                            src=""
                            alt=""
                            width={147}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
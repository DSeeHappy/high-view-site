'use client'
import Image from "next/image";

export default function ServiceArea() {
    return (
        <div className="bg-brand-blue py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white text-center">Service Area</h2>
                        <p className="mt-6 text-2xl leading-8 text-white text-center">
                            Denver Metro Area,
                            Cherry Hills Village,
                            Greenwood Village,
                            Highlands Ranch,
                            Lone Tree,
                            Castle Pines,
                            Castle Rock,
                            Parker,
                            Centennial,
                            Boulder,
                            Littleton,
                            Evergreen,
                            Morrison,
                            Golden,
                            Louisville,
                            Lafayette, and surrounding areas
                        </p>
                        <div className="mt-8 flex items-center gap-x-6 place-content-center">
                            <a
                                href="tel:720-325-9473"
                                className="rounded-md bg-brand-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-light-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark-orange"
                            >
                                Call us
                            </a>

                        </div>
                    </div>
                    <div
                        className="mx-auto grid w-full max-w-xl grid-cols-1 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <Image
                            className=" object-contain object-left ring-8 ring-brand-orange rounded-3xl"
                            src="/img/Colorado-Map.png"
                            alt=""
                            width={1920}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

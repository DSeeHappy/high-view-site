import Image from "next/image";
import Homepagemaincta from "@/app/components/homepagemaincta";
import Homepagemidcta from "@/app/components/homepagemidcta";
import Homepagegutterguardcta from "@/app/components/homepagegutterguardcta";

export default function Home() {
    return (
        <div className="rounded-3xl bg-white">
            <Homepagemaincta/>
            <Homepagemidcta/>
            <Homepagegutterguardcta/>
        </div>
    );
}

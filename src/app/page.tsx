import Image from "next/image";
import Cta1 from "@/app/components/cta1";
import Cta2 from "@/app/components/cta2";
import Cta3 from "@/app/components/cta3";

export default function Home() {
    return (
        <div className="rounded-3xl bg-white">
            <Cta1/>
            <Cta2/>
            <Cta3/>
        </div>
    );
}

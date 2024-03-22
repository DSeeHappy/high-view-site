import Image from "next/image";
import HomePageMainCTA from "@/app/components/homePageMainCTA";
import HomePageMidCTA from "@/app/components/homePageMidCTA";
import HomePageGutterGuardCTA from "@/app/components/homePageGutterGuardCTA";

export default function Home() {
    return (
        <div className="rounded-3xl bg-white">
            <HomePageMainCTA/>
            <HomePageMidCTA/>
            <HomePageGutterGuardCTA/>
        </div>
    );
}

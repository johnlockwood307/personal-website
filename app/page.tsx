import Header from "./components/Header";
import RecentlyPlayed from "./components/RecentlyPlayed";

export default function Home() {
    return (<div className="flex flex-col gap-y-10">
        <section id="albums">
            <Header text="Albums I've been listening to recently"/>
            <RecentlyPlayed/>
        </section>
    </div>);
}

import { InfoCard } from "../components/InfoCard";

export function LeftSideContainer() {
    let info = {makes: 2, goes_with: ["put the lime in the coconut bread with salty coconut jam (page132)", "Party Chix (Page 185)"]}
    return ( 
        <span>
            <InfoCard info={info} />
        </span>
    )
}
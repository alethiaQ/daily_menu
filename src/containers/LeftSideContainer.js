import { InfoCard } from "../components/InfoCard";
import { IngredientList } from "../components/IngredientsList";

export function LeftSideContainer() {
    const info = { makes: 2, goes_with: ["put the lime in the coconut bread with salty coconut jam (page132)", "Party Chix (Page 185)"] };
    const ingredients = ["2 lemons", "Ice", "2 ounces Aperol or Cappelletti", "4 ounces mezcal", "3/4 ounce agave syrup", "Kosher salt"];
    return ( 
        <span>
            <InfoCard info={info} />
            <IngredientList ingredients={ingredients} />
        </span>
    )
}
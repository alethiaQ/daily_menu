import { Card } from "react-bootstrap"

export const IngredientList = ({ ingredients }) => {
    return (
        <Card>
            <Card.Text>
                {ingredients.map(item => (
                    <li>{item}</li>
                ))}
           </Card.Text>
        </Card>
    )
}
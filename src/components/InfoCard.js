import { Card } from "react-bootstrap"

export const InfoCard = ({info}) => {
    return (
        <Card>
            Makes: {info.makes} <br />
            Goes With: {info.goes_with}
        </Card>
    );
}
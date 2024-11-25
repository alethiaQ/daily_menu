import { DescriptionCard } from "../components/DescriptionCard";
import { StepsList } from "../components/StepsList";

export function RightSideContainer() {
  const description = "";
  const steps = "";
  return (
    <span>
      <DescriptionCard description={description} />
      <StepsList steps={steps} />
    </span>
  )
}
import SpecimenFile from "@/components/specimen/SpecimenFile";
import { getSpecimen } from "@/lib/specimens/registry";

export default function Inc_GroceryMaster() {
  const specimen = getSpecimen("grocerymaster");
  if (!specimen) throw new Error("GroceryMaster specimen record is missing");
  return <SpecimenFile specimen={specimen} />;
}

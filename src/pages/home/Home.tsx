import { Stack } from "@mui/material";
import { MealDashboard } from "../../components/MealDashboard"

export default function Home() {
  return (
    <>
    <Stack direction="row">
      <MealDashboard title = "朝食"/>
      <MealDashboard title = "昼食"/>
      <MealDashboard title = "夕食"/> 
    </Stack>
    </>
  );
}

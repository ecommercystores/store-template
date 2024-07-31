import { Hero, Products } from "./components";
import { Categories } from "./components/Categories";

export const revalidate = 30;

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Categories slug="" />
      <Products />
    </>
  );
}

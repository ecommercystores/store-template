import { Hero, Navbar, Products } from "./components";
import { Categories } from "./components/Categories";

export const revalidate = 0;

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Categories slug="" />
      <Products />
    </>
  );
}

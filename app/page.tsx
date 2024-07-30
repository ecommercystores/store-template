import { Hero, Navbar, Products } from "./components";
import Providers from "./components/Provider";

export default function Home() {
  return (
    <Providers>
      <Navbar />
      {/* <Hero /> */}
      <Products />
    </Providers>
  );
}

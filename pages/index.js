import { Signin } from "./Auth/Signin";
import { Signup } from "./Auth/Signup";
import Header from "../components/layout/Header";
import { Slider } from "../components/layout/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}

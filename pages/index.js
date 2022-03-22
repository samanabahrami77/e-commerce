import { Signin } from "../components/Auth/Signin";
import { Signup } from "../components/Auth/Signup";
import { Navbar } from "../components/layout/Navbar";
import { TopNavbar } from "../components/layout/TopNavbar";

export default function Home() {
  return (
    <div style={{ height: 1000 }} dir="rtl">
      <TopNavbar />
      <Navbar />
    </div>
  );
}

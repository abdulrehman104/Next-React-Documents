import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

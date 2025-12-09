import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewsSection from "./components/news-section";
import Container from "./components/container";
import Platform from "./components/platform";
import Values from "./components/values";

export default function Home() {
  return (
    <>
      <Navbar />
      <NewsSection />
      <Platform />
      <Values />
      <Footer />
    </>
  );
}

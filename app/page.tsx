import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewsSection from "./components/news-section";
import Container from "./components/container";

export default function Home() {
  return (
    <>
      <Navbar />
      <NewsSection />
      <Footer />
    </>
  );
}

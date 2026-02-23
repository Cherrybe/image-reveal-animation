import ImageStackReveal from "@/components/ImageStackReveal";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <h1>Scroll Down</h1>
      </div>

      <ImageStackReveal />

      <div className="h-screen flex items-center justify-center">
        <h2>End Section</h2>
        <p>Scroll back up to see the animation again.</p>
      </div>
    </main>
  );
}

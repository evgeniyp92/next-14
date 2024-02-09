import Hero from "@/components/Hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt='a person welding'
        title='We serve high performance applications'
      />
    </div>
  );
}

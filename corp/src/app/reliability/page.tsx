import Hero from "@/components/Hero";
import reliabilityImg from "/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt='a person welding'
      title='Rock-solid reliability'
    />
  );
}

import Hero from "@/components/Hero";
import scaleImg from "/public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt='A manufacturing plant'
      title='Scale to Infinity'
    />
  );
}

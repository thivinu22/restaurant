import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider/> 
      <Featured />
      <Offer />
    </div>
  );
}

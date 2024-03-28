import { CardsAutos } from "@/components/component/cards-autos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardsAutos></CardsAutos>
    </main>
  );
}

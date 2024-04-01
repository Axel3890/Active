import { CardsAutos } from "@/components/component/cards-autos";
import { getAutos } from "./utils/funciones";


export default async function Home() {
  const data = await getAutos();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardsAutos data={data} />
    </main>
  );
}

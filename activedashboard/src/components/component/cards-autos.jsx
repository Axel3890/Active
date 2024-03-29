
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Eliminar from "../botones/Eliminar";
import Añadir from "../botones/Añadir";

export function CardsAutos() {
  return (
    (<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl">DEF-5678</CardTitle>
          <CardDescription>Patente</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-sm font-semibold">Modelo: Hatchback</p>
          <p className="text-sm font-semibold">Marca: Hatchback</p>
          <p className="text-sm font-semibold">Modelo(Año): Hatchback</p>
          <p className="text-sm font-semibold">Chasis: 123F23Y</p>
          <p className="text-sm font-semibold">Problema: Brake Service</p>
          <p className="text-sm font-semibold">Cliente: Alice Smith</p>
          <Eliminar></Eliminar>
        </CardContent>
        
      </Card>
      <Añadir></Añadir>
    </div>)
  );
}

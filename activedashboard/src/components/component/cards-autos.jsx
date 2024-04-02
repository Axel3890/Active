import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Eliminar from "../botones/Eliminar";
import Añadir from "../botones/Añadir";
import { deleteElement } from "@/app/utils/funciones";

export function CardsAutos({ data }) {

  const handleDelete = async (id) => {
    try {
      await deleteElement('autos', id);
      console.log('Elemento eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    } 
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {data.map((auto) => (
        <Card key={auto.id}>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">{auto.identificacion}</CardTitle>
            <CardDescription>Identificación</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-sm font-semibold">Modelo: {auto.modelo}</p>
            <p className="text-sm font-semibold">Marca: {auto.marca}</p>
            <p className="text-sm font-semibold">Modelo(Año): {auto.modeloaño}</p>
            <p className="text-sm font-semibold">Chasis: {auto.chasis}</p>
            <p className="text-sm font-semibold">Problema: {auto.problema}</p>
            <p className="text-sm font-semibold">Cliente: {auto.cliente}</p>
            <Eliminar onClick={() =>  handleDelete(auto.id)}></Eliminar>
          </CardContent>
        </Card>
      ))}
      <Añadir></Añadir>
    </div>
  );
}

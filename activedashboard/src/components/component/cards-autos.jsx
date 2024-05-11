import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Eliminar from "../botones/Eliminar";
import { deleteElement } from "@/app/utils/funciones";
import Finalizado from "../botones/Finalizado";
import Swal from 'sweetalert2';

export function CardsAutos({ data, onDeleteAuto }) {

  const handleDelete = async (id) => {
    const confirmationAlert = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este auto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (confirmationAlert.isConfirmed) {
      try {
        await deleteElement('autos', id);
        const updatedData = data.filter((auto) => auto.id !== id);
        onDeleteAuto(updatedData);
  
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El auto se ha eliminado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        console.error('Error al eliminar el auto:', error);
  
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al eliminar el auto. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
            <p className="text-sm font-bold text-green-500">Total: {auto.total}</p>
            <Eliminar onClick={() =>  handleDelete(auto.id)}></Eliminar>
          </CardContent>
        </Card>
      ))}

    </div>
  );
}

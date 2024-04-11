
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Eliminar from "../botones/Eliminar";
import { deleteElement } from "@/app/utils/funciones";
import Swal from 'sweetalert2';

export function Garantias({ data, onDeleteGarantia }) {

  const handleDelete = async (id) => {
    const confirmationAlert = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar esta garantía?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (confirmationAlert.isConfirmed) {
      try {
        await deleteElement('garantias', id);
        const updatedData = data.filter((garantia) => garantia.id !== id);
        onDeleteGarantia(updatedData);
  
        Swal.fire({
          title: '¡Eliminado!',
          text: 'La garantía se ha eliminado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        console.error('Error al eliminar la garantía:', error);
  
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al eliminar la garantía. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map(garantia => (
        <Card key={garantia.id}>
          <CardHeader className="pb-0">
            <CardTitle className="text-2xl">{garantia.identificacion}</CardTitle>
            <CardDescription>Identificacion</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2 text-sm">
                <div>Cliente:</div>
                <div className="font-medium">{garantia.cliente}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div>Garantia desde:</div>
                <div className="font-medium">{new Date(garantia.inicio).toISOString().slice(0, 10)}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div>Hasta:</div>
                <div className="font-medium">{new Date(garantia.fin).toISOString().slice(0, 10)}</div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div>Cubre:</div>
                <div className="font-medium">{garantia.cubre}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {new Date(garantia.fin) < Date.now() ? (
              <div className="flex items-center space-x-2">
                <XCircleIcon className="w-4 h-4 fill-red-500" />
                <CardDescription>Expirada</CardDescription>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 fill-green-500" />
                <CardDescription>Vigente</CardDescription>
              </div>
            )}
            <Eliminar onClick={() =>  handleDelete(garantia.id)}/>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function CheckCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>)
  );
}


function XCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>)
  );
}

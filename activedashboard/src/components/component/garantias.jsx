
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Eliminar from "../botones/Eliminar";
import Añadir from "../botones/Añadir";
import Añadirgarantia from "../botones/AñadirGarantia";

export function Garantias() {
  return (
    (<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">ABC123</CardTitle>
          <CardDescription>Patente</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2 text-sm">
              <div>Cliente:</div>
              <div className="font-medium">John Doe</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div>Garantia desde:</div>
              <div className="font-medium">2023-08-12</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div>Hasta:</div>
              <div className="font-medium">2028-08-12</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div>Cubre:</div>
              <div className="font-medium">Cambio de aceite</div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-4 h-4 fill-green-500" />
            <CardDescription>Vigente</CardDescription>
          </div>
          <Eliminar></Eliminar>
        </CardFooter>
      </Card>
     
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">GHI789</CardTitle>
          <CardDescription>License Plate</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2 text-sm">
              <div>Customer:</div>
              <div className="font-medium">Bob Smith</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div>Valid from:</div>
              <div className="font-medium">2022-11-15</div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div>Valid to:</div>
              <div className="font-medium">2027-11-15</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center space-x-2">
            <XCircleIcon className="w-4 h-4 fill-red-500" />
            <CardDescription>Expirada</CardDescription>
          </div>
          <Button size="sm">View</Button>
        </CardFooter>
      </Card>
      <Añadirgarantia></Añadirgarantia>
    </div>)
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

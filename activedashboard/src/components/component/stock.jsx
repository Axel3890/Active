
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Añadir from "../botones/Añadir";

export function Stock() {
  return (
    (<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-bold">Spark Plugs</CardTitle>
            <CardDescription className="text-sm">Replacement spark plugs for your engine.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="text-2xl font-semibold">23</div>
            <div className="grid grid-cols-2 gap-2 text-sm w-1/2">
              <div>Disponible</div>
              <div>Sin Stock</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">-</Button>
            <Button variant="outline">+</Button>
          </CardFooter>
        </Card>
      </div>
      <Añadir></Añadir>
    </div>)
  );
}

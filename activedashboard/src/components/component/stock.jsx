"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";


export function Stock({data}) {
  console.log(data)
  const [stock, setStock] = useState({
    stock: ""
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({
      ...stock,
      [name]: value
    });
  };


  return (
    <div>
      <Card className="w-full border rounded-lg shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold">{data.nombre}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <div className="text-2xl font-semibold">Cantidad: {data.cantidad}</div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <input type="number" id="stock" name="stock" value={stock.stock} placeholder="Cantidad" onChange={handleChange} className="w-16 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border text-black" />
          <Button variant="outline">Modificar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0ZoakuXe7FV
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function nuevostock() {
  return (
    (<Card>
      <CardHeader>
        <CardTitle>Acme Roller Skates</CardTitle>
        <CardDescription>Current stock: 500 units</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter new stock" type="number" />
      </CardContent>
    </Card>)
  );
}
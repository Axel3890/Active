import React from "react";
import { Garantias } from "@/components/component/garantias";
import { getGarantias } from "../utils/funciones";

const Garantiasview = async () => {
  const data = await getGarantias();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Garantias data={data}></Garantias>
    </div>
  );
};

export default Garantiasview;

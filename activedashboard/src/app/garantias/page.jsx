"use client"
import React, { useState, useEffect } from "react";
import { Garantias } from "@/components/component/garantias";
import { getGarantias } from "../utils/funciones";

const Garantiasview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const garantiasData = await getGarantias();
        setData(garantiasData);
      } catch (error) {
        console.error("Error al cargar los datos de garantías:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Garantias data={data}></Garantias>
    </div>
  );
};

export default Garantiasview;


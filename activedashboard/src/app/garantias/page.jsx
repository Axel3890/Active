"use client"
import React, { useState, useEffect } from "react";
import { Garantias } from "@/components/component/garantias";
import { getGarantias } from "../utils/funciones";
import Añadirgarantia from "@/components/botones/AñadirGarantia";

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

  const handleAddGarantia = async (newGarantia) => {
    try {
      setData(prevData => [...prevData, newGarantia]);
    } catch (error) {
      console.error('Error al agregar el Garantia:', error);
    }
  };

  const handleDelete = async (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Garantias data={data} onDeleteGarantia={handleDelete}></Garantias>
      <Añadirgarantia onAddGarantia={handleAddGarantia}></Añadirgarantia>
    </div>
  );
};

export default Garantiasview;


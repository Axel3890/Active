"use client"
import React, { useState, useEffect } from 'react';
import { CardsAutos } from "@/components/component/cards-autos";
import { getAutos } from "./utils/funciones";
import Añadir from '@/components/botones/Añadir';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const autosData = await getAutos();
        setData(autosData);
      } catch (error) {
        console.error("Error al cargar los datos de autos:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddAuto = async (newAuto) => {
    try {
      setData(prevData => [...prevData, newAuto]);
    } catch (error) {
      console.error('Error al agregar el Auto:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardsAutos data={data} />
      <Añadir onAddAuto={handleAddAuto}></Añadir>
    </main>
  );
}

export default Home;


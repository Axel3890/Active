"use client"
import React, { useState, useEffect } from 'react';
import { CardsAutos } from "@/components/component/cards-autos";
import { getAutos } from '../utils/funciones';
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

  const handleDelete = async (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="flex-grow p-8 ml-8 md:ml-64">
      <CardsAutos data={data} onDeleteAuto={handleDelete}/>
      <Añadir onAddAuto={handleAddAuto}></Añadir>
    </div>
  );
}

export default Home;


"use client"
import { Stock } from '@/components/component/stock'
import React from 'react'
import { getStock } from '../utils/funciones'
import { useState, useEffect } from 'react'
import AñadirStock from '@/components/botones/AñadirStock'

const Stockview = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stocksData = await getStock();
        setStocks(stocksData);
      } catch (error) {
        console.error("Error al cargar los datos de stock:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddStock = async (newStock) => {
    try {
      setStocks(prevStocks => [...prevStocks, newStock]);
    } catch (error) {
      console.error('Error al agregar el stock:', error);
    }
  };


  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {stocks.map(item => (
          <div key={item.id}>
            <Stock data={item}/>
          </div>
        ))}
      </div>
      <AñadirStock onAddStock={handleAddStock} />
    </div>
  );
}

export default Stockview
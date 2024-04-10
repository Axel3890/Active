"use client"
import { useState } from "react";
import Swal from 'sweetalert2';

export function Stock({data, onDeleteStock}) {

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

  
  const handleDelete = async (id) => {
    const confirmationAlert = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este elemento del stock?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', // Color personalizado para el botón de confirmación
      cancelButtonColor: '#d33', // Color personalizado para el botón de cancelar
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (confirmationAlert.isConfirmed) {
      try {
        await deleteElement('stock', id);
        const updatedData = data.filter((stock) => stock.id !== id);
        onDeleteStock(updatedData);
  
        Swal.fire({
          title: '¡Eliminado!',
          text: 'El elemento se ha eliminado correctamente del stock.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        console.error('Error al eliminar el elemento:', error);
  
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al eliminar el elemento del stock. Por favor, inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  };


  return (

<div class="flex flex-col bg-white w-72 h-48 rounded-md py-4 px-6 border">
<h3 class="text-center font-bold text-xl text-gray-800 pb-2">{data.nombre}</h3>
<p class="text-xl text-black pb-3">Cantidad: {data.cantidad}</p>
<div class="flex justify-around items-center py-3">
    <div class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
        <svg class="w-6 stroke-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
        <button class="font-semibold text-sm text-green-700">Editar</button>
    </div>
    <div class="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
      <svg class="w-6 stroke-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      <button class="font-semibold text-sm text-red-700" onClick={() =>  handleDelete(data.id)}>Elminar</button>
    </div>
</div>
</div>
  );
}
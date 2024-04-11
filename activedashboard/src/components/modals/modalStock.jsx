
import React, { useState } from 'react';
import { postStock } from '@/app/utils/funciones';
import Swal from 'sweetalert2';

const ModalStock = ({ setShowModal, onAddStock }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await postStock(formData);
  
      const successAlert = await Swal.fire({
        title: '¡Stock agregado!',
        text: 'El repuesto se ha agregado correctamente al stock.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
  
      if (successAlert.isConfirmed) {
        onAddStock(formData);
        setShowModal(false);
        setFormData({
          nombre: '',
          cantidad: '',
        });
      }
    } catch (error) {
      console.error('Error al agregar el stock:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al agregar el repuesto al stock. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg px-8 py-6 mx-auto max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Agregar nuevo Respuesto</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="identificacion" className="block text-sm font-medium text-gray-700">Nombre del respuesto</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" required />
              </div>
              <div>
                <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Cantidad</label>
                <input type="number" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" required/>
              </div>
             </div>
             <div className="mt-6">
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Guardar</button>
              <button type="button" onClick={() => setShowModal(false)} className="ml-4 text-gray-600 hover:text-gray-800">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalStock;


import React, { useState } from 'react';
import { postGarantia } from '@/app/utils/funciones';

const ModalGarantias = ({ setShowModal, onAddGarantia }) => {
  const [formData, setFormData] = useState({
    identificacion: '',
    cliente: '',
    inicio: '',
    garantia_hasta: '',
    cubre: ''
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
      await postGarantia(formData);
      alert('La garantia se agregó correctamente');
      onAddGarantia(formData)
      setShowModal(false);
    } catch (error) {
      console.error('Error al agregar el auto:', error);
      alert('Hubo un error al agregar el auto. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg px-8 py-6 mx-auto max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Agregar nuevo auto</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="identificacion" className="block text-sm font-medium text-gray-700">Identificación</label>
                <input type="text" id="identificacion" name="identificacion" value={formData.identificacion} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" />
              </div>
              <div>
                <label htmlFor="cliente" className="block text-sm font-medium text-gray-700">Cliente</label>
                <input type="text" id="cliente" name="cliente" value={formData.cliente} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" />
              </div>
              <div>
                <label htmlFor="garantia_desde" className="block text-sm font-medium text-gray-700">Garantía desde</label>
                <input type="date" id="inicio" name="inicio" value={formData.inicio} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" />
              </div>
              <div>
                <label htmlFor="garantia_hasta" className="block text-sm font-medium text-gray-700">Garantía hasta</label>
                <input type="date" id="fin" name="fin" value={formData.fin} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" />
              </div>
              <div>
                <label htmlFor="cubre" className="block text-sm font-medium text-gray-700">Cubre</label>
                <input type="text" id="cubre" name="cubre" value={formData.cubre} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border" />
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

export default ModalGarantias;

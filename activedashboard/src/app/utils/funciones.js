export async function getAutos() {
    try {
        const response = await fetch('http://localhost:3001/autos');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de autos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al obtener los datos de autos:', error);
        throw error;
    }
}

export async function getGarantias() {
    try {
        const response = await fetch('http://localhost:3001/garantias');
        if (!response.ok) {
            throw new Error('Error al obtener las garantias');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al las garantias:', error);
        throw error;
    }
}

export async function getStock() {
    try {
        const response = await fetch('http://localhost:3001/stock');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de stock');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al obtener los datos de stock:', error);
        throw error;
    }
}



export async function postStock(stock) {
    try {
        const response = await fetch('http://localhost:3001/stock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stock)
        });
        if (!response.ok) {
            throw new Error('Error al agregar el stock');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al agregar el stock:', error);
        throw error;
    }
}

export async function postAutos(autoData) {
    try {
        const response = await fetch('http://localhost:3001/autos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(autoData)
        });
        if (!response.ok) {
            throw new Error('Error al agregar el auto');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al agregar el auto:', error);
        throw error;
    }
}

export async function postGarantia(garantiaData) {
    try {
        const response = await fetch('http://localhost:3001/garantias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(garantiaData)
        });
        if (!response.ok) {
            throw new Error('Error al agregar la garantia');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al agregar la garantia:', error);
        throw error;
    }
}

export async function deleteElement(tipo, id) {
    try {
      const response = await fetch(`http://localhost:3001/${tipo}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'

        },
      });
  
      if (!response.ok) {

        throw new Error('Error al eliminar el elemento');
      }
  

      return response;
    } catch (error) {

      console.error('Error al eliminar el elemento:', error);
      throw error; 
    }
  }
  
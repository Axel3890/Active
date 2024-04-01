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
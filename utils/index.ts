export async function fetchCars(){
    const headers = {
		'x-rapidapi-key': '1da3117bd7msh3ec093d6a5d798ap1fa3bbjsn17d71413c8f5',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers
    });

    const result = await response.json();

    return result;

}
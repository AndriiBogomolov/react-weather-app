export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7d03013027msh9ec78a898069c8ap17f8e6jsnb90e781c9ff8',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const fetchCities = async (inputValue) => {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&limit=10`,
      geoApiOptions
    );
    const result = await response.json();
    const options = result.data.map((city) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    }));

    return { options };
  } catch (error) {
    console.error(error);
    return { options: [] };
  }
};

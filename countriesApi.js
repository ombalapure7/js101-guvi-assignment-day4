const getAllCountries = () => {
  const xhr = new XMLHttpRequest();
  // opening a request
  xhr.open("GET", "https://restcountries.com/v2/all");
  xhr.responseType = "json";

  // send request to the server
  // send is by default an asynchronous method
  xhr.send();

  // process the data
  xhr.onload = () => {
    // converting JSON response to string
    // const countries = xhr.response;
    // console.log(JSON.stringify(countries));

    // converting JSON resposne to JS objects
    const countryObjs = xhr.response;

    const flags = countryObjs.map((country) => country["flags"].svg);

    /**
     * Displaying flags of all countries
     */
    for (let i=0; i<flags.length; i++) {
      console.log(`${i}: ${flags[i]}`);
    }

    console.log("#########################################################################");

    /**
     * Displaying country name, population, region and subregion
     */
    const countries = countryObjs.map((country) => ({
      name: country.name,
      region: country.region,
      population: country.population,
      subregion: country.subregion,
      population: country.population
    }));

    for (const country of countries) {
      console.log(country);
    }
  };
};

getAllCountries();

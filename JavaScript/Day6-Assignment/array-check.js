let countries = ['Finland','Ireland','Iceland'];
let countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
if(countriesWithLand.length > 0){
    console.log(countriesWithLand);
} else{
    console.log('All these countries are without "land"');
}
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

 //print the all the countries from Asia continent/region using the filter function

  
 var res=result.filter((ele)=>ele.region==="Asia");
 console.log(res);


//print all the countries with a populatio of less than 2LAKHs using filter function
  
  var res=result.filter((ele)=>ele.population<200000);
  console.log(res);

//print the total population of countries using reduce function

var res=result.reduce((acc,ele)=>acc+ele.population,0);
console.log(res);

//print the country which uses US Dollers as currency
var res  =  result.filter(country=>{
  
      for(let key in country.currencies){
          
          if(country.currencies[key].code=="USD"){
            console.log(country.name)
          }
      }
  })
 


}

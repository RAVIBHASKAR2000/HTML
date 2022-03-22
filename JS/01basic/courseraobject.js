var company = new Object();

company.name ="don";

//console.log(company.name)
company.ceo=new Object();

company.ceo.firstname="mark";
company.ceo.favcolor="blue";
console.log(company)
console.log("company ceo first name is "+company.ceo.firstname);
//also

console.log(company["name"]);

company["stock of company"]=100;
console.log("The stock of the company is :" + company["stock of company"]);
console.log(company);

//bbetter way object litral

var facebook = {
    name:"facebook",
    ceo: {
        firstname:"mark",
        favcolor: "blue"
    },
    stock: 110
    //alter
    // "stock of company":110


};


console.log(facebook);
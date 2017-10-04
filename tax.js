var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
var result = {};

  for (company in salesData) {
  	var salesResult = {};
  	var companyName = salesData[company].name;
  	var companyProvince = salesData[company].province;
  	var companySales = salesData[company].sales;
  	var companyTaxes = calculateTax(companySales, companyProv);

  }
  if(companyName in result){
  	result[companyName]["totalSales"] += companySales;
  	result[companyName]["totalTaxes"] += companyTaxes;
  }
  else {
  	salesResult["totalSales"] = companySales;
  	salesResult["totalTaxes"] = companyTaxes;
  	objResult[companyName] = salesResult;
  }
}

console.log(result);
function calculateTax(totalSales, companyProv){
  // Multiple totalSales by province tax rate.
  return totalSales * salesTaxRates[companyProv];
}
//This functions calculates the sales for a company + province.
function calculateSales(salesData){
  var totalSales = 0;
  for (var sale in salesData){
    totalSales = totalSales + salesData[sale];
  }
  return totalSales;
}
var results = calculateSalesTax(companySalesData, salesTaxRates);


var results = calculateSalesTax(companySalesData, salesTaxRates);

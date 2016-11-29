var companyDinner = [ { name: 'john', 
						dishes: { dish1: 5, dish2: 25 } },
                     
                     { name: 'beth',
						dishes: { dish1: 5, dish2: 15 } },
                     
                    { name: 'steve',
						dishes: { dish1: 5, dish2: 20 } } ]


companyDinner.forEach(function(person) {
    person.subTotal = runSubTotal(person.dishes.dish1, person.dishes.dish2)
    person.tax = runTax(person.subTotal)
    person.tip = runTip(person.subTotal, person.tax)
    person.total = runTotal(person.subTotal, person.tax, person.tip)
})


var bill = {
    dinersList: dinersList(),
	dinersTotalPlusTax: dinersTotalPlusTax(),
    dinersTotalTips: dinersTotalTips(),
    dinersBreakdown: dinersBreakdown(),
    billTotal: billTotal()
}


function runSubTotal(dish1, dish2) {
    var subTotal = dish1 + dish2
    return subTotal
}

function runTax(subTotal) {
    var tax = subTotal * 0.08
    return tax
}

function runTip(subTotal, tax) {
    var combined = subTotal + tax
    var tip = combined * 0.20
    return tip
}

function runTotal(subTotal, tax, tip) {
    var combined = subTotal + tax + tip
    return combined
}


function dinersList() {
	var list = []
	companyDinner.forEach(function(person) {
		list.push(person.name)
	})
	return list
}

function dinersTotalPlusTax() {
	var total = 0
	companyDinner.forEach(function(person) {			
		total = total + person.subTotal + person.tax
	})
	return total
}

function dinersTotalTips() {
	var total = 0
	companyDinner.forEach(function(person) {			
		total = total + person.tip
	})
	return total
}

function dinersBreakdown() {
	var dinersBreakdownObj = []
	companyDinner.forEach(function(person) {	
		var personInfo = { name: person.name, subTotal: person.subTotal, tax: person.tax, tip: person.tip, total: person.total }
		dinersBreakdownObj.push(personInfo)
	})
	return dinersBreakdownObj
}

function billTotal() {
	var billTotal = 0
	companyDinner.forEach(function(person) {			
		billTotal = billTotal + person.total
	})
	return billTotal
}

console.log(companyDinner)
console.log(bill)
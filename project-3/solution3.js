function calculateNetSalary() {
    let salary
    salary = prompt("please input your salary");

    // Get input values
    var basicSalary = parseFloat(document.getElementById('basicSalary').value);
    var benefits = parseFloat(document.getElementById('benefits').value);
    var taxBrackets = [24000, 130000, 285000, 485000, 600000, 750000];
    var taxRates = [10, 15, 20, 25, 30, 35];
    
    // Calculate gross salary
    var grossSalary = basicSalary + benefits;
    
    // Calculate taxable income
    var taxableIncome = grossSalary - 24000; // First 24,000 KES are tax-exempt
    
    // Calculate PAYE (Tax)
    var tax = 0;
    var remainingIncome = taxableIncome;
    for (var i = 0; i < taxBrackets.length; i++) {
        if (remainingIncome <= 0) {
            break;
        }
        var currentBracket = taxBrackets[i];
        var rate = taxRates[i] / 100;
        if (remainingIncome <= currentBracket) {
            tax += remainingIncome * rate;
            break;
        } else {
            tax += currentBracket * rate;
            remainingIncome -= currentBracket;
        }
    }
    
    // NHIF deductions
    var nhifDeductions = calculateNHIF(grossSalary);
    
    // NSSF deductions
    var nssfDeductions = calculateNSSF(basicSalary);
    
    // Calculate net salary
    var netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
    
    // Display results
    document.getElementById('grossSalary').innerHTML = grossSalary.toFixed(2);
    document.getElementById('tax').innerHTML = tax.toFixed(2);
    document.getElementById('nhifDeductions').innerHTML = nhifDeductions.toFixed(2);
    document.getElementById('nssfDeductions').innerHTML = nssfDeductions.toFixed(2);
    document.getElementById('netSalary').innerHTML = netSalary.toFixed(2);
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    var nhifRates = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000];
    var nhifThreshold = 6000;
    var nhifDeduction = 0;

    if (grossSalary <= nhifThreshold) {
        nhifDeduction = nhifRates[0];
    } else {
        for (var i = 0; i < nhifRates.length; i++) {
            if (grossSalary <= (nhifThreshold + (i * 5000))) {
                nhifDeduction = nhifRates[i];
                break;
            }
        }
    }
    return nhifDeduction;
}

// Function to calculate NSSF deductions
function calculateNSSF(basicSalary) {
    var nssfRate = 0.06; // 6% ofbasic salary
    var nssfDeduction = basicSalary * nssfRate;
    return nssfDeduction;
}

calculateNSSF();
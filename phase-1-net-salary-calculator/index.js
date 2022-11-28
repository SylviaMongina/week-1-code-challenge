const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,//listens for the user input.
        output: process.stdout //this is used to send data out of our program.
    }
);

input.question("How much is your Gross Salary?\n Note: The gross salary is a total of your basic pay and all benefits\n", function (gross_pay){
    // console.log(`your gross salry is: ${gross_pay}`);
    let paye;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let total_deductions;
    let net_salary;
    if (gross_pay < 24001){
        paye = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        paye = 2400;
        extra_taxable_pay = gross_pay - 24000
        paye = (extra_taxable_pay * 0.25) + paye;
    }else {
        paye = 4483;
        extra_taxable_pay = gross_pay - 32333;
        paye = (extra_taxable_pay * 0.30) + paye;       
    }
    if (gross_pay < 6000){
        nhif = 150;
    }else if(gross_pay < 8000){
        nhif = 300;
    }else if(gross_pay < 12000){
        nhif = 400;
    }else if(gross_pay < 15000){
        nhif = 500;
    }else if(gross_pay < 20000){
        nhif = 600;
    }else if(gross_pay < 2500){
        nhif = 700;
    }else if(gross_pay < 30000){
        nhif = 850;
    }
    else if(gross_pay > 35000){
        nhif = 900;
    } else {
        nhif = 950
    }

    total_deductions = nhif + paye + nssf;
    net_salary = gross_pay - total_deductions;
    process.stdout.write(`Your gross pay is Ksh: ${gross_pay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);    
    process.stdout.write(`Your Total deduction amount to Ksh: ${total_deductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);    
    input.close();
});
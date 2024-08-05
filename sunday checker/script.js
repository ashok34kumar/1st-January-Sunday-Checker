document.getElementById('checkButton').addEventListener('click',function () {
    const startYear = parseInt(document.getElementById('startYear').value);
    const endYear = parseInt(document.getElementById('endYear').value);
    const resultDiv = document.getElementById('result');

if (isNaN(startYear) || isNaN(endYear) || startYear > endYear){
    resultDiv.innerHTML = `Please Enter valid start and end year, with start year less than or equal to the end year.`;
    return;
}
const sunday = checkFirstJanuarySunday(startYear,endYear);

if (sunday.length > 0) {
    resultDiv.innerHTML = `1st January is a Sunday in the following years between ${startYear} and ${endYear}: `+sunday.join(",")

}else{
    resultDiv.innerHTML =`There are no year between ${startYear} and ${endYear} where 1st January is a Sunday.`
}

})
function checkFirstJanuarySunday(startYear,endYear) {
    let result = []
    for (let year = startYear; year <= endYear ;year++) {
       let date = new Date(year,0,1);
       if (date.getDay() === 0) {
        result.push(year);
       }
        
    }
    return result;
}









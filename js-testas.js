/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function generateRandomNumbers() {
    return Math.floor(Math.random() * 1000) + 1;
}

function eurToUsd(euros) {
    const exchangeRate = 1.18;
    return euros * exchangeRate;
}

const randomEuros = generateRandomNumbers();
const dollars     = eurToUsd(randomEuros);

document.getElementById('result1').innerText = `€${randomEuros} konvertuojami į $${dollars.toFixed(2)}`;

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function usdToEur(dollars) {
    const exchangeRate = 0.85;
    return dollars / exchangeRate;
}

const randomDollars = generateRandomNumbers();
const euros         = usdToEur(randomDollars);

document.getElementById('result2').innerText = `$${randomDollars} konvertuojami į €${euros.toFixed(2)}`;

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

const weight = 80;
const height = 1.8;

function calculateBMI(weight, height) {
    let category = '';
    const bmi    = weight / (height * height);

    if (bmi < 18.5) {
        category = 'Per mažas svoris';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normalu';
    } else {
        category = 'Viršsvoris';
    }
    
    return {
        bmi: bmi.toFixed(2),
        category: category
    };
}

const result = calculateBMI(weight, height);

document.getElementById('result3').innerText = `Žmogaus svoris: ${weight} kg, ūgis: ${height} m, BMI: ${result.bmi} - ${result.category}`;

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
const age = 1;

function calculateAgeInUnits(age) {
    const seconds = age * 365 * 24 * 60 * 60;
    const minutes = age * 365 * 24 * 60;
    const hours   = age * 365 * 24;
    const days    = age * 365;

    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
    };
}

const ageUnits = calculateAgeInUnits(age);

document.getElementById('result4').innerHTML = 
    `Žmogaus amžius: ${age} metų<br>` +
    `Tai yra:<br>` +
    `${ageUnits.seconds} sekundžių<br>` +
    `${ageUnits.minutes} minučių<br>` +
    `${ageUnits.hours} valandų<br>` +
    `${ageUnits.days} dienų`;

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

const tempValue = 100; 
const tempScale = 'C';


function convertTemperature(value, scale) {
    if (scale === 'F') {
        // Farenheito į Celsijų
        return (value - 32) * 5 / 9;
    } else if (scale === 'C') {
        // Celsijaus į Farenheitą
        return (value * 9 / 5) + 32;
    }

    return null;
}

const convertedTemp = convertTemperature(tempValue, tempScale);

document.getElementById('result5').innerText = 
    `Temperatūra: ${tempValue}°${tempScale} konvertuota į ${convertedTemp.toFixed(1)}°${tempScale === 'F' ? 'C' : 'F'}`;

/*
6. Sukurkite kodą, kuris išspausdins į console
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let numbers = '';

for ( let i = 1; i <= 10; i++) {
    numbers += i;
    if (i < 10) {
        numbers += '-';
    }
}

document.getElementById('result6').innerText = numbers;

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let starPattern = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        starPattern += '*';
    }
    starPattern += '\n';
}

document.getElementById('result7').innerText = starPattern;

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

const today              = new Date();
const christmas          = new Date(today.getFullYear(), 11, 25);
const timeDifference     = christmas - today;
const daysUntilChristmas = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

document.getElementById('result8').innerText = `Iki Kalėdų liko ${daysUntilChristmas} dienų`;

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

const namesArray = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

function joinArray(array, separator) {
    return array.join(separator);
}

const commaSeparated = joinArray(namesArray, ',');
const plusSeparated  = joinArray(namesArray, '+');

document.getElementById('result9').innerHTML = 
    `Masyvo duomenys su kableliais: ${commaSeparated}<br>` + `Masyvo duomenys su pliusais: ${plusSeparated}`;

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function generatePassword(length) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers   = '0123456789';
    const special   = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    const allChars = lowerCase + upperCase + numbers + special;
    let password   = '';

    // Užtikriname, kad bus bent po vieną simbolį iš kiekvienos kategorijos
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Užpildome likusius simbolius atsitiktiniais simboliais
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Maišome slaptažodžio simbolius atsitiktine tvarka
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

const password = generatePassword(12);

document.getElementById('result10').innerText = `Sugeneruotas slaptažodis: ${password}`;

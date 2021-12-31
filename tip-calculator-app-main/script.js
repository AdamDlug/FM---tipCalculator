const resetButton = document.getElementById('ResBtt');

let numberOfPeople = document.getElementById('NuberOfPeopleInput');
let billValue = document.getElementById('BillValueSpan')
let tipAmount = document.getElementById('TipAmountSpan');
let totalPerPerson = document.getElementById('TotalPerPersonSpan');
const tip5 = document.getElementById('Tip5');
const tip10 = document.getElementById('Tip10');
const tip15 = document.getElementById('Tip15');
const tip25 = document.getElementById('Tip25');
const tip50 = document.getElementById('Tip50');
const tipCustom = document.getElementById('TipValueSpan');


// funkcja przypisuje nowa wartosc napiwku
let zmiennaNapiwku = "TipValueSpan"
let test1 = function(e) {
    zmiennaNapiwku = e.id
}

const obliczenia = () => {
    let tip = ""
    if (Math.sign(billValue.value) === 0 || Math.sign(numberOfPeople.value) === 0) {
        totalPerPerson.innerHTML = "0"
        tipAmount.innerHTML = "0"
    } else {
        if (zmiennaNapiwku === "TipValueSpan"){
            tip = tipAmount.innerHTML = (parseFloat(billValue.value * document.getElementById(zmiennaNapiwku).value)/100).toFixed(2) ;
            totalPerPerson.innerHTML = ((billValue.value / parseFloat(numberOfPeople.value)) + parseFloat(tip)).toFixed(2);
    
        } else {
            tip = tipAmount.innerHTML = (parseFloat(billValue.value * document.getElementById(zmiennaNapiwku).innerHTML)/100).toFixed(2) ;
            totalPerPerson.innerHTML = ((billValue.value / parseFloat(numberOfPeople.value)) + parseFloat(tip)).toFixed(2);
        }  
    }
     
}

// Sprawdzenie poprawności wartości pola bill
const funkcjaSprawdzającaBill = function() {
    if (Math.sign(billValue.value) === -1) {
        document.getElementById('TestoweID').classList.add('wartosc-niepoprawna')
        if (document.getElementById('TestoweID').classList.contains('wartosc-poprawna')) {
            document.getElementById('TestoweID').classList.remove('wartosc-poprawna')
        } 
    } else if (Math.sign(billValue.value) === 0) {           
        document.getElementById('TestoweID').classList.remove('wartosc-niepoprawna')
        document.getElementById('TestoweID').classList.remove('wartosc-poprawna')
        obliczenia() 
    } else { 
        document.getElementById('TestoweID').classList.add('wartosc-poprawna')
        obliczenia()
        if (document.getElementById('TestoweID').classList.contains('wartosc-niepoprawna')) {
            document.getElementById('TestoweID').classList.remove('wartosc-niepoprawna')
        } 
    }
}

// Funkcja sprawdzająca liczbę ludzi do podziału
const mainFunction = () => {
    if (Math.sign(numberOfPeople.value) === -1) {
        document.getElementById('CantBeZeroSpanID').classList.remove('moreThanZeroSpan')
        numberOfPeople.value = "0"
    } else if (Math.sign(numberOfPeople.value) === 0) {
        document.getElementById('CantBeZeroSpanID').classList.remove('moreThanZeroSpan')
        funkcjaSprawdzającaBill()
    } else {
        document.getElementById('CantBeZeroSpanID').classList.add('moreThanZeroSpan')
        funkcjaSprawdzającaBill()
    }
}

////////////////////  wywołuje po kliknięciu klawisza enter  ////////////////////
const enterFunction = (e) => {
    if (e.key === 'Enter') {
       mainFunction()
    }
}

// funkcja resetuje wszystkie wartosci pol do domyślnych
const resetFc = () => {
    
    billValue.value = 0;
    tipAmount.innerHTML = 0;
    totalPerPerson.innerHTML = 0;
    numberOfPeople.value = 0;
    tipCustom.value = "";
    document.getElementById('TestoweID').classList.remove('wartosc-niepoprawna')
    document.getElementById('TestoweID').classList.remove('wartosc-poprawna')
    document.getElementById('CantBeZeroSpanID').classList.remove('moreThanZeroSpan')
}



///////////////////////////// przyciski /////////////////////////////

resetButton.addEventListener('click', function(){
    resetFc()
})
tip5.addEventListener('click', function() {
    test1(tip5)
    mainFunction()
    tipCustom.value = ""
}) 
tip10.addEventListener('click', function() {
    test1(tip10)
    mainFunction()
    tipCustom.value = ""
})
tip15.addEventListener('click', function() {
    test1(tip15)
    mainFunction()
    tipCustom.value = ""
})
tip25.addEventListener('click', function() {
    test1(tip25)
    mainFunction()
    tipCustom.value = ""
})
tip50.addEventListener('click', function() {
    test1(tip50)
    mainFunction()
    tipCustom.value = ""
})
// dodatkowo sprawdza czy wartość jest mniejsza od 0 i w takim przypadku zmienia wartość na 0
tipCustom.addEventListener('change', function() {
    test1(tipCustom)
    if (Math.sign(tipCustom.value) === -1) {
        tipCustom.value = "0"
    } else {
        mainFunction()
    }
})

document.addEventListener('keypress', enterFunction)

document.getElementById('BillValueSpan').addEventListener('change', function(){
    mainFunction()
})

document.getElementById('NuberOfPeopleInput').addEventListener('change', function(){
    mainFunction()
})





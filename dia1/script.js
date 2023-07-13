let numeroUm = Number(1)
//alert(typeof(numeroUm))
let stringUm = '1'
//alert(typeof(stringUm))
let numeroTrinta = Number(30)
let stringTrinta = '30'
let numeroDez = Number(10)
let stringDez = '10'
let res = document.querySelector('div#res')

if (numeroUm == stringUm && typeof(numeroUm) !== typeof(numeroUm)){
    res.innerHTML = (`- As variáveis <strong>${numeroUm}</strong> do tipo <strong>${typeof(numeroUm)}</strong> e <strong>${stringUm}</strong> do tipo <strong>${typeof(stringUm)}</strong> tem o mesmo valor, mas tipos diferentes <br>`)
    
} else if (numeroUm !== stringUm) {
    res.innerHTML = (`- As variáveis <strong>${numeroUm}</strong> do tipo <strong>${typeof(numeroUm)}</strong> e <strong>${stringUm}</strong> do tipo <strong>${typeof(stringUm)}</strong> não tem o mesmo valor <br>`)
}

if (numeroTrinta == stringTrinta && typeof(numeroTrinta) == typeof(stringTrinta)) {
    res.innerHTML += (`- As variáveis <strong>${numeroTrinta}</strong> do tipo <strong>${typeof(numeroTrinta)}</strong> e <strong>${stringTrinta}</strong> do tipo <strong>${typeof(stringTrinta)}</strong> tem o mesmo valor e mesmo tipo <br>`)

} else if (numeroTrinta == stringTrinta && typeof(numeroTrinta) !== typeof(stringTrinta)){
    res.innerHTML += (`- As variáveis <strong>${numeroTrinta}</strong> do tipo <strong>${typeof(numeroTrinta)}</strong> e <strong>${stringTrinta}</strong> do tipo <strong>${typeof(stringTrinta)}</strong> tem o mesmo valor, mas não tem o mesmo tipo <br>`)

} else if (numeroTrinta !== stringTrinta && typeof(numeroTrinta) !== typeof(stringTrinta)) {
    res.innerHTML += (`- As variáveis <strong>${numeroTrinta}</strong> do tipo <strong>${typeof(numeroTrinta)}</strong> e <strong>${stringTrinta}</strong> do tipo <strong>${typeof(stringTrinta)}</strong> não tem o mesmo valor e não tem o mesmo tipo <br>`)
}

if (numeroDez == stringDez && typeof(numeroDez) !== typeof(stringDez)){
    res.innerHTML += (`- As variáveis <strong>${numeroDez}</strong> do tipo <strong>${typeof(numeroDez)}</strong> e <strong>${stringDez}</strong> do tipo <strong>${typeof(stringDez)}</strong> tem o mesmo valor, mas tipos diferentes <br>`)

} else if (numeroDez !== stringDez) {
    res.innerHTML += (`- As variáveis <strong>${numeroDez}</strong> do tipo <strong>${typeof(numeroDez)}</strong> e <strong>${stringDez}</strong> do tipo <strong>${typeof(stringDez)}</strong> não tem o mesmo valor <br>`)
}
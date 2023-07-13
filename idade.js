function verificador() {

    var anoAtual = new Date()
    var ano = anoAtual.getFullYear()
    var anoDigitado = document.getElementById('ano')
    var res = document.getElementById('res')

    if (Number(anoDigitado.value.length) == 0 || Number(anoDigitado.value) > ano) {

        window.alert('Verifique os dados e tente novamente')

    }
    else {

        var sexo1 = document.getElementsByName('radsex')
        var idade = ano - Number(anoDigitado.value)
        var img = document.createElement('img')
        var sexo = document.getElementById('fem')
        var genero = ''
        img.setAttribute('id', 'foto')

        if (sexo.checked) {
            if (idade > 60) {
                genero = 'uma idosa'
                img.setAttribute('src', '_images/idosa.jpg')
            }
            else if (idade <= 60 && idade >= 21) {
                genero = 'uma adulta'
                img.setAttribute('src', '_images/adulta.jpg')
            }
            else if (idade > 14 && idade < 21) {
                genero = 'uma jovem'
                img.setAttribute('src', '_images/jovemf.jpg')
            }
            else if (idade < 14) {
                genero = 'uma criança'
                img.setAttribute('src', '_images/criancaf.jpg')
            }
        }
        if (!(sexo.checked)) {
            if (idade >= 60) {
                genero = 'um idoso'
                img.setAttribute('src', '_images/idoso.jpg')
            }
            else if (idade < 60 && idade >= 21) {
                genero = 'um adulto'
                img.setAttribute('src', '_images/fraco.jpg')
            }
            else if ( idade < 21 && idade > 12) {
                genero = 'um jovem'
                img.setAttribute('src', '_images/jovemm.jpg')
            }
            else if ( idade <= 12 ) {
                genero = 'uma criança'
                img.setAttribute('src', '_images/criancam.jpg')
            }
        }
        res.innerHTML = `Você é ${genero} de ${idade} anos`
        res.appendChild(img)

    }
}
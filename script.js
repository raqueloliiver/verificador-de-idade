function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }

    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images1/acer.png')
            }
            else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'images1/matheus.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images1/yuri.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'images1/joas.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images1/bela.png')
            }
            else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'images1/raquel.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images1/elisa.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'images1/jorgete.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }


 }
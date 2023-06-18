
function verificar() {
    var nasc = window.document.getElementById('ano').value
    var res = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('sexo')
    var cal = (2022 - nasc)
    var genero = ''
    var img = document.createElement ('img')
    img.setAttribute('id', 'foto')
    

    if (nasc == 0 || nasc > 2022) {
        window.alert (`ERRO, verifique os dados e tente novamente`)
        } else if (sexo[0].checked){
        genero = 'homem'
            if (cal >=0 && cal < 10) {
                img.setAttribute ('src', 'crianca.png')
            } else if (cal <21) {
                img.setAttribute ('src', 'adolescente.png')
            } else if (cal <50) {
                img.setAttribute ('src', 'adolescente.png')
            } else {
                img.setAttribute ('src', 'idoso.png')
            }
        } else {
            genero = 'mulher'
            if (cal >=0 && cal < 10) {
                img.setAttribute ('src', 'crianca.png')
            } else if (cal <21) {
                img.setAttribute ('src', 'adolescente.png')
            } else if (cal <50) {
                img.setAttribute ('src', 'adolescente.png')
            } else {
                img.setAttribute ('src', 'idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos um ${genero} de ${cal} anos, do sexo Masculino`
        res.appendChild(img)
    }
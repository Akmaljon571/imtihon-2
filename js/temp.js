export default function ({ Ism, Fam, Guruh, Jinsi, Otdimi }) {
    let template =document.getElementById('template')
    let copyTemplate = template.content.cloneNode(true)
    copyTemplate.querySelector('.fio').textContent = `${Ism} ${Fam}`
    copyTemplate.querySelector('.sinf').textContent = Guruh
    copyTemplate.querySelector('.jins').textContent = Jinsi
    copyTemplate.querySelector('.otdi').textContent = Otdimi
    copyTemplate.querySelector('.ochir').dataset.type = 'del'
    
    return copyTemplate
}
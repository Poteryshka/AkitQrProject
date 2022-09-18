const btnTechDoc = document.getElementById('techDoc')
const btnMainInfo = document.getElementById('mainInfo')
const btnDownload = document.getElementById('download')
const btnAsk = document.getElementById('ask')

let pageName = ['container-tech-doc', 'container-main-info', 'container-download', 'container-ask']

let switchPage = function(name){
    console.log(name)
    let activePage = document.querySelector('.' + name)
    activePage.classList.remove('none')
    for(item of pageName){
        if(item != name){
            let passivePage = document.querySelector('.' + item)
            passivePage.classList.add('none')
        }
    }
}
btnMainInfo.addEventListener('click', () => {
    switchPage('container-main-info')
})

btnTechDoc.addEventListener('click', () => {
    switchPage('container-tech-doc')
})

btnDownload.addEventListener('click', () => {
    switchPage('container-download')
})

btnAsk.addEventListener('click', () => {
    switchPage('container-ask')
})
const span = document.querySelector('#puppyDetails')
const image = document.querySelector('#image')
const detail = document.querySelector('#detail')

let theData = [];


async function puppyData () {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/')
    const json = await response.json()
    theData = json.data.players
    render()    
}

function render() {
    const hash = window.location.hash.slice(1) * 1
    const html = theData.map((rendata) => {
        return `<span class = "container">
        <a href="#${rendata.id}">${rendata.name}</a>
        <p>${rendata.breed}</p>
        </span>`
    }).join('')
    
    span.innerHTML = html
   
    const findImg = theData.find((rendata) => {
        return rendata.id === hash
    })

    let imageHtml = ''
    let detailHTML = ''

    if (findImg) {
        imageHtml = `
        <div style="background-image:url(${findImg.imageUrl})"></div>
        `
    }
    if (findImg) {
        detailHTML = `
        <span class = "details">
            <div>Name: ${findImg.name}</div>
            <div>Breed: ${findImg.breed}</div>
            <div>Status: ${findImg.status}</div>
        </div>
        `
    }

    image.innerHTML = imageHtml
    detail.innerHTML =detailHTML
}

window.addEventListener('hashchange', () => {
    render()
})

puppyData()
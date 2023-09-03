const span = document.querySelector('#puppyDetails')
const image = document.querySelector('#image')

let theData = [];


async function puppyData () {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/')
    const json = await response.json()
    theData = json.data.players
    console.log(theData)
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
    console.log(hash)
   
    const findImg = theData.find((rendata) => {
        return rendata.id === hash
    })

    let imageHtml = ''

    if (findImg) {
        imageHtml = `<div style="background-image:url(${findImg.imageUrl})"></div>`
    }
    console.log(imageHtml)

    image.innerHTML = imageHtml
}

window.addEventListener('hashchange', () => {
    render()
})

puppyData()
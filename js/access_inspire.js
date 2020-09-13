const app = document.getElementById('inspire-api')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://inspirehep.net/api/literature?sort=mostrecent&size=25&page=1&q=author%20adam%20lister%20AND%20cn%20nova%20or%20dune%20or%20microboone', true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    console.log(data)

    if (request.status >= 200 && request.status < 400) {
        data.hits.hits.slice(0,5).forEach((entry) => {
            console.log(entry.metadata.titles[0].title)
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('a')
            entry.link=entry.links.json
            var linkad = entry.link.replace("/api", "")
            h1.textContent = entry.metadata.titles[0].title
            h1.setAttribute('href', `${linkad}`)


            const h2 = document.createElement('h2')
            entry.collab = entry.metadata.collaborations[0].value
            entry.date = entry.metadata.earliest_date
            entry.cdot = "\267"
            h2.textContent = `${entry.date} ${entry.cdot} The ${entry.collab} Collaboration`

            const p = document.createElement('p')
            entry.abstract = entry.metadata.abstracts[0].value.substring(0, 200)
            p.textContent = `${entry.abstract}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(h2)
            card.appendChild(p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()
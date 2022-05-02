// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML= navbar()

let mySearch = async() => {
    const sear = document.getElementById("search_input").value
    try {

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${sear}`)
        let data = await res.json()
        data = data.articles
        console.log(data)
        document.querySelector("#results").innerHTML= null
        appendt (data)

    } catch(err) {

    }
   
}
document.querySelector("#search_input").addEventListener("keydown",mySearch)

function appendt (data) {

    data.map(({title,description,urlToImage}) => {
console.log("yes")

        // let div = document.querySelector(".news")
        let div = document.createElement("div")
        div.setAttribute("class","news")

        let im = document.createElement("img")
        im.src = urlToImage

        let t = document.createElement("h3")
        t.innerText = title

        let c = document.createElement("p")
        c.innerText = description

        div.append(im,t,c)
        document.getElementById("results").append(div)
    });

}

document.querySelector("#in").addEventListener("click", myIn)
document.querySelector("#ch").addEventListener("click", myIn)
document.querySelector("#us").addEventListener("click", myIn)
document.querySelector("#uk").addEventListener("click", myIn)
document.querySelector("#nz").addEventListener("click", myIn)

async function myIn (){
    let value = this.id
    console.log(value)
    try {

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let data = await res.json()
        data = data.articles
        console.log(data)
        document.querySelector("#results").innerHTML= null
        appendt (data)

    } catch(err) {

    }
}


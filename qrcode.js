let form=document.querySelector("form")
let sec=document.querySelector("section")
let image=document.createElement("img")

form.addEventListener("submit",(a)=>{
    a.preventDefault()
    let input=document.querySelector("#url").value
    let url=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    image.src=url
    sec.appendChild(image)
})

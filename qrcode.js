let form=document.querySelector("form")
let sec=document.querySelector("section")
let image=document.createElement("img")

form.addEventListener("submit",(a)=>{
    a.preventDefault()
    let input=document.querySelector("#url").value
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${input}`
    image.src=url
    sec.appendChild(image)
})

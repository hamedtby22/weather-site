
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=7778bee6b06efb66c44ed5859fd48ce6&units=metric

const form=document.querySelector(".top-banner form");
const input=document.querySelector(".top-banner input");
const msg=document.querySelector(".top-banner .msg");
const list=document.querySelector(".ajax-section .cities")

const apikey="7778bee6b06efb66c44ed5859fd48ce6";

form.addEventListener("submit",e=>{
    e.preventDefault();
    let inputval=input.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=metric`
    console.log(url);
    fetch(url)
    .then(Response => Response.json())
    .then(data=>{
        console.log(data);
        const {main,name,sys,weather}=data;
        const icon=`http://openweathermap.org/img/wn/${weather[0]["icon"]}.png`
        const li=document.createElement("li");
        li.classList.add("city");
        const makeup=`
        <h2 class='city-name' data-name=${name},${sys.country}>
        <strong>${name}</strong>
        <span>${sys.country}</span>
        </h2>
        <div class='city.temp'>${Math.round(main.temp)}</div>
        <figure>
        <img class='city-icon' src='${icon}' alt='city' >
        <figurecaptrion>${weather[0]["description"]}</figurecaption>
        </figure>
        `;
        li.innerHTML=makeup;
        list.appendChild(li)
        msg.innerText=""
    })
        .catch(()=>{
            msg.innerText="invalid a country"
    })
    input.value=""
})

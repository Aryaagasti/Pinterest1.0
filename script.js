let arr = [
    { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sunflower", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2400&auto=format&fit=crop" },
    { name: "Cityscape", image: "https://images.unsplash.com/photo-1489447068241-72b9f1ebea28?q=80&w=2400&auto=format&fit=crop" },
    { name: "Ocean View", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2400&auto=format&fit=crop" },
    { name: "Mountains", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop" },
    { name: "Beach Sunset", image: "https://images.unsplash.com/photo-1462798950224-6f38c8e90332?q=80&w=2400&auto=format&fit=crop" },
    { name: "Forest", image: "https://images.unsplash.com/photo-1440557653082-e8e186733eeb?q=80&w=2400&auto=format&fit=crop" }
    
]

let clutter = ""
const showTheCards = () => {
    let clutter = ""
    arr.forEach((obj) => {
        clutter += `<div class="box">
        <img src="${obj.image}" alt="image">
        <div class="caption">lorem ipsum</div>
       </div>`
    })
    document.querySelector(".container").innerHTML = clutter
}


const HnadleSearch = () => {
    let input = document.querySelector("#searchinput");

    input.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block"
    })
    input.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none"
    })

    input.addEventListener("input",()=>{
        const searchTerm = input.value.toLowerCase();
        const filterArray = arr.filter((obj)=> obj.name.toLowerCase().startsWith(searchTerm));
        let clutter = "";
        filterArray.forEach((obj)=>{
            clutter += `<div class="box">
                <img src="${obj.image}" alt="image">
                <div class="caption">${obj.name}</div>
            </div>`;
        })
        document.querySelector(".container").innerHTML = clutter;
    })

    
}

HnadleSearch()
showTheCards();
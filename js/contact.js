let filepath = "../json/contact.json";
let filepathImages = "../media/images/";
let node = document.getElementById("contactCards");

function loadJson() {
    fetch(filepath)
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(json) {
    let content = json.contact.map(createHotelCards).join('');
    node.innerHTML = content;
}

function createHotelCards({ id, department, responsible, opening, city, address, image }) {
    return `
    <form action="mailto:verticetravel@gmail.com" method="post" enctype="text/plain">
        <div class="contact">
            <p class="departmentmini">oficina:</p>
            <p class="department">${department}</p>
            <p class="responsiblemini">responsable:</p>
            <p class="responsible">${responsible}</p>
            <p class="openingmini">horario:</p>
            <p class="opening">${opening}</p>
            <p class="citymini">direccion:</p>
            <p class="city">${city}, ${address}</p>
            <img class="imageMap" src="../media/images/contact/${image.path}" alt=${image.alt} title=${image.title}>
            <button type="submit" class="button">Contacta</button>
        </div>
    </form>
    `
}

loadJson();
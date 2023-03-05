const searchInput = document.querySelector("[data-search]")
searchInput.addEventListener("input", e => {
    const value = e.targetValue
    console.log(value)
})

fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    }).then((jsdata) => {
        let dataFetch = "";
        jsdata.map((values) => {
            dataFetch +=
                `<div class="col-lg-6 mb-4">
                    <div class="card">
                        <img style="padding:3em" class="card-img-top" src="${values.image}" alt="image">
                        <div class="card-body">
                            <h5 class="card-title">${values.title}</h5>
                            <p class="lead">
                                ${values.category}
                            </p>
                            <p class="card-text">
                                ${values.description}
                            </p>
                            <div class="bg-light d-flex justify-content-between">
                                <span class="price">$ ${values.price}</span>
                                <span class="rating" style="-ms-flex-align: end;">⭐${values.rating.rate}  (${values.rating.count})</span>
                            </div>
                        </div>
                    </div>
                </div>`
        });
        document.getElementById("root").innerHTML = dataFetch;

    }).catch((err) => {
        console.log(err);
    })
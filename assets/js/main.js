const element = (s) => document.querySelector(s)

function findCountry() {
    let inputValue = element("#inpValue").value
    let inpValue = inputValue.toUpperCase()
    fetch(`https://restcountries.eu/rest/v2`)
        .then(response => response.json())
        .then(countries => {
            let output = []
            countries.forEach(country => {
                let name = country.name.toUpperCase()
                let region = country.region.toUpperCase()
                if (name.includes(inpValue) || region.includes(inpValue) || country.callingCodes.includes(inpValue)) {
                    output +=
                        `
                        <div class="col">
                            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <p><img class=" img-fluid"
                                                    src=${country.flag}></p>
                                                <h4 class="card-title">${country.name}</h4>
                                                <section id="tabs" class="project-tab">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="tab-content" id="nav-tabContent">
                                                                    <table class="table" cellspacing="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><span> Continent</span></td>
                                                                                <td>${country.region}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><span>Locale</span></td>
                                                                                <td>${country.subregion}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><span>Capital</span></td>
                                                                                <td>${country.capital}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><span>Population</span></td>
                                                                                <td>${country.population}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><span>Calling Code</span></td>
                                                                                <td>${country.callingCodes}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="backside">
                                        <div class="card">
                                            <div class="card-body text-center mt-4">
                                                <h4 class="card-title">${country.name}</h4>
                                                <p class="card-text">
                                                    <b>${country.name}</b> is officially the <b>${country.altSpellings}</b> in <b>${country.subregion}</b>. Its capital in <b>${country.capital}</b>.${(country.borders.length > 0) ? `It is bordered by <b>${country.borders}</b>` : ""}. The country span a combined area of <b>${country.area}</b> square kilometres and a total population of <b>${country.population.toString().slice(0, 2)}.${country.population.toString()[2]}</b> million.
                                                </p>
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <a class="social-icon text-xs-center" target="_blank" href='https://en.wikipedia.org/wiki/${country.name}'>See on
                                                        <i class="fab fa-wikipedia-w"></i>iki
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            `
                }

            })
            element("#output").innerHTML = output
        }
        )
    element("#input").style.display = "none"
    element("#all").style.display = "block"

}

element("#search").addEventListener("click", findCountry)
//conts
const apikey = "b353bd293a3fb6493f558d2466d19c9a";
const apiEndpoint = "https://api.themoviedb.org/3"

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}movie/550?api_key=${apikey}`
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`
}


//boots up the app
function init() {
    fetchAndBuildAllSections()
}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => {
            const categories = res.genres;
            if (Array.isArray(categories) && categories.length) {
                categories.slice(0, 2).forEach(category => {
                    fetchAndbuildMovieSection(
                        apiPaths.fetchMoviesList(category.id), category);
                });
            }
            //console.table(movies);
        })
        .catch(err => console.error(err));
}

function fetchAndbuildMovieSection(fetchUrl, category) {
    console.log(fetchUrl, category);
    fetch(fetchUrl)
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
        })
        .catch(err => console.error(err))

}

window.addEventListener('load', function () {
    init();

})

console.log({location});

function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        moviePage()
    } else if (location.hash.startsWith('#category=')) {
        categoryPage()
    } else {
        homePage()
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";


const pathToRegex = (path) => {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g,"(.+)") + "$");

}

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

// It will prevent refrshing and push state and rerun the router.
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}


// Keep track of the url to find the match in the mention routes and render the view accordingly.
const router = async () => {

    const routes = [
        {
            path: "/",
            view: Dashboard
        },
        {
            path: "/posts",
            view: Posts
        },
        {
            path: "/post/:id",
            view: PostView
        },

        {
            path: "/settings",
            view: Settings
        },
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
            
            
        }
    }

    const view = new match.route.view(getParams(match));
    await view.init();

    // document.querySelector("#app").innerHTML = await view.getHTML();
}

// When DOM loaded run the router and add event listener to any click of any element and as per navigateTo.Whenever element generally a tag having data-link tag is clicked instead of redirecting to href refreshing it.
document.addEventListener("DOMContentLoaded", async () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    await router()

})


// When poppingState router should be run
window.addEventListener("popstate", async () => await router())
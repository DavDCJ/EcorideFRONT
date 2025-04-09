import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/inscription.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";
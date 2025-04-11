import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/covoiturages", "Covoiturages", "/pages/covoiturages.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/inscription.html"),
    new Route("/moncompte", "Mon Compte", "/pages/moncompte.html"),
    new Route("/editPassword", "Modifier le Mot de Passe", "/pages/editPassword.html"),
    new Route("/mestrajets", "Mes trajets", "/pages/mestrajets.html"),
    new Route("/proposer", "Proposer un trajet", "/pages/proposer.html"),
    new Route("/test", "Test", "/pages/test.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Ecoride";
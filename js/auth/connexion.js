const mailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btnConnexion = document.getElementById("btnConnexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici il faut appeler l'API pour vérifier les données en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){

        const token = "fjidghhjcnviohriohohoh"
        setToken(token);
        //Il faudra récup le vrai token
        //Placer ce token en cookie

        window.location.replace("/home");
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
}
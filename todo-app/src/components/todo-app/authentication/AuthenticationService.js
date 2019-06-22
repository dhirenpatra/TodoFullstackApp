class AuthenticationService {

    registerUser(username, pasword) {
        sessionStorage.setItem("auth_user" , username);
    }

    deregisterUser () {
        console.log("Removed");
        sessionStorage.removeItem("auth_user");
        window.location.reload();
    }

    isAuthorized = () => {
        let user = sessionStorage.getItem("auth_user");
        if(user === null) 
            return false;
        return true;
    }

}

export default new AuthenticationService();
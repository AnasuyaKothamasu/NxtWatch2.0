import { action, computed, makeObservable, observable } from "mobx";

class LoginStore {
    username: string = "";
    password: string = "";
    showPass: boolean = false;
    showError: boolean = false;
    errorMsg: string = "";

    constructor() {
        makeObservable(this, {
            username: observable,
            password: observable,
            showPass: observable,
            showError: observable,
            errorMsg: observable,
            setShowError: action,
            setErrorMsg: action,
            userDetails: computed,
            setUsername: action,
            setPassword: action,
            setShowPass: action
        })
    }

    setShowError(value: boolean) {
        this.showError = value
    }

    setErrorMsg(value: string){
        this.errorMsg = value
    }

    get userDetails(){
        return {username: this.username, password: this.password}
    }

    setUsername(value: string) {
        this.username = value
    }

    setPassword(value: string){
        this.password = value
    }

    setShowPass(value: boolean){
        this.showPass = value
    }

}

const loginStore = new LoginStore()
export default loginStore
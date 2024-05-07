import { $ } from '@wdio/globals'
// import { browser } from '@wdio/globals'
class login {
    get Username(){
        return $('#user-name')
    }
    
    get Password(){
        return $('#password')
        
    }

    get loginBtn(){
        return $('#login-button')
    }

    async login (username, password) {
        await this.Username.setValue(username)
        await this.Password.setValue(password)
        await this.loginBtn.click()
    }
}
export default new login();
import axios from "axios";
const API_URL = "http://localhost:8083/user/";

class AuthService {
  login(mail, password) {
    return axios
      .post(API_URL + "login", {
        mail,
        password
      })
      .then(response => {
        if (response.data.id) {
        

          localStorage.setItem("id", JSON.stringify(response.data.id));
          localStorage.setItem("email", JSON.stringify(response.data.email));
          

        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("id");

  }
  register(name,username, mail, password,role) {
    return axios.post(API_URL + "register", {
        name,username, mail, password,role
    });
  }
  getCurrentUserId() {
    return JSON.parse(localStorage.getItem('id'));
  }
  getCurrentUserToken() {
    return JSON.parse(localStorage.getItem('user'));
  }
  getCurrentUsername() {
  
  const id =this.getCurrentUserId();
  return axios.get(API_URL + "username/"+ id,{
    headers:{ Authorization: 'Bearer ' + this.getCurrentUserToken() }
  }
  ).then(response=>{return response.data.username}).catch((e)=>console.log(e));
  
  }
  getCurrentRole(){
    return JSON.parse(localStorage.getItem('role'));
  }
  islogged(){
    return JSON.parse(localStorage.getItem('id'))!=undefined;
  }
}
export default new AuthService();


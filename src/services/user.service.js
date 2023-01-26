import axios from 'axios';

const API_URL = 'http://localhost:8083/';
class UserService {
  getBalance(id) {
    return axios.get(API_URL + 'user/getbalance?id='+id, );
  }
 

  createTransaction(transaction) {
    return axios.post(API_URL + 'transaction/createtransaction', transaction);
  }

  getTransactions(id) {
    return axios.get(API_URL + 'transaction/getalltransactions?id='+id, );
  }

  getUserDetails(id){
     // return axios.get(API_URL+ 'user/getUserDetails?id='+id,);
 return axios.post(API_URL+ 'user/getUserDetails?id='+id,);
  } 
}
export default new UserService();

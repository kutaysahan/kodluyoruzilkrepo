import axios from 'axios'; // axios modulu import edildi.

// getData async olarak tanimlandi. axios.get kullanilarak veriye ulasildi.
export async function getData(userID){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
    console.log(response);
}

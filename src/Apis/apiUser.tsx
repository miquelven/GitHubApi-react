import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api.github.com/users/'
});

export const apiUser = async (name: string) =>{
    try{
        const response = await http.get(name);
        return response.data
    }
    catch{
        alert("Esse repositório não foi encontrado")
    }
}
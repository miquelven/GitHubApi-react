// import styles from './SearchUsers.module.css'
import { useState } from 'react'
import { apiUser } from '../Apis/apiUser';
import UserProps from '../Types/user';
import { InfoUser } from './InfoUser';

export const SearchUser = () =>{

    const [user, setUser] = useState<string>('');
    const [userInfo, setUserInfo] = useState<UserProps | null>(null);

    const HandleValueInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUser(e.target.value);
    }

    const HandleSearchUser = async () =>{
        // user !== undefined ? setUserInfo(await apiUser(user)) : null
        if(!user){
            return;
        }
        let response = await apiUser(user);

        let objuser: UserProps = {
            avatar_url: response.avatar_url,
            location: response.location,
            name: response.name,
            public_repos: response.public_repos
        }
        setUserInfo(objuser)

    }

    return (
        <div>
            <h2>Buscar usuário:</h2>
            <input 
            type="text"
            placeholder="Digite um usuário"
            onChange={HandleValueInput}
             />

             <button onClick={HandleSearchUser}>Buscar</button>
              
              {userInfo &&
                <InfoUser  item={userInfo} />
              }

        </div>
    );
}
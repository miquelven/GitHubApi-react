import UserProps from "../Types/user";

// export const InfoUser = (Props: UserProps | null, text:string) =>{
//     return (
//         <div>
//             <img src={Props?.avatar_url} alt="Foto do usuário" width={200}/>
//             <h3>Nome do usuário: {Props?.name}</h3>
//             <hr />
//             <ul>
//                 {Props?.location &&
//                     <li>Cidade: {Props?.location}</li>
//                 }
//                 <li>Repositórios públicos: {Props?.public_repos}</li>
//             </ul>
//             {text}
//         </div>
//     )
// }

interface Props{
    item: UserProps | null
}

export const InfoUser = ({item}: Props) =>{
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center'}}>
            <img src={item?.avatar_url} alt="Imagem do usuário" width={200}/>
            <h3>Nome do usuário: {item?.name}</h3>

             <p>Cidade: {item?.location}</p>

             <p>Repositórios públicos: {item?.public_repos}</p>
        </div>
    )
}

export default InfoUser;
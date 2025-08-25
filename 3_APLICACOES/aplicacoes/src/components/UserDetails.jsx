
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>profissão: {profissao}</li>
        </ul>
        {idade >= 18 ? (
            <p>O usuário pode tirar carteira de motorista</p>
        ):(
            <p>O usuário é menor e não pode tirar carteira de motorista</p>
        )}
    </div>
  )
}

export default UserDetails
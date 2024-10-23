import { useNavigate } from 'react-router-dom'
import {userService} from '../../services/user.sevice'

export default function HomePage() {  
    
    const navigate = useNavigate()

    userService.getUsers().then(list => {
        console.log(list)
    })

    function goToCreateUser() {
        navigate('/user/create')
    }
    
    return(
        <div>
            <header>
                <button>Sair</button>

                Usuário Cadastrado

                <button onClick={goToCreateUser}>Novo</button>
            </header>
            <main>

            </main>
        </div>
    )
}
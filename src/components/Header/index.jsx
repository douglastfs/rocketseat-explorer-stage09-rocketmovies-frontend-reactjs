import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri'


export function Header(){
  return (
    <Container>
      <Profile>
        <img src="https://github.com/douglastfs.png"
         alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Douglas Tenório</strong>
        </div>


      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>


    </Container>
  )
}
import Header from '../components/Header'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import styled from 'styled-components'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Header title="Login" />

            <LoginContainer>
                <Logo src="/whatsapp.png" />
                <Button 
                    variant="outlined"
                    onClick={signIn}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, .7);
`

const Logo = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
`
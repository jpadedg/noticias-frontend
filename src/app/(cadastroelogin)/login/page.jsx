import LoginForm from "@/components/LoginForm";
import './style.css'

const LoginPage = () => {
    return (
        <div className="pageLogin">
            <div className="box">
                <h3 className="loginTitle">Faça login para adicionar novas noticias!!</h3>
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage;
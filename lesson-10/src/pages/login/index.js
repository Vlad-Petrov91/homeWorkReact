import { AuthTemplate } from "../../components/templates/auth"
import { Link } from "react-router-dom"
import { AuthForm } from "../../components/authForm"
import { firebaseApp } from "../../api/fireBase"


const onSubmit = (email, password) => {
   return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export const LoginPage = () => {
   return <AuthTemplate link={<Link to="sign-up">У Вас нет акк? Регистрация </Link>} >
      <AuthForm title="Войти" onSubmit={onSubmit} submitButtonTitle="Вход" />
   </AuthTemplate>
}
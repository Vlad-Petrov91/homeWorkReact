import { AuthTemplate } from "../../components/templates/auth"
import { Link } from "react-router-dom"
import { AuthForm } from "../../components/authForm"
import { firebaseApp } from "../../api/fireBase"



const onSubmit = (email, password) => {
   return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export const SignUpPage = () => {
   return (<AuthTemplate link={<Link to="Login">У Вас есть акк? Войдите</Link>} >
      <AuthForm onSubmit={onSubmit} title="Регистрация" submitButtonTitle="Зарегистрироваться" />
   </AuthTemplate>)
}
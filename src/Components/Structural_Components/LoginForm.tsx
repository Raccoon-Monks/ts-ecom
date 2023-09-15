import styles from './Styles/login-form.module.css'
import Link from 'next/link'

export default function LoginForm (){

    return (
        <div className={styles.container}>
            <p>LOGIN</p>
            <form>
                <div>
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" >Senha</label>
                    <input type="password" id="exampleInputPassword1"/>
                </div>
                <span>
                    <button type="submit" className={styles.button}>Entrar</button>
                    <Link href="/signup"><button type="submit" className={styles.button}>Cadastre-se</button></Link>
                </span>
            </form>
        </div>
    )
}
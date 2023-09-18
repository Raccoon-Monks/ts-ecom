import styles from './Styles/login-form.module.css'
import Link from 'next/link'

export default function LoginForm (){

    return (
        <div className={styles.container}>
            <p>LOGIN</p>
            <form className={styles.login}>
                    <label htmlFor="exampleInputEmail1">EMAIL</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <label htmlFor="exampleInputPassword1" >SENHA</label>
                    <input type="password" id="exampleInputPassword1"/>
                <span>
                    <button type="submit" className={styles.button}>ENTRAR</button>
                    <Link href="/signup"><button type="submit" className={styles.button}>CADASTRE-SE</button></Link>
                </span>
            </form>
        </div>
    )
}
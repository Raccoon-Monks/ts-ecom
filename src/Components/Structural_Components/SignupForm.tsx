"use client"; // This is a client component 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './Styles/login-form.module.css';
import 'react-datepicker/dist/react-datepicker.css'

export default function LoginForm() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
        <div className={styles.container}>
            <p>CADASTRO</p>
            <form>
                <div>
                    <label htmlFor="exampleInputName1" >Nome Completo</label>
                    <input type="password" id="exampleInputPassword1" />
                </div>
                <div>
                    <label htmlFor="exampleInputBirth1" >Data de Nascimento</label>
                    <div>
                        <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    </div>
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div>
                    <label htmlFor="exampleInputPassword1" >Senha</label>
                    <input type="password" id="exampleInputPassword1" />
                </div>
                <span>
                    <button type="submit" className={styles.button}>Entrar</button>
                </span>
            </form>
        </div>
    )
}
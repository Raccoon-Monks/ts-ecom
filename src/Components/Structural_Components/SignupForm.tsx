"use client"; // This is a client component 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './Styles/login-form.module.css';
import 'react-datepicker/dist/react-datepicker.css'

export default function LoginForm() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
        <div id='Primeiro' className={styles.container}>
            <p>CADASTRO</p>
            <form className={styles.signup}>

                <label htmlFor="exampleInputName1" >Nome Completo</label>
                <input type="name" id="exampleInputPassword1" />

                <label htmlFor="exampleInputBirth1" >Data de Nascimento</label>
                <DatePicker
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setDate(date)}
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />

                <label htmlFor="exampleInputPassword1" >Senha</label>
                <input type="password" id="exampleInputPassword1" />

                <span>
                    <button type="submit" className={styles.button}>CADASTRAR</button>
                </span>
            </form>
        </div>
    )
}
import FormSubmitCta from '../CTA/FormSubmitCta'
import styles from './Styles/newsletter-form.module.css'

export default function NewsletterForm(){
return (
    <form className={styles.form}>
        NEWSLETTER FORM
        <input id="email"/>
        <FormSubmitCta/>
    </form>
)
}
import style from "./Contato.module.css"
import { useState } from "react"

export default function Contato() {

    const [copiado, setCopiado] = useState(false);
    const email = "jadersonv13@gmail.com";

    const copiarEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000)
        });
    }

    return (<>
        <section id="contatos" className={style.contato}>
            <h3>Contatos</h3>
            <div>
                <button title="Copiar email" onClick={copiarEmail}>{copiado ? "Copiado!" : email}</button>
                <a href="https://www.linkedin.com/in/j%C3%A1derson-v%C3%A1lner-735b46325/">Linkedin</a>
            </div>
        </section>
    </>)
}
import style from "./Inicio.module.css"

export default function Inicio() {

    return (<>
        <section className={style.perfil} id="inicio">
            <figure className={style.profile}>
                <img src="https://placehold.co/250x250" alt="foto de perfil"></img>
                <article>
                    <h4>Jáderson Válner</h4>
                    <h6>Desenvolvedor</h6>
                </article>
            </figure>

            <article className={style.artigo}>

                <h4>Sobre mim</h4>

                <h5>
                    No meu primeiro contato com a programação já fiquei admirado com essa área. Mesmo com pouco conhecimento são inúmeras as possibilidades de aplicações que podemos desenvolver. Desde então busco diariamente aprimorar minhas habilidades como desenvolvedor para, um dia, viver dos frutos do meu aprendizado.
                </h5>

                <p>
                    Planejo atuar tanto no frontend como backend, atualmente estudo principalmente tecnologias da web como html, css, javaScript, node e react.
                </p>

                <h4>Linguagens e Tecnologias</h4>

                <figure>
                    <img title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

                    <img title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

                    <img title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

                    <img title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

                    <img title="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />

                    <img title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

                    <img title="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />

                    <img title="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                </figure>

            </article>
        </section>


    </>)
}
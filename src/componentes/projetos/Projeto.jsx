import style from "./Projeto.module.css";

export default function Projeto() {
    return (<>

        

        <section className={style.projetos} id="projetos">

        <h3 className={style.h3}>Projetos</h3>

            <div>
                <h3>Jogo da forca</h3>
                <p>Jogo da forca com teclado virtual</p>
                <a href="https://jaderson13.github.io/Projetos/jogo_da_forca/index.html">
                    <img src="./src/assets/forca.png" alt="jogo da forca início" />
                </a>
            </div>
            <div>
                <h3>Calculadora</h3>
                <p>Calculadora simples feita com javascript</p>
                <a href="https://jaderson13.github.io/Projetos/calculadora/index.html">
                    <img id="pais" src="./src/assets/calc1.png" alt="Calculadora" />
                </a>
            </div>
            <div>
                <h3>Blog online com banco de dados</h3>
                <p>(30 segundos para carregar, hospedagem gratuita)</p>
                <a href="https://blog-pg.onrender.com/">
                    <img src="./src/assets/blog.png" alt="Imagem do blog" />
                </a>
            </div>
            
        </section>
    </>)
}
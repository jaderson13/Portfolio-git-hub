import style from "./Header.module.css"

export default function Header() {

    const linkSecao = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    return (<>
        <nav class="navbar navbar-expand-lg mb-5 px-4">
            <div class="container-fluid ">
                <a class="navbar-brand text-light" href="#">Portifólio Git Hub</a>
                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="nav-link active text-light" onClick={() => linkSecao("inicio")}>Início</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link text-light" onClick={() => linkSecao("projetos")}>Projetos</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link text-light" onClick={() => linkSecao("contatos")}>Contato</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
} 
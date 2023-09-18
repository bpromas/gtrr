class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <header id="navbar">
            <a href="index.html"><img class="header-logo" src="assets/img/GTRR Logo.svg" alt="GTRR"></a>
            <nav class="nav-options">
                <a class="nav-item" href="index.html">INÍCIO</a>
                <a class="nav-item" href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                <div class="sub-nav">
                    <button class="sub-nav-btn">SOBRE <img src="assets/img/carat-down.svg" alt="(+)"></button>
                    <div class="sub-nav-content">
                        <a class="sub-nav-item" href="estatuto.html">ESTATUTO</a>
                        <a class="sub-nav-item" href="manifesto.html">MANIFESTO</a>
                    </div>
                </div>
                <a class="nav-item" href="faq.html">FAQ</a>
                <div class="sub-nav">
                    <button class="sub-nav-btn">PROJETOS <img src="assets/img/carat-down.svg" alt="(+)"></button>
                    <div class="sub-nav-content">
                        <a class="sub-nav-item" href="em-andamento.html">EM ANDAMENTO</a>
                        <a class="sub-nav-item" href="finalizados.html">FINALIZADOS</a>
                        <a class="sub-nav-item" href="sugestao.html">SUGIRA UM PROJETO</a>
                    </div>
                </div>
                <a class="nav-item" href="cadastro.html">CADASTRO</a>
            </nav>
        </header>
        <div class="hamburger-menu">
            <span class="hamburger-icon">☰</span>
            <div class="hamburger-options">
                <a class="hamburger-item" href="index.html">INÍCIO</a>
                <a class="hamburger-item" href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                <div class="sub-hamburger">
                    <a class="sub-hamburger-btn">SOBRE</a>
                    <div class="sub-hamburger-content">
                        <a class="sub-hamburger-item" href="estatuto.html">ESTATUTO</a>
                        <a class="sub-hamburger-item" href="manifesto.html">MANIFESTO</a>
                    </div>
                </div>
                <a class="hamburger-item" href="faq.html">FAQ</a>
                <div class="sub-hamburger">
                    <button class="sub-hamburger-btn">PROJETOS</button>
                    <div class="sub-hamburger-content">
                        <a class="sub-hamburger-item" href="em-andamento.html">EM ANDAMENTO</a>
                        <a class="sub-hamburger-item" href="finalizados.html">FINALIZADOS</a>
                        <a class="sub-hamburger-item" href="sugestao.html">SUGIRA UM PROJETO</a>
                    </div>
                </div>
                <a class="hamburger-item" href="cadastro.html">CADASTRO</a>
            </div>
        </div>
        `;
    }
}
  
customElements.define('header-component', Header);

// adicionar classe active
const path = window.location.pathname;
const page = path.split("/").pop();

const actives = document.querySelectorAll(`a[href="${page}"]`)
actives.forEach(element => {
    element.classList.add("active");
});
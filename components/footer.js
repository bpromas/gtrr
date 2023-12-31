class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="promos">
                <img src="assets/img/GTRR Footer.svg" alt="GTRR">
                <div class="socials">
                    <a href="#"><img src="assets/img/Twitter.svg" alt="Twitter"></a>
                    <a href="#"><img src="assets/img/Instagram.svg" alt="Instagram"></a>
                    <a href="#"><img src="assets/img/TikTok.svg" alt="TikTok"></a>
                    <a href="#"><img src="assets/img/YouTube.svg" alt="YouTube"></a>
                </div>
            </div>

            <div class="list">
                <h2>ESSENCIAIS</h2>
                <a href="index.html">INÍCIO</a>
                <a href="primeiros-passos.html">PRIMEIROS PASSOS</a>
                <a href="sobre-nos/estatuto.html">ESTATUTO</a>
                <a href="sobre-nos/manifesto.html">MANIFESTO</a>
                <a href="faq.html">PERGUNTAS FREQUENTES</a>
            </div>
            <div class="list">
                <h2>FORMULÁRIOS</h2>
                <a href="projetos/sugestao.html">SUGESTÃO DE PROJETO</a>
                <a href="cadastro.html">CADASTRO</a>
            </div>
            <div class="list">
                <h2>PROJETOS</h2>
                <a href="projetos/em-andamento.html">EM ANDAMENTO</a>
                <a href="projetos/finalizados.html">FINALIZADOS</a>
            </div>
        </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);
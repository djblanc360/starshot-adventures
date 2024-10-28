
class MegaMenu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const header = this.querySelector("header") as HTMLElement;
    const navItems = this.querySelectorAll("nav ul li");
    const megaMenu = this.querySelector("menu") as HTMLElement;
    const menu = this.querySelectorAll(".menu") as NodeListOf<HTMLElement>;

    if (!megaMenu) {
        return;
    }
    navItems.forEach((item, index) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("active");
            this.showMenu(index, megaMenu, menu);
        });
    });
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            item.classList.add("active");
            this.showMenu(index, megaMenu, menu);
        });
    });

    // user must exit entire header section to hide menu
    this.addEventListener("mouseleave", () => {
        this.hideMenu(megaMenu, menu);
    });

  }

  showMenu(index: number, megaMenu: HTMLElement, menu: NodeListOf<HTMLElement>) {
    megaMenu.classList.add("active");
    console.log('showMenu', index);
    megaMenu.classList.remove("opacity-0", "scale-y-0");
    menu.forEach((item, i) => {
        if (i === index) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
  }

  hideMenu(megaMenu: HTMLElement, menu: NodeListOf<HTMLElement>) {
    megaMenu.classList.remove("active");
    megaMenu.classList.add("opacity-0", "scale-y-0");
    menu.forEach((item) => {
        item.classList.add("hidden");
    });
  }
}
customElements.define('mega-menu', MegaMenu);
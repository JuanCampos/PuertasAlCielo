export default function MenuToggle() {
    if (typeof window !== 'undefined') {
        const init = () => {
            const toggle = document.getElementById("menu-toggle");
            const menu = document.getElementById("menu");

            if (toggle && menu) {
                toggle.addEventListener("click", () => {
                    const isOpen = toggle.classList.toggle("open");
                    toggle.textContent = isOpen ? '✖' : '☰';
                    menu.classList.toggle("active");
                });

                // Cierra el menú al hacer clic en un enlace
                menu.querySelectorAll("a").forEach((link) => {
                    link.addEventListener("click", () => {
                        menu.classList.remove("active");
                        toggle.classList.remove("open");
                        toggle.textContent = '☰';
                    });
                });
            }
        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", init);
        } else {
            init();
        }
    }

    return null;
}

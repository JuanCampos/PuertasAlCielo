export default function MenuToggle() {
    if (typeof window !== 'undefined') {
        const init = () => {
            const toggle = document.getElementById("menu-toggle");
            const menu = document.getElementById("menu");

            if (toggle && menu) {
                toggle.addEventListener("click", () => {
                    menu.classList.toggle("active");
                });

                // Opcional: cerrar menú al hacer clic en un enlace
                menu.querySelectorAll("a").forEach((link) => {
                    link.addEventListener("click", () => {
                        menu.classList.remove("active");
                    });
                });
            }
        };

        // Esperar a que cargue el DOM si es necesario
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", init);
        } else {
            init();
        }
    }

    return null; // Astro espera que un componente JS retorne algo
}

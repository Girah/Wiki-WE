document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".Nav");
    const menuIcon = document.querySelector(".menuIcon");
    const closeIcon = document.querySelector(".closeIcon");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        if (nav.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "inline";
        } else {
            menuIcon.style.display = "inline";
            closeIcon.style.display = "none";
        }
    });

    (function() {
      const timestamp = Date.now();

      // Cibler tous les <link rel="stylesheet"> et <script src="">
      document.querySelectorAll('link[rel="stylesheet"], script[src]').forEach(el => {
        const attr = el.tagName === "LINK" ? "href" : "src";
        const url = new URL(el.getAttribute(attr), window.location.href);

        // Ajouter le timestamp comme paramètre (cache-buster)
        url.searchParams.set("v", timestamp);

        el.setAttribute(attr, url.toString());
      });
    })();
});
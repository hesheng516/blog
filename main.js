const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const revealTargets = document.querySelectorAll(
  ".section h2, .section-copy, .traits, .stack-grid, .project-list, .note-list, .contact-rows"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}

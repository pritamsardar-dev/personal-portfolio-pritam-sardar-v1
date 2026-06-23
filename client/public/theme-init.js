// Inject theme before first paint to prevent flash
(function () {
  try {
    const saved = localStorage.getItem("ps:theme");
    const isDark = saved === "dark";

    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.style.backgroundColor = isDark ? "#343541" : "#ffffff";
  } catch {
    /* empty */
  }
})();

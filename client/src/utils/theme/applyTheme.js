// Applies dark or light theme to the document root.
// Background color is set inline to prevent mobile flicker on theme switch.
export const applyTheme = (isDark) => {
  const root = document.documentElement;

  root.classList.toggle("dark", isDark);

  root.style.backgroundColor = isDark ? "#343541" : "#ffffff";
};

const initializeThemeSwitcher = () => {
  const switcherButton = document.querySelector(".switcher-btn");
  const colorSwitcher = document.querySelector(".color-switcher");

  if (!switcherButton || !colorSwitcher) {
    return () => {};
  }

  const toggleColorSwitcher = () => {
    colorSwitcher.classList.toggle("active");
  };

  switcherButton.addEventListener("click", toggleColorSwitcher);

  const savedColor = localStorage.getItem("main-color");
  if (savedColor) {
    document.documentElement.style.setProperty("--main-color", savedColor);
  }

  const colorButtons = document.querySelectorAll(".theme-buttons");
  const colorHandlers = [];

  colorButtons.forEach((color) => {
    const setColor = () => {
      const dataColor = color.getAttribute("data-color");

      if (dataColor) {
        document.documentElement.style.setProperty("--main-color", dataColor);
        localStorage.setItem("main-color", dataColor);
      }
    };

    color.addEventListener("click", setColor);
    colorHandlers.push({ color, setColor });
  });

  return () => {
    switcherButton.removeEventListener("click", toggleColorSwitcher);
    colorHandlers.forEach(({ color, setColor }) => {
      color.removeEventListener("click", setColor);
    });
  };
};

export default initializeThemeSwitcher;

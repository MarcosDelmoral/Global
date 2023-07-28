function main(params) {
  const navItems = Object.values(document.getElementsByClassName("nav-link"));
  console.log(navItems);
  navItems.forEach((element) => {
    element.addEventListener("click", () => {
      setTimeout(() => {
        document.getElementById("collapse").click();
      }, 450);
    });
  });
}

main();

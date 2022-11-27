const toggleDark = (node) => {
  node.nav.classList.toggle('nav--dark');
  node.body.classList.toggle('body--dark');
  node.togglerSun.classList.toggle('toggler-sun--dark');
  node.togglerSunBeams.classList.toggle('toggler-sun-beams--dark');
  node.textArea.classList.toggle('text-area--dark');
  node.footer.classList.toggle('footer--dark')
}

export { toggleDark };


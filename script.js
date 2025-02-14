function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
<script>
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S" || 
                      e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J" || 
                      e.key === "h" || e.key === "H" || e.key === "c" || e.key === "C")) {
        e.preventDefault(); // Block Ctrl+U, Ctrl+S, Ctrl+I, Ctrl+J, Ctrl+H, Ctrl+C
    }

    if (e.keyCode === 123) { 
        e.preventDefault(); // Block F12 (DevTools)
    }
});
</script>

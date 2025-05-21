// Columns
let $columns = document.querySelector(".columns");

// Como estamos a punto de cambiar el contenido de .columns,
// necesitamos ocultar su desbordamiento.
$columns.style.overflowY = "hidden";

// Establecer una línea de tiempo
const timeline = new ScrollTimeline({
  source: document.documentElement,
});

// Loop all eligible columns
const $column_reverse = document.querySelectorAll(".column-reverse");

$column_reverse.forEach(($column) => {
  // Invertir el orden de los elementos en columnas inversas
  $column.style.flexDirection = "column-reverse";

  // Hook Animation
  $column.animate(
    {
      transform: [
        "translateY(calc(-100% + 100vh))",
        "translateY(calc(100% - 100vh))",
      ],
    },
    {
      fill: "both",
      timeline,
    }
  );
});

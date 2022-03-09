// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Ultimate Frisbee - Home</title>
// </head>

// <body>
//     <div onClick="handleClick('verde')">verde</div>
//     <div onClick="handleClick('azul')">azul</div>
//     <input type="text" name="texto" onchange="handleOnChange(this.value)">
//     <input type="checkbox" name="texto" onchange="handleOnChange('verde')">

//     <button onclick="handleButtonClick()">boton</button>
//     <script>
//         function handleClick(valor) {
//             localStorage.setItem('color', valor)
//         }

//         function handleOnChange(evt) {
//             console.log(evt)
//             localStorage.setItem("input", evt)
//         }

//         function handleButtonClick() {
//             var valorColor = localStorage.getItem('color');
//             alert(valorColor)
//         }
//     </script>
// </body>
// </html>
function handleOnChangeShape(evt) {
  console.log(evt);
  localStorage.setItem("shape", evt);
}
function handleOnChangeColor(col) {
  console.log(col);
  localStorage.setItem("Color", col);
}

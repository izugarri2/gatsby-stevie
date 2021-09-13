//<![CDATA[
function insertar_YouTube(IDyoutube) {
var output = "<a onclick=\"window.open('https://www.youtube.com/embed/" + IDyoutube + "?autoplay=1','ayuda','resizable=no,scrollbars=no,status=no,toolbar=no,directories=no,menubar=no,resizable=no,width=640,height=400,top=350,left=300')\"><img src=\"https://img.youtube.com/vi/" + IDyoutube + "/0.jpg\"  border=\"0\"><div><img src=\"/IMAGENES/Boton-play.gif\" border=\"0\"></a></div>";
document.write (output);
}
//]]>
<!--
  function irA(menu){window.location.href = menu.options[menu.selectedIndex].value;}
  // fin de javascript -->
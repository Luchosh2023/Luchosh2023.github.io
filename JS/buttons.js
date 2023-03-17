document.getElementById('button-education').addEventListener('click', function(){
   if(document.getElementById('content-education').innerHTML.trim()==""){
    document.getElementById('content-education').innerHTML = "Nivel Primario completado en 2002, escuela Nº12, Capital Federal / Secundario cursado y finalizado en 2008, ENET Nº28 / Facultad finalizada en 2015, en UTN. Título 'Licenciado en Diseño Gráfico' "
   } else {
    document.getElementById('content-education').innerHTML = ""
   }
})

document.getElementById('button-skills').addEventListener('click', function(){
    if(document.getElementById('content-skills').innerHTML.trim()==""){
     document.getElementById('content-skills').innerHTML = "Profesionista con 5 años de experiencia en el área de marketing en busca de un puesto como estratega digital en la empresa Doremi Corp. Deseo utilizar mis habilidades de social media management, pensamiento creativo y resolución de problemas para ayudar a que Doremi alcance sus objetivos de ventas online."
    } else {
     document.getElementById('content-skills').innerHTML = ""
    }
 })

 document.getElementById('button-objects').addEventListener('click', function(){
   if(document.getElementById('content-objects').innerHTML.trim()==""){
    document.getElementById('content-objects').innerHTML = "Dar mis primeros pasos en una empresa consolidada en el área de mis estudios académicos, a la cual brindar mis talentos y con la cual crecer profesionalmente. Establecerme en una organización que me brinde estabilidad laboral y que crea en el compromiso y la formación de sus trabajadores "
   } else {
    document.getElementById('content-objects').innerHTML = ""
   }
})

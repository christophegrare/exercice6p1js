//"modulo" se retrouve dans le html avec onClick
function modulo(){
  var first = document.getElementById('premier_nombre').value;
  var second = document.getElementById('deuxieme_nombre').value;
  // si la valeur n'est pas un nombre tu fais : il faut des nombres
  if (isNaN(first) || isNaN(second)){
    alert('Il faut des nombres');
    //sinon tu me donne le reste de la division
  } else {
    //il faut un nombre > à 0 sinon il y a alert
    if(second == 0) {
      alert('Mettre un nombre supérieur à 0');
    } else {
      //avec modulo on utilise % pour trouver le reste
      var result = first % second ;
      alert(result);
    }
  }
};

(function (doc)
{
  var display = doc.getElementById('navigation');
  
 // console.log(display);
  display.addEventListener('click', function(ev)
  {
    var thatUl = ev.target.querySelector('#ul');
      //console.log(thatUl.classList);
    thatUl.classList.toggle('show');
  }, false);
}(document))

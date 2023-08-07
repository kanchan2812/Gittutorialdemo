
//QUERYSELECTOR
/*var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';*/

//QuerySelectorAll
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor='green';
}

var secondItem=document.querySelectorAll('.list-group-item:nth-child(2)');
for(var i=0;i<odd.length;i++){
secondItem.style.color='green';
}

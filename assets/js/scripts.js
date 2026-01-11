// Scripts code here
let add = document.getElementById('add');
// console.log(add);
add.addEventListener('click', function(){
  let inputVal = document.getElementById('input').value;
  let text = document.createTextNode(inputVal)
  let createLi = document.createElement('li')
      createLi.appendChild(text)

  let createItemlist = document.getElementById('itemList')
     createItemlist.appendChild(createLi)
//  createItemlist.appendChild(createLi)

   console.log(createItemlist);
 
})





// todolist'e görev ekleyen metot.
addTask = () =>{
          
    let inputValue = document.querySelector("#input").value; // input değerini alır.

    // eger input bossa
    if(inputValue === ""){

      // toast islemleri
      let option = {
        animation : true,
        delay : 2000
      };

      let toastHTMLElement = document.getElementById("mytoast");
      let toastElement = new bootstrap.Toast(toastHTMLElement,option);
      toastElement.show();

    } else { 
      let li = document.createElement("li"); // li elementi olusturur.
    
      // li elementinin içeriğini tanımlar.
      li.innerHTML = ` 

      <li class="list-group-item d-flex align-items-center mt-2" onclick="completeTask(event)">
          <span>${inputValue}</span>
        <button id="closeBtn" type="button" class="btn-close ms-auto" aria-label="Close"
        onclick="removeTask(event)"></button>
      </li>
      `;
      
      document.querySelector("#list").appendChild(li);  // ul'nin içine li'yi ekler.
      document.querySelector("#input").value = ""; // inputun içerisini temizler.
    }
  }

  // input enter ile tetiklenir.
  document.getElementById("input").addEventListener("keyup",function(event){
    if(event.keyCode === 13){
      addTask();
    }
  });

  // todolist'ten eleman silen metot.
  removeTask = (event) => {
    event.target.parentElement.remove();
  }

  // complete task
  completeTask = (event) => {
    
    // eger task bitirilmemis ise
    if(event.target.classList.contains("list-group-item-my-class-active") === false){
      
      let span = document.createElement("span"); // span tagı olusturur.
      // span tagına icon ekler.
      span.innerHTML = ` <i class="fas fa-check"></i>  
      `;

      event.target.prepend(span); // li nin icerisine bastan spani ekler. (iconu ekler.)

      event.target.classList.remove("list-group-item-my-class-inactive"); // inactive i siler.
      event.target.classList.add("list-group-item-my-class-active"); // active i ekler.

    } else {
      event.target.classList.add("list-group-item-my-class-inactive"); // inactive i siler.
      event.target.classList.remove("list-group-item-my-class-active"); // active i ekler.

      event.target.removeChild(event.target.childNodes[0]); // li icerisindeki ilk elemanı siler. (iconu siler.)
    }
  }




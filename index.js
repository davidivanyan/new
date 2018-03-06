var arr = [
            {name: "cute cat" , category : "pet"},
            {name: "sweet cake" , category : "food"},
            {name: "hot dog" , category : "food"},
            {name: "HSRP" , category : "protocols"},
            {name: "VRRP" , category : "protocols"},
            {name: "DHCP" , category : "protocols"},
            {name: "DNS" , category : "protocols"},
            {name: "Dell" , category : "computers"},
            {name: "Lenovo" , category : "computers"},
            {name: "HP" , category : "computers"}
          ]

        const list = document.getElementById('list_id');

        arr.forEach(currentElem => {
            //    list.innerHTML += "<li>" + currentElem.name  +" " +currentElem.category + "</li> ";
          list.innerHTML += `<li>${currentElem.name} ${currentElem.category}</li>`;


        });
const search = document.getElementById('code_id')
function func(x) {
  let searchArr = arr.filter(currentValue => currentValue.name.includes(x))

  let list = document.getElementById('list_id');
list.innerHTML="";
  searchArr.forEach(currentElem => {
      //    list.innerHTML += "<li>" + currentElem.name  +" " +currentElem.category + "</li> ";
    list.innerHTML += `<li>${currentElem.name} ${currentElem.category}</li>` ;})

}



let showStatus = document.getElementById('show-Status');
let status = document.getElementById('status');

showStatus.addEventListener('click', () => { 

    let json = '{ "2x2 brick mould":"warning", "3x2 brick mould":"fatal","4x2 brick mould":"good"}';
    
    let obj = JSON.parse(json);

    if(status.innerHTML ==" "){
        for (key in obj) {
        
            let p = document.createElement("p");
            
            p.innerHTML = key +" " +obj[key];
            status.appendChild(p);
           
        }
    }else {
        status.innerHTML =' '
    }
}
);


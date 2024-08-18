let myArray = [
    {
        name: 'breakFast',
        cardText: 'hhhhhhhhhhhhhhhh',
         cardImg: '',
        price: 456
    },
    {
        name: 'diner',
        cardText: 'hhhhhhhhhhhhhhhh',
         cardImg: '',
        price: 456
    },
    {
        name: 'breakFast',
        cardText: 'hhhhhhhhhhhhhhhh',
         cardImg: '',
        price: 456
    },
    {
        name: 'diner',
        cardText: 'hhhhhhhhhhhhhhhh',
         cardImg: '',
        price: 456
    },
    {
        name: 'lanuch',
        cardText: 'hhhhhhhhhhhhhhhh',
         cardImg: '',
        price: 456
    },
    {
        name: 'tea',
        cardText: 'tea, beverage produced by steeping in freshly boiled water the young leaves and leaf buds of the tea plant, Camellia sinensis. Two principal varieties are used, the small-leaved China plant (C. sinensis variety sinensis) and the large-leaved Assam plant (C. sinensis variety assamica).28-Jun-2024',
         cardImg: 'tea/download (1).jfif',
        price: '$45.600'
    },
]



function foodHeander(manuItem){
//     console.log(manuItem);
// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i].name == 'tea');
// }
console.log(manuItem)

let row = document.getElementById('row')
row.innerHTML = ''
    let fruites = myArray.map((current, index) => {
       if(current.name == manuItem){
        console.log(current.name);
        row.innerHTML += `
         
            <div class="card col-sm-12 col-md-6 co-lg-4" style="width: 18rem;">
                <img src="${current.cardImg}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${current.name}</h5>
                  <p class="card-text">${current.cardText}</p>
                  <p class="card-text">${current.price}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

        `
       }
       if(manuItem == 'all'){
        row.innerHTML +=`

        
            <div class="card col-sm-12 col-md-6 co-lg-4" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${current.name}</h5>
                  <p class="card-text">${current.cardText}</p>
                  <p class="card-text">${current.price}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

        `
       }
       
       
        // console.log(current);

    })
}
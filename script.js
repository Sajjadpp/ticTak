// let cols = document.querySelectorAll("#col");
let row = document.querySelector("#row"); // take dom of row that contains the full colms
let statusOfx = false // it checks who wants to play
let result = document.querySelector(".result") // it prints the result
let btn = document.querySelector("button") // button to rest the game
let gameOver = false // check the game is over or not
let count = 0; // count the click to identify last click means 9th click
let exp = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]] //

let clearR = ()=>{

    setTimeout(()=>{

        result.innerHTML = ""
    },3000)
}

result.innerHTML = `${localStorage.getItem("winner")} is the last winner of the game`;
clearR()


let statusOfBox = [

    {no: 1, status: null}, {no: 2, status: null}, {no: 3, status: null},

    {no: 4, status: null}, {no: 5, status: null}, {no: 6, status: null},

    {no: 7, status: null}, {no: 8, status: null}, {no: 9, status: null}
]



result.innerHTML = "thats X turn"
row.addEventListener("click",(e)=>{

   let col = e.target;
    console.log(col)
    
    let className = parseInt(col.classList.value);

    console.log(className);
    if(statusOfBox[className-1].status === null && !gameOver){
        statusOfx = !statusOfx;
        
        if(statusOfx){

            
           
            let i = document.createElement("i");
            i.classList.add("fa-close","fa")
            col.appendChild(i)
            statusOfBox[className-1].status = "X"
            count++;
            result.innerHTML = "thats O turn"
            checkStatusOfBox("X")
            
        }
        else{
        
            let i = document.createElement("i");
            i.classList.add("round")
            col.appendChild(i)  
            statusOfBox[className-1].status = "O"
            count++;
            result.innerHTML = "thats X turn"
            checkStatusOfBox("O")
        } 
        if(count === 9){

            gameOver = true
        }
    }
    
    else{
        if(gameOver){
            result.innerHTML = "the game is over"
        }
        else{
            result.innerHTML = "there is already a value"
        } 
        clearR()

        
    }
      
   
    
   
})


function checkStatusOfBox(value){

    let X = statusOfBox.filter((obj)=> obj.status === value)
    console.log(X)
    X = X.map((obj)=> obj.no);
    console.log(X)

    exp.forEach((arr)=>{

        let condition = arr.every((obj)=> X.includes(obj))

        if(condition){
            gameOver = true
            console.log("worked")
            localStorage.setItem("winner",value)
            btn.style.display = "flex"
            result.innerHTML = value +" winned the game"
            clearR()
        }

    })
    


}



btn.addEventListener("click",()=>{

    
    location.reload();
    
})
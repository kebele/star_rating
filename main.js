let rating = ""

function starmark(item){
    let count = item.id[0];
    rating = count;
    
    let subid = item.id.substring(1);

    for(let i=0; i<5; i++){
        if(i<count){
            document.getElementById((i+1)+subid).style.color="orange"
        }else{
            document.getElementById((i+1)+subid).style.color="black"
        } 
    }
}

function showRating(){
    alert(rating)
}
function starOutGrid(grid) {
    let index = check(grid)
    
    if(index){
        for(let row of grid) {
            if(!row.includes('*')){
                for (let i of index) {
                    row[i] = '*'
                }
            }else {
                star(row)
            }
        }
    }else{
        return grid
    }

    return grid
}


function check(grid){
    let stars = []
    for(let row of grid) {
        if(row.indexOf('*') >= 0){
            stars.push(row.indexOf('*')) ;
        }
    }
    if (stars) return stars
    return false;
}

function star (arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = "*"
    }
    return arr
}
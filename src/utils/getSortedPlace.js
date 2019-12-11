export const getSortedPlace = (arr, field) => {
    return arr.sort((a,b) =>{
        if (a[field] > b[field]){
            return 1;
        }
        if (a[field] < b[field]){
            return -1;
        }
        return 0;
    })

};
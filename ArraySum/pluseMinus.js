const plusMinus = (num) => {
    
    let arr = num.toString().split('').map(num => parseInt(num));
    console.log("Array 1st--->"+arr);
    if(arr.length < 2){
      return "not possible"
    }
    console.log("Array 2nd--->"+arr.slice(1));
    return plusMinusRec(arr.slice(1), arr[0]);

    function plusMinusRec(arr, sum){

        if(arr.length == 1){
            if(sum + arr[0] === 0){
                return "+";
            } else if(sum - arr[0] === 0){
                return "-";
            } else {
                return "not possible";
            }
        }
        
        let s2 = plusMinusRec(arr.slice(1), sum - arr[0]);
        
        if(s2 != "not possible"){
            return "-" + s2;
        }

        let s1 = plusMinusRec(arr.slice(1), sum + arr[0]);

    
        if(s1 != "not possible"){
            return "+" + s1;
        }

        return "not possible";

    }

}
  console.log(plusMinus(1546587));
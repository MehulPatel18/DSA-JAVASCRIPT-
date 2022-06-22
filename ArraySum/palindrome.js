function checkPelindrome(num,len) {

    let msg = "It is a Palindrome";
    for (var i = 0; i < len/2; i++) {
        console.log("element--->"+num[i]+"____"+"compair with--->"+num[len-1-i]);
        if (num[i] != num[len -1 -i]) {
            msg = "It is not a Palindrome";
        }
    }
    console.log(msg);

}

let num = ("nitin").toString();
let numlen = num.length;
checkPelindrome(num,numlen);
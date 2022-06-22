let groupAnagrams = async (arr) => {
     let map = new Map();
     await arr.forEach(e => {
          sortAlphabets(e).then(sortText => {
               // console.log("sortedText:", sortText);
               if (map.get(sortText)) {
                    sortText.toLowerCase();
                    let temp = map.get(sortText);
                    temp.push(e);
                    // console.log("Temp:", temp, " || current Map:", map);
                    map.set(sortText, temp);
               } else
                    map.set(sortText, [e]);
          });
          // console.log("Map:", map);
     });
     return map;
}

var sortAlphabets = async function(text) {
     return text.split('').sort().join('');
};

let arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(arr).then(result => {
     result.forEach(function (value, key) {
          console.log(key, " ==> ", value); 
     });
})
// Trapping Rain Water
// if you want our dri-run code than go to "DriveRunImages" directory and refered this "xyc".jpg 
/* 
    Input: arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    Output: 6
*/

function trappingRainWater (arr, len) {
    let [totalRain, left, right] = [0, arr[0], 0];

    for (let i = 1; i < len - 1; i++) {
        if (arr[i] > left)
            left = arr[i];
        
        right = arr[i];
        let j = i+1;
        while (j < len) {
            if (arr[j] > right)
                right = arr[j];
            j++;
        }

        totalRain += Math.min(left, right) - arr[i];
    }
    return totalRain;
}

// let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // output : 6
// let arr = [2, 0, 2]; // output : 2
let arr = [3, 0, 2, 0, 4]; // output : 7
let arrlen = arr.length;

console.log(trappingRainWater(arr,arrlen));

// node trappingRainWater.js
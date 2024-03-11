let num;
let message;

// 3と5の倍数:15, 3の倍数:6, 5の倍数:10, それ以外:7
const ary = [15, 6, 10, 7];

function calc(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        message = `3と5の倍数です`;
    }
    else if (num % 3 === 0) {
        message = `3の倍数です`;
    }
    else if (num % 5 === 0) {
        message = `5の倍数です`;
    }
    else {
        message = String(num)
    }
    return message
}

// 15, 6, 10, 7をnumに代入して、コンソールで表示
for (let i = 0; i < ary.length; i++) {
    num = ary[i];
    console.log(calc(num));
} 
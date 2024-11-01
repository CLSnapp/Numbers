// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    return this.data.length;
  }
  printNumbers() {
    this.data.forEach((number, index) => {
      console.log(`Number: ${number}`, `Index: ${index}`);
    });
  }
  odds() {
    const num = this.data;
    const odd = num.filter((number) => number % 2 !== 0);
    return odd;
  }
  //   let odds = [];
  //   for (let i = 0; i < this.data.length; i++) {
  //     const num = this.data[i];
  //     if (num % 2 !== 0) {
  //       odds.push(num);
  //     }
  //   }
  //   return odds;
  // }

  evens() {
    const num = this.data;
    const even = num.filter((number) => number % 2 === 0);
    return even;
  }
  //   let evens = [];
  //   for (let i = 0; i < this.data.length; i++) {
  //     const num = this.data[i];
  //     if (num % 2 === 0) {
  //       evens.push(num);
  //     }
  //   }
  //   return evens;
  // }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      const num = this.data[i];
      sum += num;
    }
    return sum;
  }

  product() {
    return this.data.reduce((product, num) => product * num, 1);
  }

  //   let product = 1; //STARTS FROM AN INITIAL VALUE OF 1 CAUSE MULTIPLYING BY 0 IS 0
  //   for (let i = 0; i < this.data.length; i++) {
  //     const num = this.data[i];
  //     product *= num;
  //   }
  //   return product;
  // }

  greaterThan(target) {
    return this.data.filter(num => num > target);
  }
  
  //   let great = [];
  //   for (let i = 0; i < this.data.length; i++) {
  //     const num = this.data[i];
  //     if (num > target) {
  //       great.push(num);
  //     }
  //   }
  //   return great;
  // }

  howMany(target) {
    return this.data.filter(num => num === target).length;
  }

//     let count = 0;
//     for (let i = 0; i < this.data.length; i++) {
//       const num = this.data[i];
//       if (num === target) {
//         count++;
//       }
//     }
//     return count;
//   }
// }
}
//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number

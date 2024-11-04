// reference 
// tránh referemnce
// C1: dùng Shallow copy (sao chép nông)
// Dùng Object.assign hoặc spread syntax (...)


// spread syntax (...)
let obj1 = { name: "John" };
let obj2 = { ...obj1 };


// Object.assign 

let obj3 = { name: "John", address: { city: "NY" } };
let obj4 = Object.assign({}, obj1);

// Thay đổi obj2.address.city
// obj2.address.city = "Los Angeles";

// console.log(obj1.address.city); // Output: "Los Angeles"


// Homeword
const shop = {
    name: 'Furniture',
    activeTime: "8am-10pm",
    categories: ['bedroom', 'kitchen', 'conference'],
    // return boolean
    isActive: function () {
        // const currentHour = new Date().getHours();

        // const times = this.activeTime.split('-'); // Tach thanh mang ['8am','10pm']
        // const openTime = times[0];  // '8am'
        // const closeTime = times[1];  // '10pm'

        // let openHour = parseInt(openTime); // convert gio thanh so nguyen
        // if (openTime.includes('pm') && openTime !== 12) openHour += 12;
        // if (openTime.includes('am') && openTime === 12) openHour = 0;

        // let closeHour = parseInt(closeTime);
        // if (closeTime.includes('pm') && closeTime !== 12) closeHour += 12;
        // if (closeTime.includes('am') && closeTime === 12) closeHour = 0;

        // console.log("Current hour: ", currentHour)
        // console.log("openHour", openHour);
        // console.log("closeHour", closeHour);

        
        // return currentHour >= openHour && currentHour <= closeHour; // Trả ra true nếu từ 8am-10pm ngược lại là false


        const currentHour = new Date().getHours();
        const times = this.activeTime.split('-');
        let openTime = times[0];
        let closeTime = times[1];

        let openHour = parseInt(openTime);
        if(openTime.includes('pm') && openTime !== 12) openHour += 12;
        if(openTime.includes('am') && openTime === 12) openHour = 0;

        let closeHour = parseInt(closeTime);
        if(closeTime.includes('pm') && closeTime !== 12) closeHour += 12;
        if(closeTime.includes('am') && closeTime === 12) closeHour = 0;

        return currentHour >= openHour && currentHour <= closeHour;



    },
    sortAlphabet: function () {
        let newArr = [...this.categories];
        let n = newArr.length;

        for(i = 0; i < n -1; i++) {
            for(j = 0; j < n - 1 - i; j++) {
                if(newArr[j] > newArr[j + 1]) {
                    let tam = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = tam;
                }
            }
        }
        return newArr;
    },

    getCategoriesAndNew: function (category) { // washroom
       let newArr = [...this.categories];
       if(!newArr.includes(category)) {
        newArr.push(category)
       }

       let n = newArr.length;
       for(i = 0; i < n -1; i++) {
        for(j = 0; j < n - 1 - i; j++) {
            if(newArr[j] > newArr[j + 1]) {
                let tam = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = tam;
            }
        }
       }

       return newArr;
    //    return newArr.sort();
    }
}

console.log(shop.isActive());
console.log(shop.sortAlphabet())
console.log(shop.getCategoriesAndNew('aashroom'))


const shop3 = {
  name: "Furniture",
  activeTime: "8am-10pm",
  categories: ["bedroom", "kitchen", "conference"],
  // return boolean
  isActive: function () {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const [openingTime, closingTime] = this.activeTime.split("-"); // Tách giá trị từ mảng: time.split(/(am|pm)/) trả về một mảng chứa hai phần tử : hour: 8 , period: pm
    
    console.log("openingTime",openingTime);
    console.log("closingTime",closingTime);

    const convertTo24Hour = function (time) {
      let [hour, period] = time.split(/(am|pm)/);

    console.log("hour",hour);
    console.log("period",period);

      hour = parseInt(hour, 10);
      if (period === "pm" && hour < 12) hour += 12;
      if (period === "am" && hour === 12) hour = 0;
      return hour;
    };

    const openHour = convertTo24Hour(openingTime);
    const closeHour = convertTo24Hour(closingTime);
    return currentHour >= openHour && currentHour < closeHour;
  },

  sortAlphabet: function () {
    return this.categories.sort();
  },

  getCategoriesAndNew: function (category) {
    // washroom
    if (!this.categories.includes(category)) {
      this.categories.push(category);
    }
    return this.sortAlphabet(); // a sorted array of categories
  },
};


console.log("isActive 3", shop3.isActive())
console.log("sortAlphabet 3", shop3.sortAlphabet())
console.log("getCategoriesAndNew 3", shop3.getCategoriesAndNew('aaaa'));


function greet() {
    console.log(`Hello, I'm ${this.name}`);
}

const person2 = { name: "Dave" };

greet.call(person2); // Kết quả: "Hello, I'm Dave"
greet.apply(person2); // Kết quả: "Hello, I'm Dave"

const greetDave = greet.bind(person2);
greetDave(); // Kết quả: "Hello, I'm Dave"

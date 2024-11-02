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
        const currentHour = new Date().getHours();

        const times = this.activeTime.split('-'); // Tach thanh mang ['8am','10pm']
        const openTime = times[0];  // '8am'
        const closeTime = times[1];  // '10pm'

        let openHour = parseInt(openTime); // convert gio thanh so nguyen
        if (openTime.includes('pm') && openTime !== 12) openHour += 12;
        if (openTime.includes('am') && openTime === 12) openHour = 0;

        let closeHour = parseInt(closeTime);
        if (closeTime.includes('pm') && closeTime !== 12) closeHour += 12;
        if (closeTime.includes('am') && closeTime === 12) closeHour = 0;

        console.log("Current hour: ", currentHour)
        console.log("openHour", openHour);
        console.log("closeHour", closeHour);

        
        return currentHour >= openHour && currentHour <= closeHour; // Trả ra true nếu từ 8am-10pm ngược lại là false
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



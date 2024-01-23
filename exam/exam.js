// [id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota','Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

//1.print all car brands
console.log('print all car brands');
carBooking.map((item)=>item[1]).forEach(car => console.log(car));
//print total numbr of cars available
console.log('print total numbr of cars available');
car=carBooking.reduce((a,b)=>a+b[5],0)
console.log(car);
//print sedan car details
console.log('print sedan car details');
car=carBooking.filter((item)=>item[3]=='Sedan')
console.log(car);
//print cars wuth price per day greter than 60
console.log('print car with price per day grete than 60');
car=carBooking.filter((item)=>item[4]>60)
console.log(car);
//print details of 'jeep wangler'
console.log('print details of jeep wangler');
car=carBooking.filter((item)=>item[2]=='Wrangler')
console.log(car);
//sort cars based on the descnding order of the price per day
console.log('sort cars based on the descnding order of the price per day');
carBooking.sort((a,b)=>b[4]-a[4])
console.log(carBooking);
//sort cars based on the ascnding order of the available cars
console.log('sort cars based on the ascnding order of the available cars');
carBooking.sort((a,b)=>a[5]-b[5])
console.log(carBooking);
//find the car most available cars
console.log('the car most available cars');
car=carBooking.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(car[1]);
//calculate the revenue if all cars are rented for today
console.log('calculate the revenue if all cars are rented for today');
car=carBooking.reduce((a,b)=>a+b[4],0)
console.log(car);
//count the numbers of sedan cars
console.log('count the number fo sedan cars');
count = 0
for (let car of carBooking)
{
    if (car[3] == 'Sedan'){
        count++
    }
}
console.log(count);
//find the car with the highest availability
console.log('car with the highest availability');
car=carBooking.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(car[1]);
//find all total number of available cars for all types
console.log('find all total number of available cars for all types');
car=carBooking.reduce((a,b)=>a+b[5],0)
console.log(car);
//find the cars with the fewest available cars
console.log('the cars with the fewest available cars');
car=carBooking.reduce((a,b)=>a[5]<b[5]?a:b)
console.log(car[1]);
//check if there any car with a price per day of exactly 55
console.log('check if there any car with a price per day of exactly 55');
car = carBooking.find(item => item[4] === 55);
console.log(car ? ` ${car[1]} Yes,it is present` : 'No car with price per day of 55 is present');










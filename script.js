console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/07_Day_Functions/07_day_functions.md
// Exercice I

// I.1 Declare a function fullName and it print out your full name.

function fullName(name){
  console.log(name)
}
fullName('Pacreau')

// I.2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function entireName(name, firstName){
  console.log(name + ' '+ firstName)
}

entireName('Pacreau', 'Téotime')

// I.3 Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers(firstNumber, secondNumber){
  console.log(firstNumber + secondNumber)
}
addNumbers(3, 5)

// I.4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width){
  console.log(length * width)
}

areaOfRectangle(20, 4)

// I.5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
  console.log(2*(length + width))
}
perimeterOfRectangle(2, 4)

// I.6 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedCalculator(distance, time){
  console.log(distance / time)
}

speedCalculator(100, 3600)

// I.7 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function BMICalculator(weight, height){
  const BMI = weight / (height * height)

  if(BMI <= 18.5){
    console.log(BMI, 'underweight')
  } else if(BMI >= 18.5 && BMI <= 24.9){
    console.log(BMI, 'normal weight')
  } else if(BMI >= 25 && BMI <= 29.9){
    console.log(BMI, 'overweight')
  } else{
    console.log(BMI, 'obese')
  }
}

BMICalculator(60, 1.75)

// I.8 Write a function called checkSeason, it takes a month parameter and returns the season:Spring or Summer.

function checkSeason(month){
  switch(month){
    case 'March':
      console.log(month, "it's spring")
    break
    case 'April': 
      console.log(month, "it's spring")
    break
    case 'June':
      console.log(month, "it's spring")
    break
    case 'July':
      console.log(month, "it's summer")
    break
    case 'August':
      console.log(month, "it's summer")
    break
    case 'September':
      console.log(month, "it's summer")
    break
  }
}

checkSeason('August')

// I.9 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array){
  for(let item of array){
    console.log(item)
  }
}

let array = ['dog', 'cat', 'bird']

printArray(array)
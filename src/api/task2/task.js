task2 ={
    firstOfTask2: function (request, response)
    {
    let Country = request.query["country"];
    let Age = request.query["age"];
    let Gender = request.query["gender"];
    let list =[
            {
                fullName:"Зарацька Вікторія Петрівна",
                gender:"ж",
                age:"25",
                country:"Україна",
                ratings:"52,82,20"
            },
            {
                fullName:"Сливка Ліліянна Юріївна",
                gender:"ж",
                age:"20",
                country:"Угорщина",
                ratings:"60,75,35"
            },
            {
                fullName:"Мельник Мирослава Іванівна",
                gender:"ж",
                age:"30",
                country:"Словаччина",
                ratings:"59,45,32"
            },
            {
                fullName:"Захаров Микола Іванович",
                gender:"ч",
                age:"27",
                country:"Україна",
                ratings:"50,80,20"
            }
    ];
    let arr = list.filter((elem) => {
        return (!Gender || Gender == elem.gender) && (!Age || Age <= elem.age) && (!Country || Country == elem.country);
    })
    response.send(arr);
    }

}
module.exports=task2;
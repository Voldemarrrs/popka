let cost = Number (prompt('Введите стоимость товара'));
let money = Number (prompt('Введите количество ваших денег'));

if(cost == money){
    alert('покупка совершена');
}
else{
    if(cost > money){
        let x = cost - money;
         alert('для покупки не хватает ' + x + 'р');
     }else{
         let y = money - cost;
         alert('Покупка совершена. Ваша сдача ' + y + 'р');
     }
}
//땅콩코딩보고 따라하기 2

let someValue: any =5;
someValue = 'hello';
someValue = true; //이렇게 상수 문자열 불린 다할 수 있는데 명시하는게 더 좋음!
//any는 최대한 자제..!



//유니언 타입

let price: number | string = 5;
price = 'free';
// price = true; // 오류!


//Type Aliases

type strOrNum = number | string;
let totalCost: number;
let orderID: strOrNum;

const calculateTotalCost = (price: strOrNum, qty: number): void =>{
    
};

const findOrderID = (customer:{customerId: strOrNum, name: string},
    preductId: strOrNum): strOrNum =>{
        return orderID;
    }

//선택적 매개변수
function sendGreeting (message: string, userName?: string): void{
    console.log(`${message}, ${userName}`);   
}

sendGreeting('hello', 'minwook');
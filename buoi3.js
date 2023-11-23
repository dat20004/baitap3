//1. Viết một hàm JavaScript để tính tổng của hai số nguyên và in ra kết quả.

//    function tong(a,b){
//        return a + b
//   }
//   console.log(tong(10,20))

//2. Tạo một hàm JavaScript để tính giá trị tuyệt đối của một số và in ra nó.

//   function giatrituyetdoi(a){
//      return Math.abs( a )
//  }
//  console.log(giatrituyetdoi(-10))

//function handleAbs(a){
///    let convertsA = a
//    if(convertsA<0){
//       return convertsA*=(-1)
//    }
//   else{
//       return convertsA
//   }
//}
//console.log(handleAbs(-2))

//3. Viết hàm JavaScript để kiểm tra xem một số có phải là số chẵn hay không, và in ra kết quả.

//   function sochan(a){
//       if(a%2===0){
//           return a
//       }
//   }
//  console.log(sochan(6))

//4. Tạo một hàm JavaScript để tính diện tích của hình chữ nhật với chiều rộng và chiều cao được truyền vào.

//   function dientich(a,b){
//       const hcn = a*b
//       return hcn
//  }
// console.log(dientich(10,20))

//  5. Viết chương trình JavaScript để chuyển đổi nhiệt độ từ độ Celsius sang độ Fahrenheit bằng cách sử dụng một hàm.
//   const celsiusToF = (celsius) =>{
//       const newTemp = celsius * 9/5+32
//      return newTemp 
//  }
//  console.log(celsiusToF(10))

//6. Tạo một hàm JavaScript để tính giai thừa của một số nguyên dương và in ra kết quả.

//function fact(a) {
// if (a === 0 || a === 1) {
//   return 1 }
//else{
//    return a*fact(a-1)
//}
//}
//console.log(fact(7))

//   7. Viết hàm JavaScript để tìm số nguyên tố trong một mảng và in ra kết quả.

//function findPrime(arr){
//    let newArr = []
//   for(let i = 0;i < arr.length; i++){
//       if(arr[i]===2||arr[i]===3||arr[i]===5||arr[i]===7){
//          newArr.push(arr[i])
//       }
//       if(arr[i] % 2 !== 0 && arr[i] % 3 !== 0 && arr[i] % 5 !==0 && arr[i] % 7 !== 0)
//       newArr.push(arr[i])
//   }
//   return newArr
//}
//console.log(findPrime([1,2,4,5,7,8,5,9]))

//   8. Tạo một hàm JavaScript để đảo ngược một chuỗi và in ra chuỗi đảo ngược.

function chuoidaonguoc(arr){
     let newText= ""
    for(let i = arr.length - 1;i>=0;i--){
        newText += arr[i]
       }
       return newText
 }
console.log(chuoidaonguoc("aloo"))
//   9. Viết chương trình JavaScript để kiểm tra xem một chuỗi có phải là chuỗi Palindrome (chuỗi đối xứng) hay không bằng cách sử dụng một hàm.

  function chuoidoixung(palindrome){
   let headText = ""
    for(let i = palindrome.length - 1 ; i >= 0 ; i--){
      headText += palindrome[i]
   }
  return headText === palindrome
}
 console.log(chuoidoixung(333))

//  10. Tạo một hàm JavaScript để tính tổng của mảng các số nguyên được truyền vào.

//  function sum(arr){
//   let newArr = 0
//   for(let i = 0 ; i < arr.length ; i++){
//       newArr += arr[i]
//   }
//   return newArr
// }
// console.log(sum([1,3,4,6,7,9]))

//  11. Viết hàm JavaScript để kiểm tra xem một số nguyên có phải là số hoàn hảo (số có tổng các ước của nó bằng chính nó) hay không và in ra kết quả.
 //     function checkhh(Number){
 //     let tong = 1
 ///         if(Number%i===0){
    //       tong+=i
 //         }
   //       if(i!=Number/i){
 //           tong+=Number/i
   //       }
 //       }
  //    return tong === Number
  //    }
 //     console.log(checkhh(6),"là số hoàn hảo")

//   12. Tạo một hàm JavaScript để tính lãi suất đơn giản cho một số tiền gửi dựa trên số tiền, lãi suất và thời gian gửi.
//     function laisuat(sotien,laisuat,thoigian){
//         let tongsotien = sotien + ((sotien*laisuat*thoigian)/100)
//          return tongsotien
//      }
//      console.log(laisuat(20000000,0.07,365))

//13. Viết hàm JavaScript để tính giá trị bình phương của một số nguyên được truyền vào và in ra kết quả.

//function binhphuong(a){
// return Math.pow(a,2);
//}
//console.log(binhphuong(7))

// 14. Tạo một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không và in ra kết quả.

//function prime(m) {
//      for(let i = 2;i<=Math.sqrt(m);i++){
 //       return m
 //    }
//}
//console.log(prime(19))

function prime(m){
 
  for(let i = 0;i < Math.sqrt(m); i++){
     if(m===1){
    return 0
  }
          if(m===2||m===3||m===5||m===7){
            return 1
             
          }
           if(m % 2 !== 0 &&m % 3 !== 0 && m % 5 !==0 && m % 7 !== 0){
       return 1
      }
} 
}
console.log(prime(5))

  //  15. Viết chương trình JavaScript để tìm số lớn nhất trong một mảng các số nguyên bằng cách sử dụng một hàm.

 // function max(arr){
 //  let n = 0
 //   for(let i = 0 ; i < arr.length ; i++){
 //       if(arr[i] > n){
  //          n = arr[i] 
  //      }
  //  }
  //  return n
 // }
//console.log(max([1,4,6,2,5,8]))




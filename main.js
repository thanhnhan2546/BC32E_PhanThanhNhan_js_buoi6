/**
Bài 1: 

Đầu vào:

Xử lý:
- Tạo biến soChan để lưu trữ số chẳng
- Tạo biến soLe để lưu trữ số lẻ
- Tạo biến bước nhảy i = 0 và tăng dần đến 99
    + Nếu i chia hết cho 2 thì lưu vào biến soChan
    + Nếu i không chia hết cho 2 thì lưu bào bien soLe

Đầu ra:
- In ra Số chẵn và Số lẻ
 */
document.getElementById('kq_Bai1').onclick = function () {
   var i = 0
   var soChan = "Số chẵn: ";
   var soLe = "Số lẻ: ";
   while(i < 100){
    if(i % 2 == 0)
        // soChan += i + "&nbsp;";
        soChan = soChan + i + "&nbsp;";
    else
       soLe += i + "&nbsp;";
       
    i++;
   }
   document.getElementById('KQ1').innerHTML = soChan + "<br>" + soLe;
}
/**
Bài 2: 

Đầu vào:

Xử lý:
- Tạo biến count = 0 đê đếm số chia hết cho 3
- Tạo biến bước nhảy i = 0 và tăng dần đến 1000
    + Nếu i chia hết cho 3 thì count sẽ + 1

Đầu ra:
- Tổng số nguyên chia hết cho 3 bé hơn 1000
 */
document.getElementById('kq_Bai2').onclick= function () {
    var i =0;
    var count = 0;
    while (i <= 1000){
        if(i % 3 == 0)
            count++;
        i++;
    }
    document.getElementById('KQ2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000 có tổng cộng : " + count + " số";
}

/**
Bài 3:

Đầu vào:

Xử lý:
- Tạo biến tổng count = 0
- Tạo biến bước nhảy i = 0
- Tạo vòng lặp cho đến khi count > 10000 (điều kiện trong while sẽ là count <= 10000)
    + biến i sẽ + 1 và tăng dần đều theo từng vòng lặp
    + biến count sẽ + i
- Kết quả sẽ là giá trị của biến i ở vòng lặp cuối cùng

Đầu ra:
- In ra số nguyen dương nhỏ nhất sao cho 1 + 2 + ... + n > 10000
 */
document.getElementById('kq_Bai3').onclick = function () {
    var i = 0;
    var count = 0;
    while (count < 10000){
        i++;
        count +=i;
        
    }
    document.getElementById('KQ3').innerHTML = "Số nguyên dương nhỏ nhất: "+ i;
}

/**
Bài 4:
 
Đầu vào:
- Số x và n

Xử lý:
- Tạo biến x và n để nhận giá trị đầu vào
- Tạo biến count = 0
- Tạo biến bước nhảy i = 1 và tăng dần đến n
    + biến count sẽ bằng count vòng lặp cũ cộng thêm x^i (x ** i)

Đầu ra:
- Tổng của biểu thức: x + x^2 + x^3 + ... x^n
    
 */

document.getElementById('kq_Bai4').onclick = function () {
    var x = Number(document.getElementById('x').value);
    var n = Number(document.getElementById('n').value);
    var i =1;
    var count = 0;
    
    while(i <= n){
        count += x ** i;
        i++;
    }
    console.log(count);
    document.getElementById('KQ4').innerHTML = "Tổng: "+ count;
}

/**
Bài 5

Đầu vào:
- Số n

Xử lý:
- Tạo biến n để nhận giá trị đầu vào
- Tạo biến giaiThua = 1
- Tạo biến i = 2 và tăng dần đến n
    + biến giaiThua sẽ bằng giaiThua ở vòng lặp đầu nhân với i

Đầu ra:
- Giai thừa của n
 */
document.getElementById('kq_Bai5').onclick = function () {
    var n = document.getElementById('n_bai5').value;

    var i =2;
    var giaiThua = 1;

    while(i <= n){
        giaiThua *= i;
        i++;
    }

    document.getElementById('KQ5').innerHTML = "Kết quả: " + giaiThua;
}

/**
 Bài 6:
 
 Đầu vào:

 Xử lý:
 - Tạo biến bước nhảy i=1 và tăng dần đến 10
    + Nếu i chia hết cho 2 (chẵn) thì sẽ tạo ra thẻ div với background màu đỏ
    + Nếu i không chia hết cho 2 (lẻ) thì sẽ tạo ra div với background màu xanh

Đầu ra:
- 10 thẻ div, nếu div ở vị trí chẵn sẽ có background màu đỏ, vị trí lẻ sẽ có background màu xanh
 */
document.getElementById('kq_Bai6').onclick = function () {
    var i = 1;
    var stringInner = "";

    while(i <= 10){
        if(i % 2 == 0)
            stringInner += '<div class= "chan" >DIV Chẵn</div>';
        else
            stringInner += '<div class= "le" >DIV Lẻ</div>';

        i++;
    }

    document.getElementById('KQ6').innerHTML = stringInner;
    changeStyle();
    
}
function changeStyle(){
    var chan = document.getElementsByClassName('chan');
    var le = document.getElementsByClassName('le');
    for(var i=0; i< chan.length; i++){
        chan[i].style.height = "30px";
        chan[i].style.padding = "4px 4px";
        chan[i].style.backgroundColor = "red";
    }
    for(var j=0; j< le.length; j++){
        le[j].style.height = "30px";
        le[j].style.padding = "4px 4px";
        le[j].style.backgroundColor = "blue";
    }
    document.getElementById('KQ6').style.color = "white";
}

/**
Bài 7

Đầu vào:
- Số n

Xử lý:
- Tạo biến n để nhận giá trị đầu vào
- Tạo biến bước nhảy i = 2 và tăng dần đến n:
    + Tạo biến j = 2 và tăng dần đến căn bậc 2 của i
    + Nếu hết vòng lặp của j mà i không chia hết cho j thì i đó là số nguyên tố
    
Đâu ra:
- Các số nguyên tố nhỏ hơn hoặc bằng n
 */

function ktSoNguyenTo (soNguyen){
    var j=2;
    var ketQua = true;
    for(j; j <= Math.sqrt(soNguyen); j++){
        if(soNguyen % j == 0){
            ketQua = false;
            break;
        }
    }

    return ketQua;
}

document.getElementById('kq_Bai7').onclick = function () {
    var n = document.getElementById('n_bai7').value;
    var i = 2;
    var ketQua = "";
    while(i <= n){
        if(ktSoNguyenTo(i))
            ketQua += i + "&nbsp;";
        
        i++;
    }
    
    document.getElementById('KQ7').innerHTML = ketQua;
}
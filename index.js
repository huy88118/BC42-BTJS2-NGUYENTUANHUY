// BÀI TẬP 1
// Lắng nghe sự kiện user click vào button Tính Lương
document.getElementById("payment").onclick  = function(){
    //B1 : Lấy giá trị của các inputs
// Lưu ý các giá trị khi lấy từ html về đều có kiểu liệu là string
// Đối với các giá trị mà ta mong muốn nó là number , ta cần thực hiện thao tác ép kiểu  bằng một cách đặt toán tử + phía trước giá trị đó , VD +"100" => 100
    let salary__oneday = +document.getElementById("salary__oneday").value;
    let number__day = +document.getElementById("number__day").value;

    // B2 Tính toán
    let paymoney = salary__oneday * number__day;

    //B3 Hiễn thị kết quả ra giao diện
    document.getElementById("pay__money").style.display = "block";
    document.getElementById("paymoney").innerHTML = "Tổng tiền lương là: " + paymoney;
}


// BÀI TẬP 2
document.getElementById("tinhtrungbinh").onclick  = function(){

    let no1 = +document.getElementById("no1").value;
    let no2 = +document.getElementById("no2").value;
    let no3 = +document.getElementById("no4").value;
    let no4 = +document.getElementById("no4").value;
    let no5 = +document.getElementById("no5").value;

    // Tính toán
    let sotrungbinh = (no1 + no2 + no3 + no4 + no5) / 5;

    //Hiển thị
    document.getElementById("tongtrungbinh").style.display = "block";
    document.getElementById("sotrungbinh").innerHTML = "Trung bình là :" + sotrungbinh;
}

//BÀI TẬP 3
document.getElementById("quydoitien").onclick  = function(){
    let usd = 23_500;
    
    let sotien = +document.getElementById("sotien").value;

    let quydoi = usd * sotien;

    document.getElementById("quydoiusd").style.display = "block";
    document.getElementById("quydoi").innerHTML = "Tổng tiền sau quy đổi là:" + quydoi;
}


//BÀI TẬP 4
document.getElementById("tinh").onclick  = function(){

    let chieudai = +document.getElementById("chieudai").value;
    let chieurong = +document.getElementById("chieurong").value;

    let dientich = chieudai * chieurong; 
    let chuvi = (chieudai + chieurong) * 2;

    document.getElementById("tinhnao").style.display = "block";
    document.getElementById("dientich").innerHTML = "Diện tích:" + dientich;
    document.getElementById("chuvi").innerHTML = "Chu vi:" + chuvi;

}

//BÀI TẬP 5 ( tính tổng 2 kí số)
// Lắng nghe sự kiện user click vào button Tính Lương
document.getElementById("tinhtong").onclick  = function(){
 //B1 : Lấy giá trị của các inputs
// Lưu ý các giá trị khi lấy từ html về đều có kiểu liệu là string
// Đối với các giá trị mà ta mong muốn nó là number , ta cần thực hiện thao tác ép kiểu  bằng một cách đặt toán tử + phía trước giá trị đó , VD +"100" => 100
    let haikiso = +document.getElementById("haikiso").value;

     // B2 Tính toán
    let m = haikiso % 10;
    haikiso = Math.floor(haikiso/10)
    let tongkiso = m + haikiso;

    //B3 Hiễn thị kết quả ra giao diện
    document.getElementById("tinhtongso").style.display = "block";
    document.getElementById("tongkiso").innerHTML = "Tổng kí số là:" + tongkiso;
}

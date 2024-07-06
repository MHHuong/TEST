var phan_so1 = {
    tu: 3,
    mau: 4
}
var phan_so2 = {
    tu: 6,
    mau : 4
}

document.write(phan_so1.tu,'/',phan_so1.mau );
var sum = function(){
    stu = phan_so1.tu +  phan_so2.tu;
    smau = phan_so1.mau;
    return stu
}
document.write(sum())
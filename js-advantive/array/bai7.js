/*
Bài 7: Viết chương trình để tính cước điện thoại bàn
cho một hộ gia đình với các thông số như sau:
Phí thuê bao bắt buộc là 25 nghìn.
600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
*/
function CaculatePhoneCall(timeCall) {
    var feeCall = 25000;
    var totalFee = 0;
    totalFee = totalFee + feeCall;
    if (timeCall > 200) {
        totalFee += (timeCall - 200) * 200 + 150 * 400 + 50 * 600;
    }
    else if (timeCall > 50) {
        totalFee += (timeCall - 50) * 400 + 50 * 600;
    }
    else {
        totalFee += timeCall * 600;
    }
    return totalFee;
}
console.log(CaculatePhoneCall(201));

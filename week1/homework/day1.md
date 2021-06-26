Bài 1.
Các hàm trên phục vụ cho 1 khái niệm gọi là NodeList, vốn có chức năng giống
với mảng, chứa các phần tử được gọi là node hay thẻ HTML:

list.foreach() - Duyệt lần lượt từng phần tử và gọi một function đối với từng phần tử đó.

list.map() - Duyệt từng phần tử, gọi 1 function đối với từng phần tử đó và cuối cùng trả về 1 mảng bao gồm tất cả các kết quả trả về từ mỗi lần gọi function đó.

list.filter() - Duyệt từng phần tử; gọi 1 function đối với từng phần tử đó, với chức năng xét từng phần tử xem có phù hợp với điều kiện đưa ra không và trả về các phần tử true hoặc false. Cuối cùng trả về 1 mảng gồm các phần tử mà được trả về giá trị true.

list.find() - Duyệt từng phần tử, gọi 1 function đối với từng phần tử đó, với chức năng xét từng phần tử xem có phù hợp với điều kiện đưa ra không. Cuối cùng trả về phần tử đầu tiên thỏa mãn điều kiện.

list.some() - Duyệt từng phần tử, gọi 1 function đối với từng phần tử và trả về giá trị true hoặc false nếu có bất kì phần tử nào thỏa mãn điều kiện đưa ra bởi function đó.

list.reduce() - Duyệt từng phần tử, gọi 1 function có chức năng thực hiện các phép tính giữa các phần tử với nhau và cuối cùng trả về 1 giá trị duy nhất là kết quả của các phép tính trên.

Bai 2.
MVC là viết tắt của 3 từ Model - View - Controller.

Model là nơi lưu trữ toàn bộ dữ liệu của ứng dụng. Model giao tiếp thông qua Controller.

View là phần giao diện hiển thị với người dùng. Người dùng sẽ tương tác và gửi yêu cầu với ứng dụng thôq qua View. View sẽ gửi các yêu cầu của người dùng lên Controller.

Controller là nơi xử lí các yêu cầu của người dùng được gửi qua View. Controller sẽ lấy những dữ liệu cần thiết từ Model và gửi về View, View sẽ tiếp tục chuyển đến tay người dùng.
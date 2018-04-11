Git Hook commit-msg
Là một đoạn script được chạy mỗi khi người dùng commit
Script này sẽ kiểm tra format các commit message trước khi được push lên
Cài đặt bằng cách chép file commit-msg vào thư mục .git/hooks (mặc định là thư mục ẩn)

#Format message:
<Tiêu đề message>
<Blank space>
<Nội dung message>

* Tiêu đề message phải bắt đầu bằng một trong các từ Thêm\Xóa\Sửa lỗi\Cập nhật, không quá 60 kí tự
  Quá 60 kí tự, github sẽ phải thêm nút show more cho tiêu đề vì quá dài
* Nội dung message phải cách tiêu đề message một dòng trống, nội dung gồm nhiều dòng mỗi dòng không quá 75 kí tự

#Ví dụ 2 (không hợp lệ):
Them trang chu

#Ví dụ 2 (hợp lệ):
Thêm trang chủ

#Ví dụ 3 (không hợp lệ):
Cập nhật trang chủ
 - Thay đổi màu thanh menu

#Ví dụ 4 (hợp lệ):
Cập nhật trang chủ

 - Thay đổi màu thanh menu

#Ví dụ 5 (không hợp lệ do quá 60 kí tự):
Sửa lỗi không hiển thị modal khi click vào license ở bước đăng ký ở lần thứ 2

#Ví dụ 4 (hợp lệ):
Sửa lỗi không hiển thị modal ở trang đăng ký

- Lỗi xảy ra khi người dùng click lần thứ 2 vào license.
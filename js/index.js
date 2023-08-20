//Ex1
 document.getElementById('date').addEventListener('submit', function (note){
    note.preventDefault();
    date();
 });
    function date () {
        const dateInput = new Date(document.getElementById('dateInput').value);
        var day = dateInput.getDate() + 1;
        var month = dateInput.getMonth() + 1;
        var year = dateInput.getFullYear();
        let result;

        var resultNice, resultTen;

        if (day === 1) {
            var ex1Month = month - 1;
            var ex1Year = year;
            if (ex1Month === 0) {
                ex1Month = 12;
                ex1Year--;
            }
            var dayMonth = new Date(ex1Month, ex1Year, 0).getDate();
            resultNice = dayMonth + '/' + ex1Month + '/' + ex1Year;
            resultTen = '2/' + month + '/' + year;
        } else if (day === new Date(year, month, 0).getDate()) {
            resultNice = (day - 1) + '/' + month + '/' + year;
            var nextMonth = month + 1;
            var nextYear = year;
            if (nextMonth === 13) {
                nextMonth = 1;
                nextYear++;
            }
            resultNice = '1/' + nextMonth + '/' + nextYear;
        } else {
            resultNice = (day - 1) + '/' + month + '/' + year;
            resultTen = (day + 1) + '/' + month + '/' + year;
        }
        document.getElementById('result').innerText =
            ` Ngày hôm sau là: ${resultNice}, Ngày hôm trước là: ${resultTen}`;
    }

//Ex2

document.getElementById('day').addEventListener('submit', function(note){
    note.preventDefault();
    day();
});
    function day() {
        const dayInput = new Date(document.getElementById('dayInput').value);
        var b2Month = dayInput.getMonth() + 1;
        var b2Year = dayInput.getFullYear();
        let result2;


        if (b2Month == 1 || b2Month == 3 || b2Month == 5 || b2Month == 7 || b2Month == 8 || b2Month == 10 || b2Month == 12) {
            day2 = "31";
        }
        else if (b2Month == 2) {
            if (b2Year % 4 == 0) {
                b2Day = '29'
            }
            else {
                b2Day = '28';
            }
        }
        else {
            b2Day = '30'
        }
        document.getElementById('result2').innerText =
            `Tháng ${b2Month} Năm ${b2Year} có ${b2Day} ngày.`
    }

//Ex 3

document.getElementById('Num').addEventListener('submit', function(note){
    note.preventDefault();
    Num();
});
    function Num() {
        const numInput = document.getElementById('numInput').value;
        const number1 = Math.floor(numInput / 100);
        const number2 = Math.floor((numInput % 100) / 10);
        const number3 = numInput % 10;

        let NumResult = '';
        console.log('number3: ', number3);

        if (number1 === 1) {
            NumResult += 'Một trăm ';
        } else if (number1 === 2) {
            NumResult += 'Hai trăm ';
        } else if (number1 === 3) {
            NumResult += 'Ba trăm ';
        } else if (number1 === 4) {
            NumResult += 'Bốn trăm ';
        } else if (number1 === 5) {
            NumResult += 'Năm trăm ';
        } else if (number1 === 6) {
            NumResult += 'Sáu trăm ';
        } else if (number1 === 7) {
            NumResult += 'Bảy trăm ';
        } else if (number1 === 8) {
            NumResult += 'Tám trăm ';
        } else if (number1 === 9) {
            NumResult += 'Chín trăm ';
        }

        if (number2 === 0) {
            if (number3 !== 0 || (number1 === 0 && number2 === 0)) {
                NumResult += 'lẻ ';
            }
        } else if (number2 === 1) {
            NumResult += 'mười ';
        } else if (number2 === 2) {
            NumResult += 'hai mươi ';
        } else if (number2 === 3) {
            NumResult += 'ba mươi ';
        } else if (number2 === 4) {
            NumResult += 'bốn mươi ';
        } else if (number2 === 5) {
            NumResult += 'năm mươi ';
        } else if (number2 === 6) {
            NumResult += 'sáu mươi ';
        } else if (number2 === 7) {
            NumResult += 'bảy mươi ';
        } else if (number2 === 8) {
            NumResult += 'tám mươi ';
        } else if (number2 === 9) {
            NumResult += 'chín mươi ';
        }
        if (number2 !== 1) {
            if (number3 === 0) {
                if (number2 === 0 || number1 === 0) {
                    NumResult += '';
                }
            } else if (number3 === 1) {
                if (number2 !== 1) {
                    NumResult += 'mốt';
                }
                else {
                    NumResult += 'một';
                }
            } else if (number3 === 2) {
                NumResult += 'hai';
            } else if (number3 === 3) {
                NumResult += 'ba';
            } else if (number3 === 4) {
                NumResult += 'bốn';
            } else if (number3 === 5) {
                NumResult += 'lăm';
            } else if (number3 === 6) {
                NumResult += 'sáu';
            } else if (number3 === 7) {
                NumResult += 'bảy';
            } else if (number3 === 8) {
                NumResult += 'tám';
            } else if (number3 === 9) {
                NumResult += 'chín';
            }
        }
        else {
            if (number3 === 1) {
                NumResult += 'một';
            } else if (number3 === 2) {
                NumResult += 'hai';
            } else if (number3 === 3) {
                NumResult += 'ba';
            } else if (number3 === 4) {
                NumResult += 'bốn';
            } else if (number3 === 5) {
                NumResult += 'lăm';
            } else if (number3 === 6) {
                NumResult += 'sáu';
            } else if (number3 === 7) {
                NumResult += 'bảy';
            } else if (number3 === 8) {
                NumResult += 'tám';
            } else if (number3 === 9) {
                NumResult += 'chín';
            }
        }
        document.getElementById('result3').innerText = `${numInput} đọc là: ${NumResult}`
    }

//Ex4

document.getElementById('coordinates').addEventListener('submit', function (note){
    note.preventDefault();
    coordinates();
});
    function coordinates () {
        const natesSV1x = +document.getElementById("coordinates xsv1").value;
        const natesSV1y = +document.getElementById("coordinates ysv1").value;
        const natesSV2x = +document.getElementById("coordinates xsv2").value;
        const natesSV2y = +document.getElementById("coordinates ysv2").value;
        const natesSV3x = +document.getElementById("coordinates xsv3").value;
        const natesSV3y = +document.getElementById("coordinates ysv3").value;
        const xTruong = 7;
        const yTruong = 14;
        let result4;

        const sinhVien1 = { x: natesSV1x, y: natesSV1y };
        const sinhVien2 = { x: natesSV2x, y: natesSV2y };
        const sinhVien3 = { x: natesSV3x, y: natesSV3y };
        const truongHoc = { x: xTruong, y: yTruong };

        const khoangCachSV1 = tinhKhoangCach(sinhVien1, truongHoc);
        const khoangCachSV2 = tinhKhoangCach(sinhVien2, truongHoc);
        const khoangCachSV3 = tinhKhoangCach(sinhVien3, truongHoc);

        function tinhKhoangCach(diem1, diem2) {
            const DistanceX = diem1.x - diem2.x;
            const  DistanceY = diem1.y - diem2.y;
            return Math.sqrt(DistanceX * DistanceX + DistanceY * DistanceY);
        }
        if (khoangCachSV1 == khoangCachSV2 && khoangCachSV2 == khoangCachSV3) {
            sinhVienXaNhat = "Khoảng cách 3 sinh viên bằng nhau";
        }
        else {
            if (khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3) {
                sinhVienXaNhat = "Sinh viên thứ nhất xa trường nhất";
            }
            else if (khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3) {
                sinhVienXaNhat = "Sinh viên thứ hai xa trường nhất";
            }
            else {
                sinhVienXaNhat = "Sinh viên thứ ba xa trường nhất";
            }
        }
        document.getElementById('result4').innerText = ` ${sinhVienXaNhat}`;
    }
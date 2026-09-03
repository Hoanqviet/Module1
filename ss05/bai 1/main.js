function xuLyDiem() {
    const diemLy = Number(document.getElementById("lyInput").value);
    const diemHoa = Number(document.getElementById("hoaInput").value);
    const diemSinh = Number(document.getElementById("sinhInput").value);

    const output = document.getElementById("hienThiKetQua");

    if (!diemLy && diemLy !== 0 || !diemHoa && diemHoa !== 0 || !diemSinh && diemSinh !== 0) {
        output.textContent = "Bạn phải nhập đủ cả 3 môn.";
        return;
    }

    const hopLe = [diemLy, diemHoa, diemSinh].every(d => d >= 0 && d <= 10);
    if (!hopLe) {
        output.textContent = "Điểm chỉ được nằm trong khoảng 0 đến 10.";
        return;
    }

    const tongDiem = diemLy + diemHoa + diemSinh;
    const diemTB = (tongDiem / 3).toFixed(2);

    output.innerHTML = `
        <h3>Kết quả </h3>
        <p>Lý: <b>${diemLy}</b></p>
        <p>Hóa: <b>${diemHoa}</b></p>
        <p>Sinh: <b>${diemSinh}</b></p>
        <hr>
        <p>Tổng điểm: <b>${tongDiem}</b></p>
        <p>Điểm trung bình: <b>${diemTB}</b></p>
    `;
}

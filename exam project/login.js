function login() {
    var accountType = document.getElementById("accountType").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (accountType === "admin") {
        // Check admin credentials
        if (username === "admin" && password === "adminpass") {
            window.location.href = "admin.html";
        } else {
            alert("Invalid admin credentials");
        }
    } else if (accountType === "student") {
        // Check student credentials
        if (username === "student" && password === "studentpass") {
            window.location.href = "student.html";
        } else {
            alert("Invalid student credentials");
        }
    }
}

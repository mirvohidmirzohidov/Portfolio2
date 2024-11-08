$(document).ready(function () {
    $(".logIn").click(function () {
        $(".blackCurtain").css({ display: "flex" })
    })

    const loginForm = $("#loginForm");

    loginForm.on("submit", function (e) {
        e.preventDefault();

        const username = $("#username").val();
        const password = $("#password").val();

        if (username === "mirvohid" && password === "mirvohid2412") {
            window.location.href = "../admin.html";
            console.log("ishladi");

        } else {
            alert("Login yoki parolda xatolik bor");
        }
    });
    let homeTitle = localStorage.getItem("homeTitle");
    let specialization1 = localStorage.getItem("specialization1");
    let specialization2 = localStorage.getItem("specialization2");
    let specialization3 = localStorage.getItem("specialization3");

    if (homeTitle) $(".briefInformationTitle").text(homeTitle);
    if (specialization1) $(".specializingItem1").text(specialization1);
    if (specialization2) $(".specializingItem2").text(specialization2);
    if (specialization3) $(".specializingItem3").text(specialization3);
});


$(document).ready(function () {
    $(".admin-home form").on("submit", function (e) {
        e.preventDefault();
    
        const homeTitle = $("#homeTitle").val();
        const specialization1 = $(".specialization1").val();
        const specialization2 = $(".specialization2").val();
        const specialization3 = $(".specialization3").val();
    
        localStorage.setItem("homeTitle", homeTitle);
        localStorage.setItem("specialization1", specialization1);
        localStorage.setItem("specialization2", specialization2);
        localStorage.setItem("specialization3", specialization3);
    
        window.location.href = "index.html";
    });
});


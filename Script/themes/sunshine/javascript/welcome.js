function Wo_ResendCode() {
    var e = $("#confirm-user-id").val(),
        n = $("#phone-num").val();
    $("#re-send").hide(), Wo_SetTimer(), $.post(Wo_Ajax_Requests_File() + "?f=resned_code", { user_id: e, phone_number: n }, function(e) { 200 == e.status || alert(e.errors) })
}

function Wo_SetTimer() {
    $("#hideMsg h2 span").text("60"), $("#hideMsg").fadeIn("fast");
    var e = $("#hideMsg h2 span").text(),
        n = setInterval(function() { $("#hideMsg h2 span").text(--e), 0 == e && $("#hideMsg").fadeOut("fast", function() { clearInterval(n), $("#re-send").fadeIn("fast") }) }, 1e3)
}

function AnimateUsers(e, n) { e.not(":animated").css({ opacity: 1 }).effect(n, { origin: ["middle", "center"], from: { width: e.width() / 2, height: e.height() / 2 }, percent: 100, easing: "easeInCirc" }, 800) }
current_width = $(window).width(), $(function() { current_width > 920 && setTimeout(function() { AnimateUsers($(".image-1"), "bounce"), AnimateUsers($(".image-2"), "bounce"), AnimateUsers($(".image-3"), "bounce"), AnimateUsers($(".image-4"), "bounce"), AnimateUsers($(".image-5"), "bounce"), AnimateUsers($(".image-6"), "bounce"), AnimateUsers($(".image-7"), "bounce"), AnimateUsers($(".image-8"), "bounce") }, 500) });
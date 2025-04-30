$(document).ready(function () {
    // Show all images on load
    $(".gallery-item").hide().fadeIn(1000);

    $(".filter-btn").click(function () {
        var filter = $(this).attr("data-filter");

        // Active button highlight
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Filter logic with fade
        if (filter === "all") {
            $(".gallery-item").fadeOut(200).fadeIn(400);
        } else {
            $(".gallery-item").fadeOut(200);
            $("." + filter).delay(200).fadeIn(400);
        }
    });
});

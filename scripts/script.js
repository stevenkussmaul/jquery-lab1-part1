"use strict";

$(document).ready(() => {
    $(".form").hide();

    $(document).on("click", ".table", (event) => {

        $(".form").show();

        $(event.target)
            .removeClass("table")
            .addClass("reserved");
    });

    $(document).on("click", ".save-button", (event) => {
        $(".form").hide();
    });

    $(".table").on("mouseover",(event) => {
        $(event.target).addClass("hover");
    });
    $(".table").on("mouseleave", (event) => {
        $(event.target).removeClass("hover");

    });

});
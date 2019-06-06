/// <reference path="jquery.js" />

$(document).ready(function(){

    $("#btnOpen").on("click",function(){

        console.log("btn Open Click");

        $("#favDialog").show();

    });


    $("#btnCancel").on("click",function(){

        $("#favDialog").hide();

    });


});
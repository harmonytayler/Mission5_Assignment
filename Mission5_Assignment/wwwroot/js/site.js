$("#formSubmit").click(function () {
    var hours = parseFloat($("#hours").val());
    if (hours <= 0) {
        alert("Please enter a positive number.");
    }
    else {
        var finalPrice = $("#hours").val() * $("#price").val();
        $("#output").text("Total Price: $" + finalPrice.toFixed(2));
        $("#output").addClass("visible");
    }
})
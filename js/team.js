$(document).ready(() => {
  $.getJSON("./js/employees.json", function (data) {
    var employees = "<h2>Our Employees</h2>";
    $.each(data, function (key, value) {
      employees += '<div class="employee">';
      employees += "<h3>" + value.Name + "</h2>";
      employees += "<p>" + value.Title + " - " + value.Department + "</p>";
      employees += "<p>" + value.Bio + "</p>";
      employees += "</div>";
    });
    $("#employee-list").append(employees);

    // jQuery function to add styles to employee divs
    $(".employee").css({
      margin: "20px 100px",
      padding: "10px",
      border: "1px solid #ccc",
      "border-radius": "5px",
    });

    $(".employee p").css("font-style", "italic");

    // jQuery function to add styles to employee names
    $("h3").css({ margin: "0px 0px 5px 0px" });

    $("h2").css("text-align", "center");

    $(".employee").hover(
      function () {
        $(this).css("background-color", "#000");
      },
      function () {
        $(this).css("background-color", "");
      }
    );
  });

 
});

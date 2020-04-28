var agenda = [];
agenda = JSON.parse(localStorage.getItem("agenda"));
if (agenda == null) {
    agenda = [];
}

$(document).ready(function () {
    var currentTime = moment().format('dddd MMMM Do ');
    $("#currentDay").text(currentTime);
    //this adds the coloring of the row based on time of day
    $(".time-block").each(function () {
        rownum = Number($(this).attr("value")) + 9;
        currentHour = Number(moment().format("k"));
        if (currentHour == rownum) {
            $(this).addClass("present");
        } else if (currentHour < rownum) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })
    // this is a for loop that populates the calendar
    // with agendas from the agenda array
    $(".time-block").each(function (index) {
        $(this).find("textarea").text(agenda[index]);
    })
})

$('body').on("click", ".saveBtn", function () {
    agenda[$(this).parent().parent().attr("value")] = 
    ($(this).parent().find("textarea").val());
    localStorage.setItem("agenda", JSON.stringify(agenda));
})
/**
 * Created by tomkarho on 11.11.2016.
 */
(function ($, moment) {
    /*date formats*/
    var ymd = "Y-M-D";

    /*properties*/
    var startDateField;
    var endDateField;
    var sprintCountField;
    var daysPerSprintField;
    var generateYearField;
    var generateWeekField;

    var totalDays;
    var numberOfSprints;
    var daysPerSprint;

    /*methods*/
    var generateSprint = function (startDate, endDate, sprintNumber) {


        if(generateYearField.prop('checked')) {
            console.log("Generating with year")
        }

        if(generateWeekField.prop('checked')) {
            console.log("Generating with week")
        }
    };

    var generateSprints = function () {
        var startDate = moment(startDateField.val());
        var finalEndDate = moment(endDateField.val());
        var endDate;

        for (var i = 0; i < numberOfSprints; i++) {
            // new sprint start on the next day

            if (finalEndDate.diff(startDate, "days") < daysPerSprint) {
                endDate = finalEndDate;
            } else {
                endDate = moment(moment(startDate).add(daysPerSprint, "days").subtract(1, "days"));
            }

            generateSprint(startDate, endDate, (i + 1));

            startDate = moment(moment(endDate).add(1, "days"));
        }
    };

    var updateSprintCount = function () {
        var startDate = moment(startDateField.val());
        var endDate = moment(endDateField.val());

        totalDays = endDate.diff(startDate, "days");
        daysPerSprint = daysPerSprintField.val();
        var overflowDays = totalDays % daysPerSprint;

        numberOfSprints = parseInt(Math.floor(totalDays / daysPerSprint));

        if (overflowDays > 0) {
            numberOfSprints++;
        }

        sprintCountField.html(numberOfSprints);
    };

    var initializeDateFields = function () {
        startDateField = $("#startDate");
        startDateField.val(moment().format(ymd));

        endDateField = $("#endDate");
        endDateField.val(moment().add(7, "days").format(ymd));

        $(".datePicker").datepicker({
            firstDay: 1, //monday
            dateFormat: "yy-mm-dd" // 2016-11-01
        }).on("change", updateSprintCount);
    };

    var initialize = function () {
        initializeDateFields();

        sprintCountField = $("#sprintCountField");
        daysPerSprintField = $("#daysInSprintField");
        daysPerSprintField.on("change", updateSprintCount);
        $("#submitButton").on("click", generateSprints);
        generateYearField = $("#generateYearField");
        generateWeekField = $("#generateWeekField");

        updateSprintCount();
    };

    $(document).ready(initialize);
})(jQuery, moment);
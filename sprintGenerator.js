/**
 * Created by tomkarho on 11.11.2016.
 */
(function ($, moment) {
    /*date formats*/
    var ymd = "Y-M-D";

    /*properties*/
    var startDateField;
    var endDateField;

    /*methods*/

    var initializeDateFields = function () {
        startDateField = $("#startDate");
        startDateField.val(moment().format(ymd));

        endDateField = $("#endDate");
        endDateField.val(moment().add(7, "days").format(ymd));

        $(".datePicker").datepicker({
            firstDay: 1, //monday
            dateFormat: "yy-mm-dd"
        });
    };

    var initialize = function () {
        initializeDateFields();
    };

    $(document).ready(initialize);
})(jQuery, moment);
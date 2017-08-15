/**
 * Created by HAITHEM on 14/08/2017.
 */

var numbers = {
    init: function(){

        $(".tofixed").each(function () {
            var my_number = ($(this).val() == '') ? 0 : parseFloat($(this).val());
            $(this).val(my_number.toFixed(3));
        });
    }
};

 

$('.progress-bar').css('width', "0%");
let current_state = 0;

$(":button").click(function(){
    if(this.classList.contains("b1")){
        current_state += 1;
         $('.progress-bar').css('width', current_state + "%");
    };
    if(this.classList.contains("b2")){
        current_state += 3;
        $('.progress-bar').css('width', current_state + "%");
    };
    if(this.classList.contains("b3")){
        current_state += 7;
        $('.progress-bar').css('width', current_state + "%");
    };
    if(current_state >= 100 || this.classList.contains("reset")){
        current_state = 0;
        $('.progress-bar').css('width', current_state + "%");
    };
    $(".progress-bar").text(current_state + "%");
});
$("#yes").click(function () {
    Swal.fire({
        title: 'Haa Haaaa Haaaaa!',
        text: 'I Love You Too',
        imageUrl: 'assets/img/im.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
    })
})
let go=1;
$("#no").hover(function () {
    if(go===1){

        $("#no").css('top',"389px");
        $("#no").css('left',"500px");
        go=2;
    }else if (go===2){
        $("#no").css('top',"389px");
        $("#no").css('left',"900px");
        go=3;
    }else if (go===3){
        $("#no").css('top',"389px");
        $("#no").css('left',"150px");
        go=4;
    }else if (go===4){
        $("#no").css('top',"389px");
        $("#no").css('left',"700px");
        go=1;
    }


});

$("#no").click(function () {
    Swal.fire({
        title: 'Oppps!',
        text: 'Ok,but i love you',
        imageUrl: 'assets/img/im.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
    })
});
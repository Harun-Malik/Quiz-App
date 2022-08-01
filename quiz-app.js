$(document).ready(function(){

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",function(data,status){
for(let i = 0;i<data.length;i++){
$("#box-1").append(`<div id=Q${data[i].id}><h2 class="question">Q${i+1}.${data[i].question}</h2></div>`);
for(let j = 0;j<data[i].options.length;j++){
$("#Q"+data[i].id).append(`<input type=radio id=${data[i].id}${j} name=ans${i} value=${j+1}><label for=${data[i].id}${j}>${data[i].options[j]}</label></input><br>`);
}

}
$("#btn").click(function(){
    let score = 0;
    for(let i=0;i<data.length;i++){
        let option = $(`input[name=ans${i}]`);
        for(let j=0;j<option.length;j++){
            if(option[j].checked && option[j].value==data[i].answer){
                score++;
            }
            
        }

    }$("#score").html(score);
})
})

});



$(function(){
    const iname=$('#name');
    const iage=$('#age');
    const icity=$('#city');
    const submit=$('#submit');
    const div=$('#add');
    submit.click(function(){
        console.log("clicked");
        $.post(
            '/initial/add/person',
            {name:iname.val(),age:iage.val(),city:icity.val(),},
            function(data){
                div.append(data);
            }
        )
    })
})
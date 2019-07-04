$(function(){
    const table=$('#maintable')
    $.get(
        '/initial',
        function(data){
            for(let i of data){
                table.append(`
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.city}</td>
                </tr>
                `)
            }
        }
    )
})
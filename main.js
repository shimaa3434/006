//api_key= "563492ad6f91700001000001993f7f897afd4622a540a524ddc5f9b8";


var form= $('#myform');
var photos;
var photo;
$('#result').empty();
form.submit(function(e){
    e.preventDefault();
    var text= $('#search').val;
    var url= `https://api.pexels.com/v1/search?query=${text}`;
    $.ajax({
        beforeSend : function(xhr){
            xhr.setRequestHeader('Authorization', "563492ad6f91700001000001993f7f897afd4622a540a524ddc5f9b8")
        },
        method : 'GET',
        url : url,
        success : function(data){
            photos = data.photos;
            for(var i= 0; i <photos.length; i++){
                photo = `<img src= '${photos[i].src.original}'/>`;
                $('#result').append(photo);
            };
        },

    })
});


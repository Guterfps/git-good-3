/*$.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
    console.log(result.items[0].volumeInfo.description)
})

const useData= function(data) {
  console.log(data);
}
$.ajax({
  method: "GET",
  url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
  success: useData
})
$("button").click(function(){
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, text, error) {
        console.log(text);
    }
}); 
})
const fetch=function(queryType,queryValue){
$.get("https://www.googleapis.com/books/v1/volumes?q="+queryType+":"+queryValue,function(result){
const arr=[result.items[0].volumeInfo.authors[0],result.items[0].volumeInfo.title,result.items[0].volumeInfo.industryIdentifiers[0].identifier]
arr.forEach(element => {
  console.log(element)
});
console.log(result)
})
}
fetch("title", "The Wise Man's Fears")*/

$("button").click(function () {
  $("div").empty()
  const xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+$("input").val()+"&api_key=98eaXXEKWpiCJjQCu1JnWhnwvLTiABUP");
  xhr.done(function (data) {
    console.log("success got data", data);

    $("div").append("<iframe src=" + data.data[0].embed_url + "></iframe>")
  });
})


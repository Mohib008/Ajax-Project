$("#getBtn").click(function(){
    $.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .done(function(data){
      console.log(data);
    })
  .fail(function(){
      console.log("ERROR!");
    })
});

$("#postBtn").click(function(){
  $.post('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
  .done(function(data){
  console.log(data);
  })
  .fail(function(){
  console.log("ERROR!");
  })
})

$("#getJSONBtn").click(function(){
  $.getJSON('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("there is Problems!");
  })

})

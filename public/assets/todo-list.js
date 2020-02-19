$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};
      console.log("posting is on action")

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      console.log("deleteing is on action")
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});

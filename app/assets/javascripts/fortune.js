$(function() {
  $("form#new_fortune").submit(function(event) {
    event.preventDefault();
    var newFortuneContent = $('#fortune_content').val();
    var newFortune = {
      fortune: {
        content: newFortuneContent
      }
    };

    var request = $.ajax({
      method: "POST",
      data: newFortune,
      url: "/api/fortunes.json"
    });

    request.done(function() {
      var html = "<div class='callout success'>" +
          newFortuneContent +
        "</div>";

      $("div.fortunes").append(html);
      $('#fortune_content').val("");
    });
  });

  var id;
  var element;

  $(".button_to").on("click", function(event) {
    event.preventDefault();
    id = event.target.id;
    element = event.target;

    var requestData = {
      method: "DELETE",
      url: 'api/fortunes/' + id
    };

  var request = $.ajax(requestData);

  request.done(function() {
    $(element).parent().parent().remove();
    alert("That shitty fortune has been removed");
  });

})

});

$(function(){
    function buildHTML(message){
      if ( message.image ) {
        var html =
             `<div class="message-list__info">
               <p class="message-list__info__user-name">${message.user_name}</p>
               <p class="message-list__info__date">${message.created_at}</pp>
             </div>
             <div class="message-list__message">
               <p class="message-list__message__content">${message.content}</p>
             </div>
             <div class="message-list__messaage">
               <img class="message-list__messaage__image" src="${message.image}" >
             </div>`
        return html;
      } else {
        var html =    
             `<div class="message-list__info">
               <p class="message-list__info__user-name">${message.user_name}</p>
               <p class="message-list__info__date">${message.created_at}</p>
             </div>
             <div class="message-list__message">
               <p class="message-list__message__content">${message.content}</p>
             </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message-list').append(html);
      $('.new_message')[0].reset();
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('#form-submit').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })
});



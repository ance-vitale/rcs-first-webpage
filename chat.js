$("#header_container").load("parts/header.html");

$("#submit_message").click(function () {

    var message = $("#message").val();

    $("#message").val("");

    $.get("chat-messages.html", function(chatMessageString) {

        var $chatMessage = $(chatMessageString);
        var $messageContent = $chatMessage.find(".message-content");
        $messageContent.text(message);

        $(".messages-container").append($chatMessage);
    });
});
var giphyOG = ["Human", "Cat", "Dog", "Bird"]



function displayGif(name) {


    var animal = "dTBF7A4G32ooNK3VqHRYa8HNW1NdFFyC"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + animal + "&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        var results = response.data
        console.log(results)
        for (var i = 0; i < results.length; i++) {
            var gifURL = results[i].images.original.url
            console.log(results.length)
            console.log(results)
            var gif = $("<img>")
            var p = $("<p class='ratings'>" + results[i].rating + "</p>")
            gif.attr("src", gifURL)
            $("#gif").append(gif)
            $("#gif").append(p)


        }
    });

}




function addBtn() {

    giphyOG.push($("#giphy-input").val().trim());
    btnshown();
}


$(document).ready(function () {
    console.log("testttt")
    btnshown();
    $("#submit").on("click", function () {
        event.preventDefault();
        addBtn()
        $("#giphy-input").val('');

    })
    $(document).on("click", ".new-button", function () {
        $("#gif-inputbox").empty();
        displayGif($(this).text());
        console.log("test")

    })


})



function btnshown() {
    $("#buttons-view").empty();
    console.log(giphyOG.length)
    for (var i = 0; i < giphyOG.length; i++) {
        var btn = $("<button>");
        btn.addClass("new-button")
        btn.text(giphyOG[i]);
        $("#buttons-view").append(btn);
        console.log(giphyOG[i])
    }




}











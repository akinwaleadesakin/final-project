function initListeners() {
    $("a").click(function(e){
        
        let aID = e.currentTarget.id;
        MODEL.changePageContent(aID);
    });
}


$(document).ready(function() {
    initListeners();
    MODEL.changePageContent("home");
});
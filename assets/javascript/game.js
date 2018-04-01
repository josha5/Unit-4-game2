$(document).ready(function() {
    console.log("Document Ready");
    let guileHealth = 130;
    let kenHealth = 150;
    let blankaHealth = 110;
    let ryuHealth = 180;
    $("#kenHealth").html(kenHealth);
    $("#ryuHealth").html(ryuHealth);
    $("#blankaHealth").html(blankaHealth);
    $("#guileHealth").html(guileHealth);

    const pickCharacter = function() {
        let characterArr = ["#ken", "#ryu", "blanka", "guile"];
        $("button").on("click", function() {
            if(this.id === "ken") {
                $("#kenContainer").appendTo("#yourCharacter");
                characterArr.splice(0, 1);
                console.log(characterArr);
            } else if(this.id ==="ryu") {
                $("#ryuContainer").appendTo("#yourCharacter");
            } else if(this.id ==="guile") {
                $("#guileContainer").appendTo("#yourCharacter");
            } else if(this.id ==="blanka") {
                $("#blankaContainer").appendTo("#yourCharacter");
            }

            const addToEnemy = function(arr) {

            } 
        });
    }
    pickCharacter();

 
});
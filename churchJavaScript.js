// Values used in the navigation functions below
pair_value = 1;
article_1_value = 1;
article_2_value = 2;
div0_value = 0;
div1_value = 1;
div2_value = 2;

// The "currently variable" keeps track of whether I'm currently showing the 50 first words, or the whole article.
currently = 0;

//The div_next and div_previous functions are navigation buttons which will prevent the user from moving on unless all of the questions have been answered
function div_next() {
    var checkRadio1 = document.querySelector(
        'input[name="pair' + pair_value + '_sim"]:checked');
    var checkRadio2 = document.querySelector(
        'input[name="familiarity_article_' + article_1_value +'"]:checked');
    var checkRadio3 = document.querySelector(
        'input[name="familiarity_article_' + article_2_value + '"]:checked');
    var checkRadio4 = document.querySelector(
        'input[name="confidence_pair_' + pair_value + '"]:checked');

    if (checkRadio1 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio2 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio3 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio4 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else {
        if (currently === 1) {
            show_more();
        }
        var x = document.getElementById("myDIV" + div1_value);
        var y = document.getElementById("myDIV" + div2_value);
        x.style.display = "none";
        y.style.display = "block";
        document.documentElement.scrollTop = 0;
        pair_value = pair_value + 1;
        article_1_value = article_1_value + 2;
        article_2_value = article_2_value + 2;
        div0_value = div0_value + 1;
        div1_value = div1_value + 1;
        div2_value = div2_value + 1;
        currently = 0;
    }
}

// Navigate back
function div_previous() {
    if (currently === 1) {
        show_more();
    }
    var x = document.getElementById("myDIV" + div1_value);
    var y = document.getElementById("myDIV" + div0_value);
    x.style.display = "none";
    y.style.display = "block";
    document.documentElement.scrollTop = 0;
    pair_value = pair_value - 1;
    article_1_value = article_1_value - 2;
    article_2_value = article_2_value - 2;
    div0_value = div0_value - 1;
    div1_value = div1_value - 1;
    div2_value = div2_value - 1;
    currently = 0;
}

// Consent form -> Study
function start_study() {
    var x = document.getElementById("frontPage");
    var y = document.getElementById("myDIV1");
    x.style.display = "none";
    y.style.display = "block";
    document.documentElement.scrollTop = 0;
}

// Sumbit button prolific_id
function demo_final() {
  var select_1 = document.getElementById('age');
  var value_1 = select_1.options[select_1.selectedIndex].value;
  var select_2 = document.getElementById('gender');
  var value_2 = select_2.options[select_2.selectedIndex].value;
  var select_3 = document.getElementById('education');
  var value_3 = select_3.options[select_3.selectedIndex].value;
  var select_4 = document.getElementById('use_of_newspapers2');
  var value_4 = select_4.options[select_4.selectedIndex].value;
  
  if (value_1 === "" || value_2 === "" || value_3 === "" || value_4 === "") {
    alert("You have to answer all the questions on this page in order to continue")
  } else {
    var x = document.getElementById("demo");
    var y = document.getElementById("thankYou");
    x.style.display = "none";
    y.style.display = "block";
    document.documentElement.scrollTop = 0; 
    $.ajax({
      url: atob('aHR0cHM6Ly9hcGkuYXBpc3ByZWFkc2hlZXRzLmNvbS9kYXRhL1NtN0pQWXA3amFaY3R6V0Iv'),
      type: 'post',
      data: $(".myForm").serializeArray(),
    });
    $.ajax({
      url: atob('aHR0cHM6Ly9hcGkuYXBpc3ByZWFkc2hlZXRzLmNvbS9kYXRhL1M2bVlDaFozSUxBR0loS1Qv'),
      type: 'post',
      data: $("#idForm").serializeArray(),
    });
  }
}

// Navigation from the demographics section back to the information cue usage section
function demo_previous(){
    var x = document.getElementById("demo");
    var y = document.getElementById("informationCue");
    x.style.display = "none";
    y.style.display = "block";
    document.documentElement.scrollTop = 0; 
}

// Navigation button from article pair 13 to the information cues section
function to_cues() {
    var checkRadio1 = document.querySelector(
        'input[name="pair' + pair_value + '_sim"]:checked');
    var checkRadio2 = document.querySelector(
        'input[name="familiarity_article_' + article_1_value +'"]:checked');
    var checkRadio3 = document.querySelector(
        'input[name="familiarity_article_' + article_2_value + '"]:checked');
    var checkRadio4 = document.querySelector(
        'input[name="confidence_pair_' + pair_value + '"]:checked');
    if (checkRadio1 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio2 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio3 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else if (checkRadio4 == null) {
        alert("You have to answer all the questions on this page in order to continue");
    } else {
        if (currently === 1) {
            show_more();
        }
        var x = document.getElementById("myDIV13");
        var y = document.getElementById("informationCue");
        x.style.display = "none";
        y.style.display = "block";
        currently = 0;
        document.documentElement.scrollTop = 0;
}
}


// Navigation from the information cue usage section to article pair 13
function cues_previous() {
    var x = document.getElementById("informationCue");
    var y = document.getElementById("myDIV13");
    x.style.display = "none";
    y.style.display = "block";
    document.documentElement.scrollTop = 0;    
}

// Navigation from the information cue usage section to the demographics section
function cues_next () {
    var checkRadio1 = document.querySelector(
        'input[name="cue_subcategory"]:checked');
    var checkRadio2 = document.querySelector(
        'input[name="cue_title"]:checked');
    var checkRadio3 = document.querySelector(
        'input[name="cue_subheading"]:checked');
    var checkRadio4 = document.querySelector(
        'input[name="cue_image"]:checked');  
    var checkRadio5 = document.querySelector(
        'input[name="cue_author"]:checked');
    var checkRadio6 = document.querySelector(
        'input[name="cue_date"]:checked');
    var checkRadio7 = document.querySelector(
        'input[name="cue_bodytext"]:checked');
    if (checkRadio1 == null || checkRadio2 == null || checkRadio3 == null || checkRadio4 == null || checkRadio5 == null || checkRadio6 == null || checkRadio7 == null) {
        alert("You have to answer all the questions on this page in order to continue")
    } else {
        var x = document.getElementById("informationCue");
        var y = document.getElementById("demo");
        x.style.display = "none";
        y.style.display = "block";
        document.documentElement.scrollTop = 0;         
    }

 
}


// Show more/less text
function show_more() {
  if (currently === 0) {
    if (pair_value < 7) {
      document.getElementById("article_main" + article_1_value).innerHTML = fullText[article_1_value - 1];
      document.getElementById("article_main" + article_2_value).innerHTML = fullText[article_2_value - 1];
      currently = 1;
      document.getElementById("showMoreLess" + article_1_value).innerHTML = "Show less";
      document.getElementById("showMoreLess" + article_2_value).innerHTML = "Show less";
    } else {
      document.getElementById("article_main" + article_1_value).innerHTML = fullText[article_1_value - 3];
      document.getElementById("article_main" + article_2_value).innerHTML = fullText[article_2_value - 3];
      currently = 1;
      document.getElementById("showMoreLess" + article_1_value).innerHTML = "Show less";
      document.getElementById("showMoreLess" + article_2_value).innerHTML = "Show less";
    }
  } else {
    if (pair_value < 7) {
      document.getElementById("article_main" + article_1_value).innerHTML = fiftyFirst[article_1_value - 1];
      document.getElementById("article_main" + article_2_value).innerHTML = fiftyFirst[article_2_value - 1];
      currently = 0;
      document.getElementById("showMoreLess" + article_1_value).innerHTML = "Show more";
      document.getElementById("showMoreLess" + article_2_value).innerHTML = "Show more";
    } else {
      document.getElementById("article_main" + article_1_value).innerHTML = fiftyFirst[article_1_value - 3];
      document.getElementById("article_main" + article_2_value).innerHTML = fiftyFirst[article_2_value - 3];
      currently = 0;
      document.getElementById("showMoreLess" + article_1_value).innerHTML = "Show more";
      document.getElementById("showMoreLess" + article_2_value).innerHTML = "Show more";
    }
  }
}

function myFunction() {
  return "";
}


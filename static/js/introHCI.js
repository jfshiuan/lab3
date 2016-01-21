'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	$("#testjs").click(function(e) {
 		$('.jumbotron h1').text("You have pushed my button.");
 		$("#testjs").text("blabla");
 		$(".jumbotron p").addClass("active");
 	});

 	$("#submitBtn").click(updateProject);



	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}



function updateProject(e) {
 var projectID = $('#project').val();
 $(projectID).animate({
  width: $('#width').val()
});

 var newText = $('#description').val();
 $(projectID + " .project-description").text(newText);
}


function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
  e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);


    var image = $(this).find("img");


    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    var descriptionText = $(this).find("p").text();
    if (description.length == 0) {
    	$(containingProject).append("<div class='project-description'><p>"+descriptionText+"</p></div>");
    } else {
    	$(description).fadeToggle();
      $(image).fadeToggle();
    }
  }
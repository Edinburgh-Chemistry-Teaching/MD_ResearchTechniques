function addFeedback(link, imgFile) {
    // Get all elements with id matching 'toc_*'
    var lasth2Element = document.getElementsByTagName('h2')[document.getElementsByTagName('h2').length - 1];

    // Get the maximum number of the id
    var maxNumber = lasth2Element.id.match(/\d+$/)[0];
    maxNumber = parseInt(maxNumber);

    // Create new elements
    var newDiv = document.createElement("div");
    var newH2 = document.createElement("h2");
    var newP1 = document.createElement("p");
    var newP2 = document.createElement("p");
    var imgFig = document.createElement("figure");
    // var imgP: HTMLParagraphElement = document.createElement("p");
    var newA = document.createElement("a");
    var newImg = document.createElement("img");

    // Set attributes and content
    newDiv.className = "box";
    newH2.id = "toc_" + (maxNumber + 1);
    // newH2.className = 'enum';// Set id based on the maximum number
    newH2.textContent = "Feedback";
    newP1.textContent = "We would like to ask you to give us regular feedback on this course and the session. This is the second time we are" +
        " running the course and your feedback will help us improve it.";
    newP2.textContent = "Please fill in this ";
    newP3 = document.createElement("p");
    newA.href = link;
    newA.alt = "link to feedback form";
    newA.target="_blank";
    newA.textContent = "feedback form";
    newImg.alt = "feedback QR code";
    newImg.src = imgFile;
    newImg.width = "200";
    newP3.textContent = "Thank you!";
    newP3.style = "text-align: center;font-weight: bold;font-size: 2em;color: #041E42;";


    // Append elements
    imgFig.appendChild(newImg);
    newP2.appendChild(newA);
    newP2.appendChild(document.createTextNode(" by clicking the link or use your phone to scan the code:\n"));
    newP2.appendChild(imgFig);
    newDiv.appendChild(newH2);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newP3);

    // Append new div to the end of the body
    document.body.appendChild(newDiv);
}

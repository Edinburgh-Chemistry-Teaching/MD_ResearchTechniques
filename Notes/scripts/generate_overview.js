
function numToLetter(number){
  let result = '';
  number = number - 1;
  do {
    const letter = String.fromCharCode(65 + (number % 26));
    result = letter + result;
    number = Math.floor(number / 26) - 1;
  } while (number >= 0)
  return result;
}


function generateOverview() {
    var toc = document.createElement('p');
    toc.id = 'toc';
    toc.style.fontSize = '18px';
    toc.style.fontWeight = 'normal';
    toc.style.marginLeft = '20px';
    toc.style.marginTop = '0';
    toc.style.lineHeight = '1.5';
    toc.style.textAlign = 'left';

    var h2Elements = document.getElementsByTagName('h2');
    for (var i = 0; i < h2Elements.length; i++) {
        if (h2Elements[i].id.startsWith('toc_')) {
            var tocItem = document.createElement('a');
            tocItem.href = '#' + h2Elements[i].id;
            var idNumber = h2Elements[i].id.match(/\d+$/)[0];
            tocItem.innerText = idNumber + '. ' + h2Elements[i].innerText;
            toc.appendChild(tocItem);
            toc.appendChild(document.createElement('br'));
        }
    }
    var hboxElements = document.getElementsByClassName('hbox');
    if (hboxElements.length !== 0) {
        var questions = document.createElement('h3');
        questions.innerText = 'Questions';
        questions.id = 'questions';
        var question_paragraph = document.createElement('p');
        question_paragraph.style.fontSize = '16px';
        question_paragraph.style.fontWeight = 'normal';
        question_paragraph.style.marginLeft = '20px';
        question_paragraph.style.marginTop = '0';
        question_paragraph.style.lineHeight = '1.5';
        var questionCounter = 0;
        // let taskCounter = new AlphanumericCounter();
        for (var i = 0; i < hboxElements.length; i++) {
            var h3Elements = hboxElements[i].getElementsByTagName('h3');
            for (var j = 0; j < h3Elements.length; j++) {
                var questionItem = document.createElement('a');
                var beforeContent = window.getComputedStyle(h3Elements[j], '::before').getPropertyValue('content');
                beforeContent = beforeContent.replace(/^"(.*)"$/, '$1');
                questionItem.href = '#' + h3Elements[j].id;
                questionItem.style.alignContent = 'left';
                questionItem.style.textAlign = 'left';
                if (beforeContent.match("Question") != null) {
                    questionCounter++;
                    var idNumber = h3Elements[j].id.replaceAll("_", " ");
                    questionItem.innerText = "Question" + ' ' + questionCounter + ": " + idNumber;
                    question_paragraph.appendChild(questionItem)
                    question_paragraph.appendChild(document.createElement('br'));
                }
            }
        }
        toc.appendChild(questions);
        questions.appendChild(question_paragraph);
    }
    var bboxElements = document.getElementsByClassName('bbox');
    if (bboxElements.length !== 0) {
        var tasks = document.createElement('h3');
        tasks.innerText = 'Tasks';
        tasks.id = 'tasks';
        var task_paragraph = document.createElement('p');
        task_paragraph.style.fontSize = '16px';
        task_paragraph.style.fontWeight = 'normal';
        task_paragraph.style.marginLeft = '20px';
        task_paragraph.style.marginTop = '0';
        task_paragraph.style.lineHeight = '1.5';
        var taskCounter = 0;

        for (var i = 0; i < bboxElements.length; i++) {
            var h3Elements = bboxElements[i].getElementsByTagName('h3');
            for (var j = 0; j < h3Elements.length; j++) {
                var taskItem = document.createElement('a');
                var beforeContent = window.getComputedStyle(h3Elements[j], '::before').getPropertyValue('content');
                beforeContent = beforeContent.replace(/^"(.*)"$/, '$1'); // Remove quotes
                taskItem.href = '#' + h3Elements[j].id;
                taskItem.style.alignContent = 'left';
                taskItem.style.textAlign = 'left';
                if (beforeContent.match("Task") != null) {
                    taskCounter++;
                    // taskCounter.increment();
                    var idNumber = h3Elements[j].id.replaceAll("_", " ");
                    taskItem.innerText = "Task" + ' ' + taskCounter + ": " + idNumber; // Use "Task" as a string
                    task_paragraph.appendChild(taskItem);
                    task_paragraph.appendChild(document.createElement('br'));
                }
            }
        }
        toc.appendChild(tasks);
        tasks.appendChild(task_paragraph);
    }
    var tboxElements = document.getElementsByClassName('tbox');
    if (tboxElements.length !== 0) {
        var projects = document.createElement('h3');
        projects.innerText = 'Projects';
        projects.id = 'projects';
        var project_paragraph = document.createElement('p');
        project_paragraph.style.fontSize = '18px';
        project_paragraph.style.fontWeight = 'normal';
        project_paragraph.style.marginLeft = '20px';
        project_paragraph.style.marginTop = '0';
        project_paragraph.style.lineHeight = '1.5';
        project_paragraph.style.textAlign = 'left';

        var projectCounter = 0;
        for (var i = 0; i < tboxElements.length; i++) {
            var h3Elements = tboxElements[i].getElementsByTagName('h3');
            for (var j = 0; j < h3Elements.length; j++) {
                var projectItem = document.createElement('a');
                var beforeContent = window.getComputedStyle(h3Elements[j], '::before').getPropertyValue('content');
                beforeContent = beforeContent.replace(/^"(.*)"$/, '$1'); // Remove quotes
                projectItem.href = '#' + h3Elements[j].id;
                projectItem.style.textAlign = 'left';
                if (beforeContent.match("Project") != null) {
                    projectCounter++;
                    var idNumber = h3Elements[j].id.replaceAll("_", " ");
                    projectItem.innerText = "Project" + ' ' + numToLetter(projectCounter) + ": " + idNumber; // Use "Task" as a string
                    project_paragraph.appendChild(projectItem);
                    project_paragraph.appendChild(document.createElement('br'));
                }
            }
        }
        toc.appendChild(projects);
        projects.appendChild(project_paragraph);
    }
    var overviewElement = document.getElementById('overview');
    overviewElement.parentNode.insertBefore(toc, overviewElement.nextSibling);
}

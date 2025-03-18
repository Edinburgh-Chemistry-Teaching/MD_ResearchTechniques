function generateHeader() {
    // Function to fetch file data and return as text
    function fetchData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}`);
                }
                return response.text();
            });
    }

    // Fetch both the editors and developers data
    Promise.all([
        fetchData('../scripts/edited_s3_protein.txt'),
        fetchData('../scripts/developed_s3_protein.txt')
    ])
    .then(([editorsData, developersData]) => {
        let editors = editorsData.split('\n').filter(line => line.trim() !== '');
        let developers = developersData.split('\n').filter(line => line.trim() !== '');

        let oldDiv = document.getElementById('title');
        let title = oldDiv.textContent;

        let div = document.createElement('div');
        div.className = 'box';

        let h1 = document.createElement('h1');
        h1.id = 'title';
        h1.textContent = title;
        div.appendChild(h1);

        let pContact = document.createElement('p');
        pContact.innerHTML = '<strong>Contact:</strong><br/> Dr Valentina Erastova (<a' +
            ' href="mailto:valentina.erastova@ed.ac.uk">valentina.erastova@ed.ac.uk</a>),<br/> University of Edinburgh';
        div.appendChild(pContact);

        let pDevelopers = document.createElement('p');
        pDevelopers.innerHTML = '<strong>Developed by:</strong>';
        div.appendChild(pDevelopers);

        let ulDevelopers = document.createElement('ul');
        developers.forEach(developer => {
            ulDevelopers.innerHTML += `<li>${developer}</li>`;
        });
        div.appendChild(ulDevelopers);

        let pEditors = document.createElement('p');
        pEditors.innerHTML = '<strong>Edited by:</strong>';
        div.appendChild(pEditors);

        let ulEditors = document.createElement('ul');
        editors.forEach(editor => {
            ulEditors.innerHTML += `<li>${editor}</li>`;
        });
        div.appendChild(ulEditors);

        oldDiv.parentNode.replaceChild(div, oldDiv);
    }).catch(error => console.error('Error:', error));

}

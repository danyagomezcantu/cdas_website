document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      title: "Project Title 1",
      description: "This is a brief description of Project 1.",
      img: "images/placeholder.jpg",
      researchers: [
        {
          name: "Student Name 1",
          role: "Role / Brief Bio 1",
          img: "images/placeholder.jpg"
        },
        {
          name: "Student Name 2",
          role: "Role / Brief Bio 2",
          img: "images/placeholder.jpg"
        }
      ]
    },
    {
      title: "Project Title 2",
      description: "This is a brief description of Project 2.",
      img: "images/placeholder.jpg",
      researchers: [
        {
          name: "Student Name 3",
          role: "Role / Brief Bio 3",
          img: "images/placeholder.jpg"
        },
        {
          name: "Student Name 4",
          role: "Role / Brief Bio 4",
          img: "images/placeholder.jpg"
        }
      ]
    }
  ];

  const projectContainer = document.getElementById('projectContainer');

  projects.forEach((project, index) => {
    const projectCard = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${project.img}">
            <span class="card-title">${project.title}</span>
          </div>
          <div class="card-content">
            <p>${project.description}</p>
          </div>
          <div class="card-action">
            <a href="#projectModal${index}" class="modal-trigger">View Researchers</a>
          </div>
        </div>
      </div>

      <div id="projectModal${index}" class="modal">
        <div class="modal-content">
          <h4>${project.title} Researchers</h4>
          ${project.researchers.map(researcher => `
            <div class="card horizontal">
              <div class="card-image">
                <img src="${researcher.img}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h5>${researcher.name}</h5>
                  <p>${researcher.role}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    `;

    projectContainer.innerHTML += projectCard;
  });

  // Initialize Materialize components
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
});

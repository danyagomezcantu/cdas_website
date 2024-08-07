document.addEventListener('DOMContentLoaded', function() {
    const projects = [
      {
        title: "Project Title 1",
        description: "This is a brief description of Project 1.",
        img: "placeholder.jpg",
        researchers: [
          {
            name: "Student Name 1",
            role: "Role / Brief Bio 1",
            img: "placeholder.jpg"
          },
          {
            name: "Student Name 2",
            role: "Role / Brief Bio 2",
            img: "placeholder.jpg"
          }
        ]
      },
      {
        title: "Project Title 2",
        description: "This is a brief description of Project 2.",
        img: "placeholder.jpg",
        researchers: [
          {
            name: "Student Name 3",
            role: "Role / Brief Bio 3",
            img: "placeholder.jpg"
          },
          {
            name: "Student Name 4",
            role: "Role / Brief Bio 4",
            img: "placeholder.jpg"
          }
        ]
      }
    ];
  
    const projectContainer = document.getElementById('projectContainer');
  
    projects.forEach((project, index) => {
      const projectCard = `
        <div class="col-md-4">
          <div class="card">
            <img src="${project.img}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <button type="button" class="btn btn-dark-green" data-toggle="modal" data-target="#projectModal${index}">View Researchers</button>
            </div>
          </div>
        </div>
  
        <div class="modal fade" id="projectModal${index}" tabindex="-1" aria-labelledby="projectModalLabel${index}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="projectModalLabel${index}">Researchers for ${project.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ${project.researchers.map(researcher => `
                  <div class="card mb-3">
                    <img src="${researcher.img}" class="card-img-top" alt="${researcher.name}">
                    <div class="card-body">
                      <h5 class="card-title">${researcher.name}</h5>
                      <p class="card-text">${researcher.role}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
  
      projectContainer.innerHTML += projectCard;
    });
  });
  
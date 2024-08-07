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
  const peopleContainer = document.getElementById('peopleContainer');
  const publicationsContainer = document.getElementById('publicationsContainer');
  const eventsContainer = document.getElementById('eventsContainer');

  if (projectContainer) {
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

    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  }

  if (peopleContainer) {
    const people = [
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
    ];

    people.forEach(person => {
      const personCard = `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-image">
              <img src="${person.img}">
            </div>
            <div class="card-content">
              <h5>${person.name}</h5>
              <p>${person.role}</p>
            </div>
          </div>
        </div>
      `;

      peopleContainer.innerHTML += personCard;
    });
  }

  if (publicationsContainer) {
    const publications = [
      {
        title: "Publication Title 1",
        description: "Brief description of Publication 1.",
        link: "#"
      },
      {
        title: "Publication Title 2",
        description: "Brief description of Publication 2.",
        link: "#"
      }
    ];

    publications.forEach(publication => {
      const publicationCard = `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-content">
              <h5>${publication.title}</h5>
              <p>${publication.description}</p>
            </div>
            <div class="card-action">
              <a href="${publication.link}" target="_blank">Read More</a>
            </div>
          </div>
        </div>
      `;

      publicationsContainer.innerHTML += publicationCard;
    });
  }

  if (eventsContainer) {
    const events = [
      {
        title: "Event Title 1",
        description: "Brief description of Event 1.",
        date: "Date 1"
      },
      {
        title: "Event Title 2",
        description: "Brief description of Event 2.",
        date: "Date 2"
      }
    ];

    events.forEach(event => {
      const eventCard = `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-content">
              <h5>${event.title}</h5>
              <p>${event.description}</p>
              <p>${event.date}</p>
            </div>
          </div>
        </div>
      `;

      eventsContainer.innerHTML += eventCard;
    });
  }

  // Language toggle functionality
  function toggleLanguage() {
    const currentLang = this.innerText;
    const newLang = currentLang === 'ES' ? 'EN' : 'ES';
    this.innerText = newLang;

    const elements = document.querySelectorAll('.lang');
    elements.forEach(el => {
      const text = el.dataset[newLang.toLowerCase()];
      if (text) {
        el.innerText = text;
      }
    });
  }

  document.getElementById('toggle-lang').addEventListener('click', toggleLanguage);
  document.getElementById('toggle-lang-mobile').addEventListener('click', toggleLanguage);
});

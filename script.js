window.onload = () => {
    const content = [];

    const aboutLink = document.getElementsByClassName('about')[0];
    const aboutContent = document.getElementsByClassName('content about')[0];
    content.push(aboutContent);
    const expLink = document.getElementsByClassName('experience')[0];
    const expContent = document.getElementsByClassName('content experience')[0];
    content.push(expContent);
    const projectsLink = document.getElementsByClassName('projects')[0];
    const projectsContent = document.getElementsByClassName('content projects')[0];
    content.push(projectsContent);
    const contactLink = document.getElementsByClassName('contact')[0];
    const contactContent = document.getElementsByClassName('content contact')[0];
    content.push(contactContent);

    let turnEverythingOff = () => {
        for(let i = 0; i < content.length; i++) {
            content[i].classList.remove('active');
        }
    };

    aboutLink.addEventListener('click', () => {
        turnEverythingOff();
        aboutContent.classList.toggle('active');
    });

    expLink.addEventListener('click', () => {
        turnEverythingOff();
        expContent.classList.toggle('active');
    });

    projectsLink.addEventListener('click', () => {
        turnEverythingOff();
        projectsContent.classList.toggle('active');
    });

    contactLink.addEventListener('click', () => {
        turnEverythingOff();
        contactContent.classList.toggle('active');
    });
}

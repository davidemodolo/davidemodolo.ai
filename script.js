//import projects_json from './projects.json';
// log the projects_json length to the console
const projects = projects_json.length;

// same for the courses_json
import courses_json from './courses.json' assert { type: 'json' };
const exams = courses_json.length;


function sendEmail() {
    const email = 'dott.modolo@gmail.com';

    if (typeof screen.orientation !== 'undefined') {
        //alert(`My email is: ${email}`)

    } else {
        const subject = 'Found your site';
        const emailBody = 'Minimum RAL = 40k';
        document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    }

}


const div_projects = document.querySelector('.project-list');
for (let i = 0; i < projects; i++) {
    /*const htmlvalue = `<h2>Progetto ${i}</h2><br>
    <div class= \"desc-container\">
        <div class = \"desc\">
            <p>desc</p> 
        </div>
        <div class = \"imgs\">
            <p>imgs</p>
        </div>
    </div>
`*/
    var htmlvalue = `Progetto ${i}<br>Descrizione`
    const prj = document.createElement('div');
    const prj_name = projects_json[i]['project'];
    prj.classList.add('project');
    //prj.style.backgroundColor = '#00FF00'
    const htmlvalue = `${prj_name}<br>Descrizione`
    prj.innerHTML = htmlvalue;

    // add project description from json to another internal div
    const prj_desc = document.createElement('div');
    prj_desc.classList.add('project-desc');
    prj_desc.innerHTML = projects_json[i]['description'];
    prj.appendChild(prj_desc);

    // add github link to a button
    const prj_link = document.createElement('a');
    prj_link.classList.add('project-link');
    prj_link.href = projects_json[i]['link'];
    prj_link.innerHTML = 'Github';
    prj.appendChild(prj_link);

    // add a button to download the file specified in the json
    const prj_file = document.createElement('a');
    prj_file.classList.add('project-file');
    prj_file.href = projects_json[i]['file'];
    prj_file.innerHTML = 'File';
    prj.appendChild(prj_file);

    // add a scrollable list of pictures from the json
    const prj_pics = document.createElement('div');
    prj_pics.classList.add('project-pics');
    const pics = projects_json[i]['pics'];
    for (let j = 0; j < pics.length; j++) {
        const pic = document.createElement('img');
        pic.classList.add('project-pic');
        pic.src = pics[j];
        prj_pics.appendChild(pic);
    }
    prj.appendChild(prj_pics);
    



    prj.addEventListener('click', function() { console.log(prj_name) });

    div_projects.appendChild(prj);
}



const div_courses = document.querySelector('.courses-list');
for (let i = 0; i < courses; i++) {
    var course_name = courses_json[i]['course'];

    const course = document.createElement('div');
    course_name = courses_json[i]['course'];
    const progress = courses_json[i]['progression'];
    // show the progress bar
    const progress_bar = document.createElement('div');
    // what is classlist?
    progress_bar.classList.add('progress-bar');
    progress_bar.style.width = `${progress}%`;
    progress_bar.innerHTML = `${progress}%`;
    // add a button to start the exam
    const start_exam = document.createElement('button');
    start_exam.classList.add('start-exam');
    start_exam.innerHTML = 'Start Exam';
    start_exam.addEventListener('click', function() { console.log(course_name) });
    // add a button to see the exam
    const see_exam = document.createElement('button');
    see_exam.classList.add('see-exam');
    see_exam.innerHTML = 'See Exam';
    see_exam.addEventListener('click', function() { console.log(course_name) });
    // add a button to see the exam
    const see_results = document.createElement('button');
    see_results.classList.add('see-results');
    see_results.innerHTML = 'See Results';
    see_results.addEventListener('click', function() { console.log(course_name) });
    // append all the elements to the course div
    course.appendChild(progress_bar);
    course.appendChild(start_exam);
    course.appendChild(see_exam);
    course.appendChild(see_results);
    // append the course div to the exam-list div
    div_courses.appendChild(course);

}






    /*const exm_name = courses_json[i]['course'];
    exm.classList.add('exam');
    exm.innerHTML = `${exm_name}<br>Descrizione`;
    exm.addEventListener('click', function() { console.log(exm_name) });
    div_exam.appendChild(exm);*/

import projects_json from './projects.json' assert { type: 'json' };
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
window.mobileCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    if (!check)
        document.getElementById('container').style.flexDirection = 'row';


    return check;
};


const div_projects = document.querySelector('.project-list');
for (let i = 0; i < projects; i++) {
    const prj = document.createElement('div');
    const prj_name = projects_json[i]['project'];
    prj.classList.add('project');
    //prj.style.backgroundColor = '#00FF00'
    const htmlvalue = `${prj_name}<br>Descrizione`
    prj.innerHTML = htmlvalue;
    prj.addEventListener('click', function() { console.log(prj_name) });
    div_projects.appendChild(prj);
}



const div_exam = document.querySelector('.exam-list');
for (let i = 0; i < exams; i++) {

    const course = document.createElement('div');
    const course_name = courses_json[i]['course'];
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
    div_exam.appendChild(course);

}






    /*const exm_name = courses_json[i]['course'];
    exm.classList.add('exam');
    exm.innerHTML = `${exm_name}<br>Descrizione`;
    exm.addEventListener('click', function() { console.log(exm_name) });
    div_exam.appendChild(exm);*/

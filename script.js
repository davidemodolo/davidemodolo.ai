import projects_json from './projects.json' assert { type: 'json' };
const projects = projects_json.length;

import courses_json from './courses.json' assert { type: 'json' };
const courses = courses_json.length;


const div_projects = document.querySelector('.project-list');
for (let i = 0; i < projects; i++) {
    const prj = document.createElement('div');
    prj.classList.add('project');

    const prj_name = projects_json[i]['project'];
    prj.innerHTML = prj_name;

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
    const course_name = courses_json[i]['course'];
    const course = document.createElement('div');
    course.classList.add('course');
    course.innerHTML = course_name;
    // add progress bar from json
    const course_progress = document.createElement('div');
    course_progress.classList.add('course-progress');

    const progress_value = courses_json[i]['progress'];
    course_progress.style.width = progress_value+'%';
    course_progress.innerHTML = progress_value+'%';
    // set color of progress bar based on progress
    if (progress_value < 35) {
        course_progress.style.backgroundColor = '#53B2E8';
    } else if (progress_value < 75) {
        course_progress.style.backgroundColor = '#53E8BB';
    } else {
        course_progress.style.backgroundColor = '#53E859';
    }
    course.appendChild(course_progress);

    div_courses.appendChild(course);

}

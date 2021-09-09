let profileImage = document.querySelector('#profileImage');
let profileNavbarCard = document.querySelector('.profile-navbar-card');

profileImage.onclick = () => {
    profileNavbarCard.classList.toggle('active');
}

window.onscroll = () => {
    profileNavbarCard.classList.remove('active');
}
fuoye = {
    science : {
        biochemistry : {
            level_100 : {
                first: ["BCH 101", "BCH 103", "BCH 105", "BCH 107", "BCH 109","BCH 311"],
                second: ["BCH 102", "BCH 104", "BCH 106", "BCH 108", "BCH 110"]
            },
            level_200 : {
                first: ["BCH 201", "BCH 203", "BCH 205", "BCH 207", "BCH 209"],
                second: ["BCH 202", "BCH 204", "BCH 206", "BCH 208", "BCH 210"]
            },
            level_300 : {
                first: ["BCH 301", "BCH 303", "BCH 305", "BCH 307", "BCH 309"],
                second: ["BCH 302", "BCH 304", "BCH 306", "BCH 308", "BCH 310"]
            },
            level_400 : {
                first: ["BCH 401", "BCH 403", "BCH 405", "BCH 407", "BCH 409"],
                second: ["BCH 402", "BCH 404", "BCH 406", "BCH 408", "BCH 410","BCH 412"]
            }
        },
        microbiology : {
            level_100 : {
                first: ["MCB 101", "MCB 103", "MCB 105", "MCB 107", "MCB 109","GEO 111"],
                second: ["MCB 102", "MCB 104", "MCB 106", "MCB 108", "MCB 110"]
            },
            level_200 : {
                first: ["MCB 201", "MCB 203", "MCB 205", "MCB 207", "MCB 209"],
                second: ["MCB 202", "MCB 204", "MCB 206", "MCB 208", "MCB 210"]
            },
            level_300 : {
                first: ["MCB 301", "MCB 303", "MCB 305", "MCB 307", "MCB 309"],
                second: ["MCB 302", "MCB 304", "MCB 306", "MCB 308", "MCB 310"]
            },
            level_400 : {
                first: ["MCB 401", "MCB 403", "MCB 405", "MCB 407", "MCB 409"],
                second: ["MCB 402", "MCB 404", "MCB 406", "MCB 408", "MCB 410"]
            }
        },
        geology : {
            level_100 : {
                first: ["GEO 101", "GEO 103", "GEO 105", "GEO 107", "GEO 109","GEO 111"],
                second: ["GEO 102", "GEO 104", "GEO 106", "GEO 108", "GEO 110"]
            },
            level_200 : {
                first: ["GEO 201", "GEO 203", "GEO 205", "GEO 207", "GEO 209"],
                second: ["GEO 202", "GEO 204", "GEO 206", "GEO 208", "GEO 210"]
            },
            level_300 : {
                first: ["GEO 301", "GEO 303", "GEO 305", "GEO 307", "GEO 309"],
                second: ["GEO 302", "GEO 304", "GEO 306", "GEO 308", "GEO 310"]
            },
            level_400 : {
                first: ["GEO 401", "GEO 403", "GEO 405", "GEO 407", "GEO 409"],
                second: ["GEO 402", "GEO 404", "GEO 406", "GEO 408", "GEO 410"]
            }
        }
    },
    art : {
        tma : {
            level_100 : {
                first: ["TMA 101", "TMA 103", "TMA 105", "TMA 107", "TMA 109","TMA 311"],
                second: ["TMA 102", "TMA 104", "TMA 106", "TMA 108", "TMA 110"]
            },
            level_200 : {
                first: ["TMA 201", "TMA 203", "TMA 205", "TMA 207", "TMA 209"],
                second: ["TMA 202", "TMA 204", "TMA 206", "TMA 208", "TMA 210"]
            },
            level_300 : {
                first: ["TMA 301", "TMA 303", "TMA 305", "TMA 307", "TMA 309"],
                second: ["TMA 302", "TMA 304", "TMA 306", "TMA 308", "TMA 310"]
            },
            level_400 : {
                first: ["TMA 401", "TMA 403", "TMA 405", "TMA 407", "TMA 409"],
                second: ["TMA 402", "TMA 404", "TMA 406", "TMA 408", "TMA 410","TMA 412"]
            }
        },
        linguistic : {
            level_100 : {
                first: ["LIN 101", "LIN 103", "LIN 105", "LIN 107", "LIN 109","ELS 111"],
                second: ["LIN 102", "LIN 104", "LIN 106", "LIN 108", "LIN 110"]
            },
            level_200 : {
                first: ["LIN 201", "LIN 203", "LIN 205", "LIN 207", "LIN 209"],
                second: ["LIN 202", "LIN 204", "LIN 206", "LIN 208", "LIN 210"]
            },
            level_300 : {
                first: ["LIN 301", "LIN 303", "LIN 305", "LIN 307", "LIN 309"],
                second: ["LIN 302", "LIN 304", "LIN 306", "LIN 308", "LIN 310"]
            },
            level_400 : {
                first: ["LIN 401", "LIN 403", "LIN 405", "LIN 407", "LIN 409"],
                second: ["LIN 402", "LIN 404", "LIN 406", "LIN 408", "LIN 410"]
            }
        },
        els : {
            level_100 : {
                first: ["ELS 101", "ELS 103", "ELS 105", "ELS 107", "ELS 109","ELS 111"],
                second: ["ELS 102", "ELS 104", "ELS 106", "ELS 108", "ELS 110"]
            },
            level_200 : {
                first: ["ELS 201", "ELS 203", "ELS 205", "ELS 207", "ELS 209"],
                second: ["ELS 202", "ELS 204", "ELS 206", "ELS 208", "ELS 210"]
            },
            level_300 : {
                first: ["ELS 301", "ELS 303", "ELS 305", "ELS 307", "ELS 309"],
                second: ["ELS 302", "ELS 304", "ELS 306", "ELS 308", "ELS 310"]
            },
            level_400 : {
                first: ["ELS 401", "ELS 403", "ELS 405", "ELS 407", "ELS 409"],
                second: ["ELS 402", "ELS 404", "ELS 406", "ELS 408", "ELS 410"]
            }
        }
    }
}
console.log(fuoye.science.biochemistry.level_100.first[0]);

var course_100 = document.getElementById("course_100");
var course_200 = document.getElementById("course_200");
var course_300 = document.getElementById("course_300");
var course_400 = document.getElementById("course_400");
var semester = document.getElementById("update_semester_input");
var department = document.getElementById("update_dept_input");
var faculty = document.getElementById("update_faculty_input");

var whole = fuoye[faculty.value];
// var  whole_fac = 
console.log(whole);


function placeCourse(semester, courseLoc) {
    var div = document.createElement('div');
    div.setAttribute('class', semester);
    div.setAttribute('id', semester);
    for (var i = 0; i < courseLoc.length; i++) {
        var label = document.createElement('label');
        label.setAttribute('for', "");
        label.setAttribute('class', "400_course_check each_course");
        var input = document.createElement('input');
        input.setAttribute('type', "checkbox");
        input.setAttribute("value", courseLoc[i]);
        label.append(input);
        label.append(courseLoc[i]);
            div.append(label);

    }
    return div
}

function placeDept(faculty) {
    var select = document.createElement('select');
    select.setAttribute('name', "Department");
    select.setAttribute('id', "update_dept_input");
    select.setAttribute('class', "update_dept_input update_select_all");
    select.setAttribute('onchange', "checkAll()");
    for (var i = 0; i < Object.keys(faculty).length; i++) {
        var option = document.createElement('option');
        var text = Object.keys(faculty);
        option.setAttribute('value', Object.keys(faculty)[i]);
        option.textContent = text[i].toUpperCase();
         select.append(option);

    }
    return select
}

function hey() {
    whole = fuoye[faculty.value];
    console.log(whole);
        department.remove();
        var departmentWrapper = document.getElementById("departmentWrapper");
        // var hi = placeDept(whole);
        departmentWrapper.append(placeDept(whole));
    checkAll();
    department = document.getElementById("update_dept_input");
}

function deptValue(word) {
    var placeCourse_100_first = placeCourse("first1", word.level_100.first);
    var placeCourse_200_first = placeCourse("first2", word.level_200.first);
    var placeCourse_300_first = placeCourse("first3", word.level_300.first);
    var placeCourse_400_first = placeCourse("first4", word.level_400.first);
    
    var placeCourse_100_second = placeCourse("second1", word.level_100.second);
    var placeCourse_200_second = placeCourse("second2", word.level_200.second);
    var placeCourse_300_second = placeCourse("second3", word.level_300.second);
    var placeCourse_400_second = placeCourse("second4", word.level_400.second);
    
    course_100.append(placeCourse_100_first);
    course_100.append(placeCourse_100_second);
    course_200.append(placeCourse_200_first);
    course_200.append(placeCourse_200_second);
    course_300.append(placeCourse_300_first);
    course_300.append(placeCourse_300_second);
    course_400.append(placeCourse_400_first);
    course_400.append(placeCourse_400_second);
}
deptValue(whole[department.value]);




function checkAll() {
   function checkSemester() {
    if (semester.value === "second") {
        document.getElementById("first1").style.display = "none";
        document.getElementById("second1").style.display = "block";
        document.getElementById("first2").style.display = "none";
        document.getElementById("second2").style.display = "block";
        document.getElementById("first3").style.display = "none";
        document.getElementById("second3").style.display = "block";
        document.getElementById("first4").style.display = "none";
        document.getElementById("second4").style.display = "block";
    } else {
        document.getElementById("first1").style.display = "block";
        document.getElementById("second1").style.display = "none";
        document.getElementById("first2").style.display = "block";
        document.getElementById("second2").style.display = "none";
        document.getElementById("first3").style.display = "block";
        document.getElementById("second3").style.display = "none";
        document.getElementById("first4").style.display = "block";
        document.getElementById("second4").style.display = "none";
        
    }
}
department = document.getElementById("update_dept_input");

var first1 = document.getElementById("first1");
var first2 = document.getElementById("first2");
var first3 = document.getElementById("first3");
var first4 = document.getElementById("first4");
var second1 = document.getElementById("second1");
var second2 = document.getElementById("second2");
var second3 = document.getElementById("second3");
var second4 = document.getElementById("second4");
first1.remove();
first2.remove();
first3.remove();
first4.remove();

second1.remove();
second2.remove();
second3.remove();
second4.remove();

console.log(department.value)

deptValue(whole[department.value]);




    //   if (department.value === "microbiology") {
    //       var first1 = document.getElementById("first1");
    //       var first2 = document.getElementById("first2");
    //       var first3 = document.getElementById("first3");
    //       var first4 = document.getElementById("first4");
    //       var second1 = document.getElementById("second1");
    //       var second2 = document.getElementById("second2");
    //       var second3 = document.getElementById("second3");
    //       var second4 = document.getElementById("second4");
    //       first1.remove();
    //       first2.remove();
    //       first3.remove();
    //       first4.remove();

    //       second1.remove();
    //       second2.remove();
    //       second3.remove();
    //       second4.remove();
          
    //       deptValue(fuoye.science.microbiology);
    //   }
    //   else if (department.value === "biochemistry") {
    //     var first1 = document.getElementById("first1");
    //     var first2 = document.getElementById("first2");
    //     var first3 = document.getElementById("first3");
    //     var first4 = document.getElementById("first4");

    //       var second1 = document.getElementById("second1");
    //       var second2 = document.getElementById("second2");
    //       var second3 = document.getElementById("second3");
    //       var second4 = document.getElementById("second4");
    //       first1.remove();
    //       first2.remove();
    //       first3.remove();
    //       first4.remove();

    //       second1.remove();
    //       second2.remove();
    //       second3.remove();
    //       second4.remove();
    //     // course_100.removeChild(placeCourse_100_sec);
    //       deptValue(fuoye.science.biochemistry);
    //   }
    //   else if (department.value === "geology") {
    //     var first1 = document.getElementById("first1");
    //     var first2 = document.getElementById("first2");
    //     var first3 = document.getElementById("first3");
    //     var first4 = document.getElementById("first4");

    //       var second1 = document.getElementById("second1");
    //       var second2 = document.getElementById("second2");
    //       var second3 = document.getElementById("second3");
    //       var second4 = document.getElementById("second4");
    //       first1.remove();
    //       first2.remove();
    //       first3.remove();
    //       first4.remove();

    //       second1.remove();
    //       second2.remove();
    //       second3.remove();
    //       second4.remove();
    //     // course_100.removeChild(placeCourse_100_sec);
    //       deptValue(fuoye.science.geology);
    //   }

        
checkSemester();

       

}




// function placeDept(faculty) {
//     var select = document.createElement('select');
//     select.setAttribute('name', "Department");
//     selcet.setAttribute('id', "update_dept_input");
//     selcet.setAttribute('class', "update_dept_input update_select_all");
//     selcet.setAttribute('onchange', "checkAll()");
//     for (var i = 0; i < faculty.length; i++) {
//         var option = document.createElement('option');
//         option.setAttribute('value', faculty[i]);
//          select.append(label);

//     }
//     return select
// }

// <select name="Department" id="update_dept_input" class="update_dept_input update_select_all" onchange="checkAll()">
// <!-- <option value="biochemistry">Biochemistry</option>
// <option value="microbiology">Micro Biology</option>
// <option value="geology">Geology</option> -->
// </select>


// function demClicks() {
    
// }
var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateForm();
}
// cách viết 2
// function start() {
//   getCourses(function (courses) {
//     renderCourses(courses);
//   });
// }
start();

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback) //??
    .catch(function (err) {
      console.log(err);
    });
}

function createCourse(data, callback) {
  fetch(courseApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function handleDelCourse(id) {
  fetch(courseApi + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      return response.json();
    })
    // nó sẽ phải call lại api, load lại trang
    // .then(function (){
    //   getCourses(renderCourses);

    // });

    // cách 2 - xóa trực tiếp class
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      console.log(courseItem);
      //   if (courseItem) {
      //     courseItem.remove();
      //   }
    });
  // vẫn bị load lại ??
}

function updateCourse(id, data) {
  fetch(courseApi + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
        console.log(response);
    //   return response.json();
    })
    .then(function (){
        // getCourses(renderCourses);
    });
}

function renderCourses(courses) {
  var listCourse = document.querySelector("#course-list");
  var htmls = courses.map(function (course) {
    return /*html*/ `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.des}</p>
            <button onclick="handleDelCourse(${course.id})">Del</button>
            <button onclick="renderCourseItem(${course.id})">Edit</button>
        </li>
    `;
  });
  listCourse.innerHTML += htmls.join("");
}

function renderCourseItem(id) {
  fetch(courseApi + "/" + id)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var formEdit = document.querySelector(".form-edit");
      formEdit.innerHTML = /*html*/ `
        <form action="">
            <input type="text" value="${data.name}" id="nameItem" placeholder="name">
            <input type="text" value="${data.des}" id="desItem" placeholder="description">
            <button id="btn-save">Save</button>
        </form>
            `;
  handleUpdateForm(data.id);

    });
}

function handleCreateForm() {
  var btnAdd = document.querySelector("#btn_add");

  btnAdd.onclick = function (event) {
    event.preventDefault();

    var name = document.querySelector('input[name="name"]').value;
    var des = document.querySelector('input[name="des"]').value;

    var formData = {
      name: name,
      des: des,
    };
    console.log(formData);

    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}

function handleUpdateForm(idItem) {
  var btnSave = document.querySelector("#btn-save");
  btnSave.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("btnSave");
  
      var nameItem = document.querySelector('#nameItem').value;
      var desItem = document.querySelector('#desItem').value;
  
      var formData = {
        name: nameItem,
        des: desItem,
      };
      console.log(formData);
  
      updateCourse(idItem, formData);

  }) 
}

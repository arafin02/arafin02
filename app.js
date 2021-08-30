var typed = new Typed("#lang_type", {
  strings: [
    '<i class="text-yellow-400">Javascript</i>',
    '<i class="text-green-400">VueJS</i>',
    '<i class="text-green-800">Django</i>',
  ],
  typeSpeed: 45,
  backSpeed: 45,
  shuffle: false,
  smartBackspace: false,
  loop: true,
  cursorChar: "_",
});

// PROJECTS LOOP


function projectloop(data) {
  var project = "";
  for (var i = 0; i < data.length; i++) {
    var projectdiv = `<div class="bg-gray-50 w-11/12 p-3 border-2 rounded-lg shadow-lg text-center mb-8 hover:bg-purple-100">
    <div class="text-xl text-purple-600 hover:text-purple-800 font-medium">${data[i].name}</div>
    <div class="px-4">
      ${data[i].description}
    </div>
    <div class="flex items-center justify-between">
      <a href="https://www.github.com/arafin02/${data[i].github}"><img class="icon" src="/media/github.svg" alt=""></a>
      <a class="text-purple-500 hover:text-purple-700" href="${data[i].url}">View Site</a>
    </div>
  </div>`;
    project += projectdiv
  }
  document.getElementById('projects').innerHTML = project

}

projectloop(projects)
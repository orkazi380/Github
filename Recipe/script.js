
// let signdiv= document.getElementById("signdiv")
// console.log(signdiv)
function signup(){
  let name=document.getElementById(`name`).value
  name=name.trim().at(0)
  console.log(name)
  document.addEventListener("DOMContentLoaded", function() {
    let signdiv = document.getElementById("signdiv");
    if(signdiv){
      signdiv.innerHTML=name
    }
    console.log(signdiv)
  });
    window.location.href = "/index.html";
  // window.location.replace("index.html")
    // window.location.assign("index.html");
    // history.pushState({}, '', '/index.html');
}




// function signup() {
//   try {
//       let name = document.getElementById('name').value;
//       name = name.trim().at(0);
//       console.log(name);
      
//       let signdiv = document.getElementById('signdiv');
//       if (signdiv) {
//           signdiv.innerHTML = `<div class="personalpa">${name}</div>`;
//       }

//       // Use absolute path
//       const currentPath = window.location.pathname;
//       const basePath = currentPath.substring(0, currentPath.lastIndexOf('/'));
//       window.location.href = basePath + '/index.html';
      
//   } catch (error) {
//       console.error('Navigation error:', error);
//   }
// }

// // Make sure the function is properly bound to the button
// document.addEventListener('DOMContentLoaded', () => {
//   const signupButton = document.getElementById('signup-button');
//   if (signupButton) {
//       signupButton.addEventListener('click', signup);
//   }
// });
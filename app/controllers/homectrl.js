app.controller('HomeCtrl', function() {
  console.log('homectrl')

  // Create a root reference
  let storageRef = firebase.storage().ref();

  let inputElement = document.getElementById('fileInput');

  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    var fileList = this.files;
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a file!')
      })
  }
})

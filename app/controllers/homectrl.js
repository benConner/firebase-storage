app.controller('HomeCtrl', function() {
  console.log('homectrl')

  // Create a root reference
  let storageRef = firebase.storage().ref();
  let gsReference = firebase.storage().refFromURL('gs://fir-storage-e8e40.appspot.com/')

  console.log(storageRef.child('images'))

  let inputElement = document.getElementById('fileInput');

  inputElement.addEventListener("change", handleFiles, false);

  function handleFiles() {
    var fileList = this.files;
    console.log("filelist[0]", fileList[0])
    storageRef.child("images/" + fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a file!')
        console.log(snapshot)
      })
  }


  storageRef.child('pugpup.jpg').getDownloadURL()
    .then(function(url) {
    var img = document.getElementById('myImg')
    img.src = url;
    }).catch(function (error) {

  })







})

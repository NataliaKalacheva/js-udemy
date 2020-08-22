function sendForm() {
  var formData = new FormData();
  formData.append("username", "johndoe"); // <<<
  formData.append("id", 123456); // <<<

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/server", true);
  xhr.onload = function(e) {
    /*...*/
  };

  xhr.send(formData); // <<<
}

sendForm();

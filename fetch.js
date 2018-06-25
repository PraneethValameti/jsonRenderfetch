fetch('resume.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // document.getElementById('sample').innerHTML=data.basics.name;
    var m1;
    var c1;

    for (i in data.basics) {

      m1 = document.getElementById('mainDiv');
      c1 = document.createElement("div");
      c1.classList.add("c1");
      var image1 = document.createElement("img");
      image1.classList.add("image");
      image1.src = data.basics[i].url;
      console.log(data.basics[i].url);
      c1.appendChild(image1);
      c1.appendChild(document.createElement("hr"));

      for (j in data.basics[i].des) {
        var h1 = document.createElement("h1");
        h1.textContent = data.basics[i].des[j];
        console.log(data.basics[i].des[j]);

        c1.appendChild(h1);
      }

      m1.appendChild(c1);
    }
  })
  .catch(err => {
    console.log(err);
  })

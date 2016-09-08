var url = "https://googledrive.com/host/0B0zTgDj4fTXrYzZIdXE4cjhWbFE/1.svg";
console.clear();
console.time();
$(function () {
  function fileUrl(url, dataT) {
    $.ajax({
      url: url,
      dataType: dataT,
      error: qwe,
      success: xmlParser //jshint ignore:line
    });
  }

  function qwe(arguments) {
    console.log("E R R O R");
  }

  function xmlParser(p1, p2, p3) {


    var d = new Date();

    console.warn(d.toString());
    console.log(p3.getResponseHeader("Last-Modified"));
    var msUTC = Date.parse(p3.getResponseHeader("Last-Modified"));

    console.info(msUTC);
    console.warn("милисек -", Date.parse(p3.getResponseHeader("Last-Modified")));

    console.timeEnd();
  }



  //  fileUrl(url, "xml");
  //  fileUrl(url, "jsonp");
  fileUrl(url, "text");


  /*

    $.ajax({
      url: url,
      dataType: "xml",
      success: function (a, b, c) {
          console.log(a.lastModified);
          console.log(c.responseXML.lastModified);
          console.log(a);
          console.log(b);
          console.log(c);


          success: function (response) {
            alert("Data is " + response.data + ", last modified: " + xhr.getResponseHeader("Last-Modified"));
          }


        }
        //jshint ignore:line
    });

    /**/
});
//www16 коммент

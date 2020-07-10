$(document).ready(function () {
  //alert("Common js loading");
  // get the page title when the page loading
  var pageTitle = jQuery(document).attr("title");

  // get the language session
  var language = sessionStorage.getItem("language");

  // check the language session is null or not when the page loading
  if (language == null) {
    // if the session is null

    sessionStorage.setItem("language", "en"); // assign the default language as english

    // get data from JSON files and assign them accordingly
    $.getJSON("../locales/en/commonTranslations.json", function (data) {
      $("#logo").html(data.header);
      $("#contactTitle").html(data.navigation);
    });
    if (pageTitle == "Website") {
      // identify the current page according to the page title
      $.getJSON("../locales/en/indexTranslations.json", function (data) {
        $("#title").html(data.title);
        $("#para1").html(data.para1);
      });
    } else if (pageTitle == "Archive") {
      $.getJSON("../locales/en/archiveTranslations.json", function (data) {
        $("#table").html(data.all);
        $("#sphere").html(data.images);
        $("#helix").html(data.audio);
        $("#grid").html(data.video);
        $("#helix").html(data.date);
        $("#grid").html(data.location);
      });
    } else if (pageTitle == "Video Stories") {
    } else if (pageTitle == "Memory Walks") {
      $.getJSON("../locales/en/memorywalksTranslations.json", function (data) {
        $("#title1").html(data.title1);
        $("#title2").html(data.title2);
        $("#title3").html(data.title3);
      });
    } else if (pageTitle == "About") {
      $.getJSON("../locales/en/aboutTranslations.json", function (data) {
        $("#title1").html(data.title1);
        $("#title2").html(data.title2);
        $("#para1").html(data.para1);
      });
    } else if (pageTitle == "Contacts") {
      $.getJSON("../locales/en/contactTranslations.json", function (data) {
        $("#title1").html(data.title1);
        $("#title2").html(data.title2);
      });
    }
  } else {
    // if the session is not null
    //alert("Else");
    if (language == "en") {
      // assign language according to the currently selected language
      $.getJSON("../locales/en/commonTranslations.json", function (data) {
        $("#logo").html(data.header);
        $("#contactTitle").html(data.navigation);
      });
      if (pageTitle == "Website") {
        $.getJSON("../locales/en/indexTranslations.json", function (data) {
          $("#title").html(data.title);
          $("#para1").html(data.para1);
        });
      } else if (pageTitle == "Archive") {
        $.getJSON("../locales/en/archiveTranslations.json", function (data) {
          $("#table").html(data.all);
          $("#sphere").html(data.images);
          $("#helix").html(data.audio);
          $("#grid").html(data.video);
          $("#helix").html(data.date);
          $("#grid").html(data.location);
        });
      } else if (pageTitle == "Video Stories") {
      } else if (pageTitle == "Memory Walks") {
        $.getJSON("../locales/en/memorywalksTranslations.json", function (
          data
        ) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
          $("#title3").html(data.title3);
        });
      } else if (pageTitle == "About") {
        $.getJSON("../locales/en/aboutTranslations.json", function (data) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
          $("#para1").html(data.para1);
        });
      } else if (pageTitle == "Contacts") {
        $.getJSON("../locales/en/contactTranslations.json", function (data) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
        });
      }
    } else {
      $.getJSON("../locales/it/commonTranslations.json", function (data) {
        $("#logo").html(data.header);
        $("#contactTitle").html(data.navigation);
      });
      if (pageTitle == "Website") {
        $.getJSON("../locales/it/indexTranslations.json", function (data) {
          $("#title").html(data.title);
          $("#para1").html(data.para1);
        });
      } else if (pageTitle == "Archive") {
        $.getJSON("../locales/it/archiveTranslations.json", function (data) {
          $("#table").html(data.all);
          $("#sphere").html(data.images);
          $("#helix").html(data.audio);
          $("#grid").html(data.video);
          $("#helix").html(data.date);
          $("#grid").html(data.location);
        });
      } else if (pageTitle == "Video Stories") {
      } else if (pageTitle == "Memory Walks") {
        $.getJSON("../locales/it/memorywalksTranslations.json", function (
          data
        ) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
          $("#title3").html(data.title3);
        });
      } else if (pageTitle == "About") {
        $.getJSON("../locales/it/aboutTranslations.json", function (data) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
          $("#para1").html(data.para1);
        });
      } else if (pageTitle == "Contacts") {
        $.getJSON("../locales/it/contactTranslations.json", function (data) {
          $("#title1").html(data.title1);
          $("#title2").html(data.title2);
        });
      }
    }
  }
});

// English button click fucntion
$("#enBtn").on("click", function (e) {
  // get the page title and the language session
  var pageTitle = jQuery(document).attr("title");
  var language = sessionStorage.getItem("language");

  // if the language is not English assign it as English
  if (language != "en") {
    sessionStorage.clear();
    sessionStorage.setItem("language", "en");
  }

  // get data from JSON files and assign them accordingly
  $.getJSON("../locales/en/commonTranslations.json", function (data) {
    $("#logo").html(data.header);
    $("#contactTitle").html(data.navigation);
  });
  if (pageTitle == "Website") {
    $.getJSON("../locales/en/indexTranslations.json", function (data) {
      $("#title").html(data.title);
      $("#para1").html(data.para1);
    });
  } else if (pageTitle == "Archive") {
    $.getJSON("../locales/en/archiveTranslations.json", function (data) {
      $("#table").html(data.all);
      $("#sphere").html(data.images);
      $("#helix").html(data.audio);
      $("#grid").html(data.video);
      $("#helix").html(data.date);
      $("#grid").html(data.location);
    });
  } else if (pageTitle == "Video Stories") {
  } else if (pageTitle == "Memory Walks") {
    $.getJSON("../locales/en/memorywalksTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
      $("#title3").html(data.title3);
    });
  } else if (pageTitle == "About") {
    $.getJSON("../locales/en/aboutTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
      $("#para1").html(data.para1);
    });
  } else if (pageTitle == "Contacts") {
    $.getJSON("../locales/en/contactTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
    });
  }
  e.preventDefault();
});

// Italian button click fucntion
$("#itBtn").on("click", function (e) {
  // get the page title and the language session
  var pageTitle = jQuery(document).attr("title");
  var language = sessionStorage.getItem("language");

  // if the language is not Italian assign it as Italian
  if (language != "it") {
    sessionStorage.clear();
    sessionStorage.setItem("language", "it");
  }

  // get data from JSON files and assign them accordingly
  $.getJSON("../locales/it/commonTranslations.json", function (data) {
    $("#logo").html(data.header);
    $("#contactTitle").html(data.navigation);
  });
  if (pageTitle == "Website") {
    $.getJSON("../locales/it/indexTranslations.json", function (data) {
      $("#title").html(data.title);
      $("#para1").html(data.para1);
    });
  } else if (pageTitle == "Archive") {
    $.getJSON("../locales/it/archiveTranslations.json", function (data) {
      $("#table").html(data.all);
      $("#sphere").html(data.images);
      $("#helix").html(data.audio);
      $("#grid").html(data.video);
      $("#helix").html(data.date);
      $("#grid").html(data.location);
    });
  } else if (pageTitle == "Video Stories") {
  } else if (pageTitle == "Memory Walks") {
    $.getJSON("../locales/it/memorywalksTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
      $("#title3").html(data.title3);
    });
  } else if (pageTitle == "About") {
    $.getJSON("../locales/it/aboutTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
      $("#para1").html(data.para1);
    });
  } else if (pageTitle == "Contacts") {
    $.getJSON("../locales/it/contactTranslations.json", function (data) {
      $("#title1").html(data.title1);
      $("#title2").html(data.title2);
    });
  }
  e.preventDefault();
});

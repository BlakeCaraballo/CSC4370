
(function() {
    "use strict";
  
    let currentType = "";
    let down = false;
  
    
    window.onload = function() {
      setUpTiles(); 
      $("clear").onclick = clearPuzzle;
    };
  
    window.onmouseup = function() {
      currentType = "";
      down = false;
    };
 
    function changeBoxMark() {
      down = true;
      if (this.classList.contains("filled")) {
        this.classList.remove("filled");
        this.classList.add("crossed-out");
        currentType = "crossed-out";
      } else if (this.classList.contains("crossed-out")) {
        this.classList.remove("crossed-out");
        currentType = "";
      } else {
        this.classList.add("filled");
        currentType = "filled";
      }
    }
  
    
    function clearPuzzle() {
      if (confirm("Clear the puzzle?")) {
        let boxes = $$(".box");
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].classList.remove("filled", "crossed-out");
        }
      }
    }
  
   
    function dragBoxStatus() {
      if (down) {
        if (currentType == "") {
          this.classList.remove("crossed-out");
        } else if (currentType == "filled") {
          this.classList.add("filled");
          this.classList.remove("crossed-out");
        } else { // crossed-out
          this.classList.add("crossed-out");
          this.classList.remove("filled");
        }
      }
    }
  
    
    function setUpTiles() {
      let tiles = $$(".box");
      for (let i = 0; i < tiles.length; i++) {
        let div = tiles[i];
        div.onmousedown = changeBoxMark;
        div.onmouseover = dragBoxStatus;
        div.onclick = function() {
          down = false;
          currentType = "";
        };
      }
    }
  
   
    function $(id) {
      return document.getElementById(id);
    }
  
  
    function $$(query) {
      return document.querySelectorAll(query);
    }
  })();
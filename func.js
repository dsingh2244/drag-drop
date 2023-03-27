  let drgitems = document.getElementsByClassName('incell');
  for(let item of drgitems) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
  };
 const unarr=[]
  function handleDragStart(e) {
    console.log("dragged");
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text1', this.innerHTML);
    e.dataTransfer.setData('text2', this.getAttribute("style"));
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }
  var ch=false;
  function handleDrop(e) {
     e.stopPropagation(); 
    if (dragSrcEl !== this) {
      ch =true;
      dragSrcEl.innerHTML = this.innerHTML;
      dragSrcEl.setAttribute("style",this.getAttribute("style"));
      this.innerHTML = e.dataTransfer.getData('text1');
      this.setAttribute("style", e.dataTransfer.getData('text2'));
      unarr.push(dragSrcEl);
      unarr.push(this);
    }
     return false;
  }

  function handleclick(e){
    var n= unarr.length;
    if(ch){
      let temp1=unarr[n-2].innerHTML;
      let temp2=unarr[n-2].getAttribute("style");
      unarr[n-2].innerHTML = unarr[n-1].innerHTML;
      unarr[n-2].setAttribute("style",unarr[n-1].getAttribute("style"));
      unarr[n-1].innerHTML = temp1;
      unarr[n-1].setAttribute("style", temp2);
      ch=false;
    }
  }
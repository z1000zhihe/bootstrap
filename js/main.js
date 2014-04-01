function doPrint(){
  var cc = document.getElementById('test').innerHTML;
  var isIe=0;
  var frame = document.getElementById('myframe');
  if (!frame) {
    if (isIe) {
      frame = document.createElement('<iframe id = "myframe"></iframe>');
    } else {
      frame = document.createElement('iframe');
      frame.id ='myframe';
      frame.setAttribute('style','width: 0pt; height: 0pt;')
    }
  }
  if (isIe) {
    frame.src = Ext.SSL_SECURE_URL;
    var id = 'myframe';
    var fr = document.getElementById(id);
    fr.style.cssText= 'width: 0pt; height: 0pt;';
  }
  document.body.appendChild(frame);
  if (isIe) {
    doc = frame.contentWindow.document;
  } else {
    doc = frame.contentDocument;
  }
  doc.write(cc);
  doc.close();
  frame.contentWindow.focus();
  if(isIe){
    setTimeout(function(){
      frame.contentWindow.print();
    },2);
  }else{
    frame.contentWindow.print();
  }
}
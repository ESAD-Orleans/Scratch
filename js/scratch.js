jQuery(document).ready(function(){

    $('.scratch').each(function(){
  
  var scratch = this, $scratch = $(scratch),
      $img = $('img',scratch);
  $scratch.append($('<canvas />')),
    scratchImg = new Image();
  
  var $canvas = $('canvas',scratch),
      canvas = $canvas.get(0),
      w, h,
      context =   canvas.getContext('2d');
  
  function ResizeCanvas(){
    w = context.canvas.width = $img.width();
    h = context.canvas.height = $img.height();
  }
  ResizeCanvas();
    
  $(scratchImg).on('load',function(){
    //context.drawImage(scratchImg,0,0,w,h);
  });
  
  var x0 = -1, y0 = -1;
  function Move(e){
    e.stopPropagation();
    e.preventDefault();
    var x = e.x, y = e.y;
    if(x0 > 0){
      context.globalCompositeOperation="source-over";
      //context.stroke="#000";
        context.beginPath();
      context.lineWidth =20;
      context.moveTo(e.x,e.y);
      context.lineTo(x0,y0);
      context.stroke();
      context.closePath();
      context.globalCompositeOperation="source-in";
      context.drawImage(scratchImg,0,0,w,h); 
    }
    x0 = x; y0 = y;
  }
  
  $scratch.on('drag',Move);
  
  scratchImg.src = $img.data('scratch-src');
  
});

});
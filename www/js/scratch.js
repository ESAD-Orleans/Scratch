jQuery(document).ready(function(){

    $('.scratch').each(function(){
  
  var scratch = this, 
      $scratch = $(scratch),
      $img = $('img',scratch),
      scratchImg = new Image();
      
    $scratch.append($('<canvas />'));
  
  var $canvas = $('canvas',scratch),
      canvas = $canvas.get(0),
      w, h,
      context =   canvas.getContext('2d'),
      cleanInterval;
        
  function CleanCanvas(){
  
      var scrollTop = $(window).scrollTop(),
          scrollBottom = scrollTop+$(window).height(),
          offsetTop = $canvas.offset().top,
         offsetBottom =  offsetTop + $canvas.height();
      if(
           offsetTop > scrollBottom
         ||
          offsetBottom < scrollTop
          ){
          context.clearRect(0,0,w,h);
      }
  }
        
  cleanInterval = setInterval(CleanCanvas,20000);       
  
  function ResizeCanvas(){
    var backupImage = new Image(); 
     // backupImage.src = backupImageData;
    try{
        backupImage.src = canvas.toDataURL("image/png");
    }catch(err){
    }
    w = context.canvas.width = $img.width();
    h = context.canvas.height = $img.height();
      
      function Redraw(){
        try{  
        context.globalCompositeOperation="source-over";
        context.drawImage(backupImage,0,0,w,h);
        context.globalCompositeOperation="source-in";
        context.drawImage(scratchImg,0,0,w,h);
        }catch(err){console.log(err)}  
      }
      window.requestAnimationFrame(Redraw);
      setTimeout(Redraw,0);
  }
  ResizeCanvas();
  $(window).resize(ResizeCanvas);
    
  $(scratchImg).on('load',ResizeCanvas);
  
  var x0 = -1, y0 = -1;
  function Move(e){
    e.stopPropagation();
    e.preventDefault();
      console.log(scratchImg);
    var offset = $scratch.offset(), 
        x = Math.round(e.x-offset.left), y =         Math.round(e.y-offset.top);
    if(x0 >= 0){
      context.globalCompositeOperation="source-over";
        
      context.beginPath();
      context.lineWidth =20;
      context.moveTo(x,y);
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
        console.log(scratchImg.src);
  
});

});
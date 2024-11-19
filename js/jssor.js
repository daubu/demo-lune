var slider_options = {
  $AutoPlay: true,
  $SlideshowOptions: {
    $Class: $JssorSlideshowRunner$
  },
  $ArrowNavigatorOptions: {
    $Class: $JssorArrowNavigator$
  },
  $ThumbnailNavigatorOptions: {
    $Class: $JssorThumbnailNavigator$,
    $Cols: 4,
    $SpacingX: 5,
    $SpacingY: 10,
    $Align: 0
  }
};

var slider_slider = new $JssorSlider$("slider", slider_options);

//you can remove responsive code if you don't want the slider scales while window resizes
function ScaleSlider() {
  var refSize = slider_slider.$Elmt.parentNode.clientWidth;
  if (refSize) {
    refSize = Math.min(refSize-24, 800);
    slider_slider.$ScaleWidth(refSize);
  } else {
    window.setTimeout(ScaleSlider, 30);
  }
}
ScaleSlider();

$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);

// button click
// Get attribute of 'type'
// search -> google query
$('body').on('click', '.buttons', function(e) {
  // target
  let t = e.currentTarget;
  t = t.getAttribute("type");
  // keyword
  let k = document.querySelector(".search__keyword").value;
  if(k){
    let url = 'https://www.google.com/search?q='+k;
    if(t == "search"){
      window.location.href = url;
    } else if(t == "lucky"){
      window.location.href = url;
    };
  } else {
    let s = document.querySelector(".search");
    s.classList.add("animation");
    setTimeout(function(){
      s.classList.remove("animation");
    },600);
  };
});

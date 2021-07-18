const faqHead = document.querySelectorAll('.faq-head');
const seeContent = document.querySelectorAll('#see');
const faqContent = document.querySelectorAll('.faq-body');

for (let i = 0; i <= seeContent.length; i++) {
  seeContent[i].addEventListener('click', function() {
    console.log("i'm clicked!!");

  seeContent[i].style.transform = "rotateX(180deg)";
  faqHead[i].style.color = "var(--darkgrayishblue)";
  faqContent[i].style.visibility = "visible";
  faqContent[i].style.display = "block";

    // seeContent.forEach(function(content){
    //   content.show(".faqContent");
    setTimeout(function(){
      seeContent[i].style.transform = "rotateY(180deg)";
      faqHead[i].style.color = "var(--verydarksatblue)";
      faqContent[i].style.visibility = "hidden";
      faqContent[i].style.display = "none";

    },3000);
  });
}



//
// faqContent.forEach(function(content){
//
// })
//
// if

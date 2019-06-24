const classData = {
  classmates: [
      {name: "That on gal", description: "Always has the ansswer" ,socialNetwork:true},
      {name: "The weird dude", description: "Quick with a smile",socialNetwork:false},
      {name: "Taylor", description: "Just Taylor",socialNetwork:true}
  ]
}

const source = $('#class-template').html();
const template = Handlebars.compile(source);
const newHTML = template(classData);


$('.classroom').append(newHTML);


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
const render1=function(){
  const source = $('#first-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template(animals)
  $("#special").append(newHTML)
}
render1()




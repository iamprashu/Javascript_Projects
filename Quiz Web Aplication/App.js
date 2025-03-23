let QuizPanel = document.querySelector('.QuestionPanel');
let apiKey = 'S6Kr0geQesYFuY5RRCjIud0zL1xcno5is2qFDARt';
let Url = 'https://quizapi.io/api/v1';
let TagsUrl = 'tags';
let QuizTopic = '';
let Level = '';

let dropDown = document.querySelectorAll('#Topic');
let diffDropdown = document.querySelectorAll('#dificuilty');
let LevelDef =['Easy','Medium','Hard'];

// function SetDeficuilty(){
//   for(let def of LevelDef){
//     for(let option of diffDropdown){
//       let newOption = document.createElement('option');
//       newOption.name = def;
//       newOption.innerText = def;
//       option.append(newOption);
//     }
//   }
// }

async function FetchTopics() {
  let AllTags = await fetch(`${Url}/${TagsUrl}?apiKey=${apiKey}`);
  let AllTagsFinal = await AllTags.json();
  GetTags(AllTagsFinal);
  console.log(AllTagsFinal);
  // if geeting topics completed run question fetch task
}



async function GetQuestions(){
  let response = await fetch(`${Url}/questions?apiKey=${apiKey}&limit=10&tags=${QuizTopic}`);
  let FinalData = await response.json();
  console.log(FinalData);
  DisplayQuiz(FinalData);
}

function GetTags(AllTagsFinal){
  for(let select of dropDown){
    for(let tags of AllTagsFinal){
      let newOption = document.createElement('option');
      newOption.innerText =tags.name;
      newOption.value = tags.name;
      select.append(newOption);
      newOption.classList.add('p-2');
    }
    select.addEventListener('change',(SelectedTag)=>{
      QuizTopic = SelectedTag.target.value;
      console.log(QuizTopic);
    });

  }
}

function DisplayQuiz(FinalResponse) {
  let qn = 1;

  QuizPanel.innerHTML = "";

  FinalResponse.forEach(QuizObject => {
    let EachQuestionBox = document.createElement('div');
    EachQuestionBox.classList.add('text-white', 'text-xl', 'font-bold', 'bg-red-500', 'p-4', 'mb-4', 'rounded');
    let Question = document.createElement('p');
    Question.innerText = `Q${qn}. ${QuizObject.question}`;
    EachQuestionBox.appendChild(Question);
    QuizPanel.appendChild(EachQuestionBox);
    qn++;
  });

}


FetchTopics();

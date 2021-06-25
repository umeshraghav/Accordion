 import Accordion from './Accordion'
import './App.css';
 
import questions from './Data'
function App() {
 
  return (
    <main>
      <div className="container">
        <h3>Frequently Asked Questions</h3>
       
        <section className="info">
       
        {questions.map((question)=>{
        return(
          <Accordion key={question.id} {...question}/> 
        )
      })}
        </section>
   
       </div>
    </main>
  );
}

export default App;

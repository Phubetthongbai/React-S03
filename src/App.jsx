import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {
  console.log('App component');
  const helloData = [
    {name: 'phubet',message: 'Hi there'},
    {name: 'joy', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index)=>(
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="nice@gmail.com" phone="0988848052" />

    </div>
  );
}

export default App;

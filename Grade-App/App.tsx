import Calculator from "./components/Calculator";
import GradeCard from "./components/GradeCard";

const App = () => {
  return (
    <div>
      <h1>Grade Calculator App</h1>
      <section>
        <Calculator />
      </section>
      <section>
        <GradeCard />
      </section>
    </div>
  );
};

export default App;
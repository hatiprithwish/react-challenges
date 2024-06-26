import ColorPicker from "./components/ColorPicker";
import CountDown from "./components/CountDown";
import Counter from "./components/Counter";
import DynamicList from "./components/DynamicList";
import DynamicMovieList from "./components/DynamicMovieList";
import PasswordChecker from "./components/PasswordChecker";
import UseCallbackHook from "./components/hooks/UseCallbackHook";
import UseContextHook from "./components/hooks/useContext/UseContextHook";
import UseMemoHook from "./components/hooks/UseMemoHook";
import UseReducerHook from "./components/hooks/UseReducerHook/UseReducerHook";
import ReduxCounter from "./components/redux/ReduxCounter";
import RToolkitCounter from "./components/redux-toolkit/RToolkitCounter";
import UseStateHook from "./components/hooks/UseStateHook";
import useCounter from "./components/hooks/custom/useCounter";
import { useCounter1 } from "./components/hooks/custom/useCounter1";
import UseEffectHook from "./components/hooks/UseEffectHook";
import UseReducerHook1 from "./components/hooks/UseReducerHook1";
import Accordion from "./components/accordion/Accordion";
import AnagramChecker from "./components/AnagramChecker/AnagramChecker";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import TableColorizer from "./components/TableColorizer/TableColorizer";
import Pagination from "./components/pagination/Pagination";
import FileExplorer from "./components/File Explorer/FileExplorer";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";
import Stack from "./components/Stack/Stack";
import WordCounter from "./components/WordCounter/WordCounter";
import TempConverter from "./components/TempConverter/TempConverter";
import StarRating from "./components/StarRating/StarRating";
import TodoBoard from "./components/TodoBoard/TodoBoard";
import { TicTacToe } from "./components/TicTacToe/TicTacToe";

function App() {
  // const counter = useCounter(0, 1)
  // const counter1 = useCounter1(5, 2)

  return (
    <main className="max-w-[1440px] w-full flex flex-col items-center px-16">
      <h1 className="text-4xl font-bold my-8">React Challenges</h1>

      {/* <ImageGallery /> */}
      {/* <PasswordGenerator /> */}
      {/* <FileExplorer /> */}
      {/* <Pagination /> */}
      {/* <TableColorizer /> */}
      {/* <AnagramChecker /> */}
      {/* <ThemeToggler /> */}
      {/* <Counter />
      <DynamicList />
      <ColorPicker />
      <PasswordChecker />
      <CountDown />
      <DynamicMovieList /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      {/* <ReduxCounter /> */}
      {/* <RToolkitCounter /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook1 /> */}
      {/* {counter} */}
      {/* {counter1} */}
      {/* <Accordion /> */}
      {/* <QRCodeGenerator /> */}
      {/* <GuessTheNumber /> */}
      {/* <Stack /> */}
      {/* <WordCounter /> */}
      {/* <TempConverter /> */}
      {/* <StarRating /> */}
      {/* <TodoBoard /> */}
      <TicTacToe />
    </main>
  );
}

export default App;

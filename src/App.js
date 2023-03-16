import './App.css';
import Drawer from './components/Drawer';
import GridLayout from './components/GridLayout';
import ResponsiveGrid from './components/ResponsiveGrid';


export default function App() {
  return (
    <div className="mx-auto lg:mt-8">
      <Drawer />
      {/* <h1 className="text-4xl text-center">A Page</h1> */}
      {/* <ResponsiveGrid /> */}
      <GridLayout />
    </div>
  );
}



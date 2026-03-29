import { Button } from "@/components/ui/button";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-x-4">
        <Button>Click Me</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}

export default App;

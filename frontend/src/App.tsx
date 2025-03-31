import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./assets/icons/PlusIcon";
import { ShareIcon } from "./assets/icons/ShareIcon";

function App() {
  return (
    <div className="bg-background h-screen py-1 pr-6">
      <div className="flex justify-end items-center gap-4 py-6">
        <Button
          variant="primary"
          size="md"
          text="Share Brain"
          startIcon={<ShareIcon size="md" color="black" hoverEffect={false} />}
        />
        <Button
          variant="secondary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcon size="md" color="black" />}
        />
      </div>
    </div>
  );
}

export default App;

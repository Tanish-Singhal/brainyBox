import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./assets/icons/PlusIcon";
import { ShareIcon } from "./assets/icons/ShareIcon";
import { useState } from "react";
import { AddContentModal } from "./components/ui/AddContentModal";
import { TwitterIcon } from "./assets/icons/TwitterIcon";
import { YoutubeIcon } from "./assets/icons/YoutubeIcon";

function App() {
  const [addContentModalOpen, setAddContentModalOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen px-6 ml-60">
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
          onClick={() => {
            setAddContentModalOpen(true);
          }}
        />
      </div>

      <div className="flex justify-start items-start gap-4 flex-wrap">
        <Card
          type="twitter"
          link="https://twitter.com/elonmusk/status/1812256998588662068?ref_src=twsrc%5Etfw"
          title="Donald Trump"
          icon={<TwitterIcon size="md" />}
        />

        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=HyzlYwjoXOQ"
          title="Random"
          icon={<YoutubeIcon size="md" />}
        />
      </div>

      <AddContentModal
        title="Add Content"
        open={addContentModalOpen}
        onClose={() => {
          setAddContentModalOpen(false);
        }}
      />
    </div>
  );
}

export default App;

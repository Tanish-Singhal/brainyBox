import { Button } from "./Button";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { Input } from "./Input";
import { PlusIcon } from "../../assets/icons/PlusIcon";

export const AddContentModal = ({ title, open, onClose }: any) => {
  return (
    <div>
      {open && (
        <div className="bg-black/80 flex justify-center items-center h-screen w-full z-50 fixed top-0 left-0">
          <div className=" bg-background rounded-md p-2 w-2/5">
            <div className="flex justify-end items-center" onClick={onClose}>
              <CloseIcon color="white" size="lg" hoverEffect={true} />
            </div>

            <div className="p-2 pt-0">
              <h1 className="text-white font-semibold text-center text-3xl mb-5">
                {title}
              </h1>
              <div className="flex flex-col gap-4">
                <Input
                  type={"text"}
                  label="Title"
                  placeholder="Latest Trump Policy"
                />
                <Input
                  type={"text"}
                  label="Link"
                  placeholder="https://www.youtube.com/watch?v=XqZsoesa55w"
                />
              </div>

              <div className="flex justify-center items-center mt-8">
                <Button
                  variant="primary"
                  size="md"
                  text="Submit"
                  startIcon={<PlusIcon size="md" color="black" />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

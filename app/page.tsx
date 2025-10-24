import { 
  Form,
  Navbar
} from "./modules/core/main";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-5 justify-center items-center mt-10">
        <Form />
        <Button>Add question</Button>
      </div>
    </div>
  );
}

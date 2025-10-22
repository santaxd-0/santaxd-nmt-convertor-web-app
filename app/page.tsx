import { 
  TXTReaderContainer,
  PDFResultContainer,
  Navbar
} from "./modules/core/main";


export default function Home() {
  return (
    <div>
      <Navbar />
    <div className="flex gap-5 h-screen p-5 justify-center">
      <TXTReaderContainer />
      <PDFResultContainer />
    </div>
    </div>
  );
}

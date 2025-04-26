import Titulo from "../components/common/Titulo";
import GridUI from "../components/ui/GridUi";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Titulo titulo="Barbearias Próximas" ></Titulo>
            <GridUI></GridUI>
        </div>
    );
}

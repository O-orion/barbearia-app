import { useParams } from "react-router-dom";


export default function BarberShopProfile() {
    const id: string = useParams().id || "";
    console.log(id);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">Home</h1>
            <p className="mt-4 text-lg">Welcome to the Home page!</p>
        </div>
    );
}

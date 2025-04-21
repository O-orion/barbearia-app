
export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold">404 - Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
            <p className="mt-4 text-lg">Please check the URL or return to the home page.</p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">Go to Home</a>
        </div>
    );

}

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex flex-col h-screen items-center text-center justify-center'>
        <div id="error-page">
            <h1 className="text-3xl font-semibold">Oops!</h1>
            <p className="text-xl font-semibold">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl font-semibold underline">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </div>
    
  );
}
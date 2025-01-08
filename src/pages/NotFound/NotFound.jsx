import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {

     const navigate = useNavigate();

  return (
    <div
      className="h-full w-full flex items-center justify-center " >
      <Card className=" h-full w-full  border-gray-100"
    >
        <CardHeader>
          <CardTitle className="text-4xl font-bold">404 not Found</CardTitle>
          <p className="text-1xl font-thin  ">
            The page you are Looking for does not exist
          </p>
        </CardHeader>
        <CardContent>
          
          <img src="https://media0.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" />

          <Button variant="outline"
          onClick={(() => navigate(-1)) }
          className="mt-4 bg-slate-500">
            Go Back
          </Button>
        
        </CardContent>
      </Card>
    </div>
  );
};

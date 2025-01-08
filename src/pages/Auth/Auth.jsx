import { SignupCard } from "@/Organisms/Auth/SignupCard"

export const Auth = () => {
     return (
         <div
         className=" h-[100vh] flex items-center justify-center bg-[#8c8686] "
         >
          <div
          className="md:h-auto md:w-[420px]"
          >
           <SignupCard />
          </div>

         </div>
     )
}

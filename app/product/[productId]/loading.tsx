import { Loader } from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="container">
      <div className="w-full h-screen flex justify-center items-center">
            <Loader />
      </div>
    </div>
  );
}
 
export default Loading;
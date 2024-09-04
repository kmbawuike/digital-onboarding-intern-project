import { RotatingLines } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="2"
      animationDuration="0.75"
      width="37"
      visible={true}
    />
  );
}

export default Loader;

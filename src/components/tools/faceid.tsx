import Face from "../../img/face-id.svg"
import "./style.css";
 const FaceIdScreen = (): JSX.Element => {
 return (
 <div className="face-id-screen">
 <img className="vector" alt="Vector" src={Face} />
 </div>
 );
}
export default FaceIdScreen;
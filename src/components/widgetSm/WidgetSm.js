import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';

// import img1 from "./istockphoto-514997006-1024x1024.jpg"
import img2 from "./istockphoto-537334728-1024x1024.jpg"
import img3 from "./istockphoto-855172390-1024x1024.jpg"
import img4 from "./istockphoto-969233490-1024x1024.jpg"
import img5 from "./istockphoto-1173261439-1024x1024.jpg"
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
          src={img4}
           alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
        
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
         
        </li>
        <li className="widgetSmListItem">
          <img
           src={img3}
           alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">priti roy</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src={img5}
             alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">mariya kole</span>
            <span className="widgetSmUserTitle">buisness development</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src={img2}
             alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">resmika mandarea</span>
            <span className="widgetSmUserTitle">artist</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
          src={img3}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">suparna bera</span>
            <span className="widgetSmUserTitle">teacher</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
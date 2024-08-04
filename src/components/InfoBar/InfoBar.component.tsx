import * as Avatar from "@radix-ui/react-avatar";
import "./InfoBar.css";
import type InfoBarProps from "./InfoBar.types";

const InfoBar: React.FC<InfoBarProps> = ({ userName, action, timeStamp }) => {
  return (
    <div className="BarContainer">
      <div className="Bar__Left">
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            CT
          </Avatar.Fallback>
        </Avatar.Root>
        <div className="User-Info">
          <h1>{userName}</h1>
          <h2>{action}</h2>
        </div>
      </div>
      <div className="Bar__Right">
        <h1>{timeStamp}</h1>
      </div>
    </div>
  );
};

export default InfoBar;

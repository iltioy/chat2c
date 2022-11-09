import { StyledSliderButton } from "./styled/SliderButton.styled";
import { IoMdSettings } from "react-icons/io";
import { IconType } from "react-icons";

interface Props {
    children: string;
    Icon: IconType;
    iconBackground?: string;
    iconColor?: string;
}

const SliderButton: React.FC<Props> = ({
    children,
    Icon,
    iconBackground,
    iconColor,
}) => {
    return (
        <StyledSliderButton
            iconBackground={iconBackground}
            iconColor={iconColor}
        >
            <div className="buttonWrapper">
                <div className="innerDiv">
                    <Icon className="icon" />
                    <div className="buttonText">{children}</div>
                </div>
            </div>
        </StyledSliderButton>
    );
};

export default SliderButton;

import { StyledSliderButton } from "./styled/SliderButton.styled";
import { IconType } from "react-icons";

interface Props {
    children: string;
    Icon: IconType;
    iconBackground?: string;
    iconColor?: string;
    input?: boolean;
    placeholder?: string;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const SliderButton: React.FC<Props> = ({
    children,
    Icon,
    iconBackground,
    iconColor,
    input,
    placeholder,
    value,
    setValue,
}) => {
    return (
        <StyledSliderButton
            iconBackground={iconBackground}
            iconColor={iconColor}
        >
            <div className="buttonWrapper">
                <div className="innerDiv">
                    <Icon className="icon" />

                    {input && setValue ? (
                        <div className="sliderButtonInputDiv">
                            <input
                                value={value}
                                placeholder={placeholder}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                                className="sliderButtonInput"
                            />
                        </div>
                    ) : (
                        <div className="buttonText">{children}</div>
                    )}
                </div>
            </div>
        </StyledSliderButton>
    );
};

export default SliderButton;

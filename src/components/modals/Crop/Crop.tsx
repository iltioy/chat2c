import { Dispatch, useState } from "react";
import { Point, Area } from "react-easy-crop/types";
import Cropper from "react-easy-crop";
import { StyledCrop } from "../../styled/Crop.syled";
import getCroppedImg from "../../../utils/cropImage";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal";
import { RootState } from "../../../store/store";
import { switchCropImageActive } from "../../../features/modalHandles/modalSlice";
import { AnyAction } from "@reduxjs/toolkit";

interface CropProps {
    imageURL: string;
    cropFile: File | null | undefined;
    actionOnCrop: (
        file: File,
        token: string,
        dispatch: Dispatch<AnyAction>
    ) => Promise<void>;
}

const Crop: React.FC<CropProps> = ({ imageURL, cropFile, actionOnCrop }) => {
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

    const { cropImageActive } = useSelector((state: RootState) => state.modal);

    const cropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const { token } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const cropImage = async () => {
        try {
            const { file } = await getCroppedImg(imageURL, croppedAreaPixels);

            await actionOnCrop(file, token, dispatch);
        } catch (error) {
            if (cropFile) {
                await actionOnCrop(cropFile, token, dispatch);
            }
        }

        dispatch(switchCropImageActive());
    };

    return (
        <>
            {cropImageActive && cropFile ? (
                <StyledCrop>
                    <Modal
                        className="modalDiv higherModal2"
                        actionOnDispatch={switchCropImageActive}
                    />
                    <div className="innerCrop">
                        <Cropper
                            image={imageURL}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onZoomChange={setZoom}
                            onCropChange={setCrop}
                            onCropComplete={cropComplete}
                            zoomSpeed={0.3}
                            showGrid={false}
                        />
                    </div>
                    <div className="cropBottom">
                        <div className="send" onClick={cropImage}>
                            Отправить
                        </div>
                    </div>
                </StyledCrop>
            ) : null}
        </>
    );
};

export default Crop;

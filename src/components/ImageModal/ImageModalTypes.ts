export type ImageModalProps = {
    images: string[];
    handleOpenModal: (pictureId?: number) => void;
    currentPicture: number | undefined;
};

export type ImageModalState = {
    slideInProgress: boolean;
    currentPicture: number;
};

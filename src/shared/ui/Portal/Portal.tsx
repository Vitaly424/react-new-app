import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;
    const { t } = useTranslation();

    return createPortal(children, element);
};

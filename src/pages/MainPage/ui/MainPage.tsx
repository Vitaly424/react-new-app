import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ backgroundColor: 'blue' }}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;

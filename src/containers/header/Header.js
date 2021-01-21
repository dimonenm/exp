import React from 'react';
import "./Header.css";
import "../../fonts/phosphor-icons/Icon Font/CSS/phosphor.css"
import BtnAdd from '../../components/btn-add/BtnAdd';
import BtnList from '../../components/btn-list/BtnList';
import BtnSearch from '../../components/btn-search/BtnSearch';

const Header = () => (
    <div className="header">
        <section className="header__menu">
            <div className="header__menu-title">Отдел криминалистических экспертих2</div>
            <div className="header__menu-buttons">
                <BtnAdd />
                <BtnList />
                <BtnSearch />
            </div>
        </section>
    </div>
);

export default Header;

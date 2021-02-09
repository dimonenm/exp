import React from 'react';
import ListItemBtnCreateNewExp from '../../components/btn-create-new-exp/ListItemBtnCreateNewExp';
import ListItemViewExp from '../../components/listItemViewExp/ListItemViewExp';
import "./Main.css";

const Main = ({ db }) => {

  const db2 = [];

  for (let index = db.year2021.length - 1; index >= 0; index--) {
    db2.push(db.year2021[index]);
  }

  return (
    <div className="main">
      <div className="main__list">
        <ListItemBtnCreateNewExp />
        {
          db2.map(item => {
            return (<ListItemViewExp key={item.id} exp={item} />);
          })
        }
      </div>
    </div>
  );
};

export default Main;
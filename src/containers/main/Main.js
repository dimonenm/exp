import React from 'react';
import ListItemBtnCreateNewExp from '../../components/btn-create-new-exp/ListItemBtnCreateNewExp';
import ListItemViewExp from '../../components/listItemViewExp/ListItemViewExp';
import "./Main.css";

const Main = ({ db }) => {

  const db2 = [];

  for (let index = db.year2021.length - 1; index >= 0; index--) {
    db2.push(db.year2021[index]);
  }

  const pages = Math.ceil(db2.length / 20);
  let currentPage = 1;
  let maxNumOfExps = currentPage * 20;
  let minNumOfExps = maxNumOfExps - 19;
  console.log(minNumOfExps);

  return (
    <div className="main">
      <div className="main__list">
        <ListItemBtnCreateNewExp />
        {
          db2.map((item, index) => {
            if (++index >= minNumOfExps && index <= maxNumOfExps) {
              return (<ListItemViewExp key={item.id} exp={item} />);
            }
            return null;
          })
        }
      </div>
    </div>
  );
};

export default Main;
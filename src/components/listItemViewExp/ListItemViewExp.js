import React from 'react';

const timeNumberToTimeString = (day, month, year) => {
  return `${(day < 10) ? '0' + day : day}.${(month < 10) ? '0' + month : month}.${year}`;
}

const ListItemViewExp = ({ exp }) => {

  const id = exp.id;
  const date_of_incoming = () => {
    const date = new Date(+exp.date_of_incoming);
    return timeNumberToTimeString(date.getDate(), date.getMonth() + 1, date.getFullYear());
  }
  const date_of_execution = () => {
    if (exp.date_of_execution) {
      const date = new Date(+exp.date_of_execution);
      return timeNumberToTimeString(date.getDate(), date.getMonth() + 1, date.getFullYear());
    } else {
      return 'не готова';
    }
  }
  const agency_of_initiator = exp.agency_of_initiator;
  const unit_of_initiator = exp.unit_of_initiator;
  const by_materials = exp.by_materials;
  const number_of_the_material = exp.number_of_the_material;
  const category_of_research = exp.category_of_research;
  const surname_of_executor = exp.surname_of_executor;

  return (
    <div className="main__item">
      {/* <div className="main__item-status">ВЫПОЛНЯЕТСЯ осталось - 15 дн.</div> */}
      <div className="main__item-status"></div>
      <div className="main__item-data">
        <div className="main__item-number">№ {id}</div>
        <div className="main__item-date">{date_of_incoming()} - {date_of_execution()}</div>
        <div className="main__item-agency">{agency_of_initiator}</div>
        <div className="main__item-unit">{unit_of_initiator}</div>
        <div className="main__item-byMaterial">{by_materials} {number_of_the_material}</div>
        <div className="main__item-type">{category_of_research}</div>
        <div className="main__item-executor">{surname_of_executor}</div>
        <div className="main__item-state">
          <div className="main__item-state-item main__item-state-item-active main__item-state-ready">готова к выдачи</div>
          <div className="main__item-state-item main__item-state-on-hands">выдана нарочно</div>
          <div className="main__item-state-item main__item-state-on-post">отп-на почтой</div>
        </div>
      </div>
    </div>
  );
}

export default ListItemViewExp;
